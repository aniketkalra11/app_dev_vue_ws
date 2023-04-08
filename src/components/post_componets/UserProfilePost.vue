<template>
	<div class="container" v-for="post in list_display_post" :key="post.post_id">
		<!-- {{ post }} -->
		<PostWithImage :is_owner="is_owner" v-if="!post.is_text_only" :post_id="post.post_id"></PostWithImage>
		<PostWithTextOnly :is_owner="is_owner" v-else  :post_id="post.post_id"></PostWithTextOnly>
	</div>
	<PaginationContainer></PaginationContainer>
	<!-- <div class="container">
		<PostWithImage is_owner="true"></PostWithImage>
	</div>
	<div class="container">
		<PostWithTextOnly is_owner="true"></PostWithTextOnly>
	</div> -->
</template>

<script>
import PaginationContainer from '../dashboard_components/PaginationContainer.vue';
import PostWithImage from './PostWithImage.vue';
import PostWithTextOnly from './PostWithTextOnly.vue';
import axios from 'axios'
export default{
	data(){
		return{
			list_post : [],
			list_display_post : [],
			post_fragments: [],
			total_post: 0,
			limit_of_post_per_page : 4,
			path: '',
			num_page : 0
		}
	},
	props:['is_owner', 'user_id'],
	components:{
    PostWithImage,
    PostWithTextOnly,
    PaginationContainer
},
	async created(){
		axios.defaults.headers.common["Authorization"] = 'Bearer ' + window.localStorage.getItem("token");
		this.updatePostList()
	},
	methods:{
	set_page_containt(page_num){
		this.list_display_post = this.post_fragments[page_num -1]
	},
	async updatePostList(){
		this.path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/user/post/" + this.user_id;
		console.log('user_id', window.localStorage.getItem('user_id'));
		await axios.put(this.path, {}).then(response =>{
			console.log('response received', response);
			if (response.status == 200)
			{
				let data = response.data
				console.log('response data:', data);
				this.list_post = data.list_post;
				this.total_post = this.list_post.length
				// console.log(typeof(response.data.list_post))
				console.log(this.list_post)
			}
		}).catch(err =>{
			console.log('err arrived', err);
		})
	}

},
watch: {
	list_post(){
		let temp = []
		for (let i = 0; i< this.total_post; i++)
		{
			temp.push(this.list_post[i])
			if (i % this.limit_of_post_per_page ==  this.limit_of_post_per_page - 1)
			{
				this.post_fragments.push(temp)
				temp = []
				this.num_page ++;
			}

		}
		if (temp.length != 0)
		{
			this.post_fragments.push(temp)
			this.num_page ++;
		}
		this.list_display_post = this.post_fragments[0]
	}
}
}
</script>

<style scoped>

</style>