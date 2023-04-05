<template>
	<div class="container" v-for="post in list_post" :key="post.post_id">
		<!-- {{ post }} -->
		<PostWithImage is_owner="true" v-if="!post.is_text_only" :post_id="post.post_id"></PostWithImage>
		<PostWithTextOnly is_owner="true" v-else  :post_id="post.post_id"></PostWithTextOnly>

	</div>
	<!-- <div class="container">
		<PostWithImage is_owner="true"></PostWithImage>
	</div>
	<div class="container">
		<PostWithTextOnly is_owner="true"></PostWithTextOnly>
	</div> -->
</template>

<script>
import PostWithImage from './PostWithImage.vue';
import PostWithTextOnly from './PostWithTextOnly.vue';
import axios from 'axios'
export default{
	data(){
		return{
			list_post : [],
			path:''
		}
	},
	components:{
		PostWithImage,
		PostWithTextOnly
	},
	async created(){
		this.path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/user/post/" + window.localStorage.getItem("user_id");
		console.log('user_id', window.localStorage.getItem('user_id'));
		let config = {
			header:{
				'Token': window.localStorage.getItem('token')
			}
		}
		await axios.put(this.path, {}, config).then(response =>{
			console.log('response received', response);
			if (response.status == 200)
			{
				let data = response.data
				console.log('response data:', data);
				this.list_post = data.list_post;
			}
		}).catch(err =>{
			console.log('err arrived', err);
		})
	}
}
</script>

<style scoped>

</style>