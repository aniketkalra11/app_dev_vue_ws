<template>
<nav-bar current_active_bar="home"></nav-bar>
<RecentPostCarousel></RecentPostCarousel>
<div class="container" v-for="post in list_display_post" :key="post.post_id">
	<PostWithImage v-if="!post.is_text_only" :post_id="post.post_id"></PostWithImage>
	<PostWithTextOnly v-else :post_id="post.post_id" ></PostWithTextOnly>
</div>
<PaginationContainer v-if="list_display_post.length !=0"></PaginationContainer>
<h1 v-if="list_display_post.length ==0" >No Post Available</h1>
</template>

<script>
import axios from 'axios'
import NavBar from '../nav_bar/NavContainer.vue'
import RecentPostCarousel from '../dashboard_components/RecentPostCarousel.vue';
import PostWithImage from '../post_componets/PostWithImage.vue';
import PostWithTextOnly from '../post_componets/PostWithTextOnly.vue';
import PaginationContainer from '../dashboard_components/PaginationContainer.vue';


const dashboard = {
	data(){
		return {
			list_post : [],
			list_display_post : [],
			post_fragments: [],
			total_post: 0,
			limit_of_post_per_page : 4,
			path: '',
			num_page : 0
		}
	},
components:{
	NavBar,
	RecentPostCarousel,
	PostWithImage,
	PostWithTextOnly,
	PaginationContainer
},
created(){
	axios.defaults.headers.common["Authorization"] = 'Bearer ' + window.localStorage.getItem("token");
	this.path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/user/post/" + window.localStorage.getItem("user_id")

	axios.get(this.path, {}).then(response =>{
			if (response.status == 200)
			{
				console.log('response data', response.data)
				this.list_post = response.data.list_post
				this.total_post = this.list_post.length
				// console.log(typeof(response.data.list_post))
				console.log(this.list_post)
			}
		})
	},
methods:{
	set_page_containt(page_num){
		this.list_display_post = this.post_fragments[page_num -1]
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
};
export default dashboard;
</script>

<style scoped>

</style>