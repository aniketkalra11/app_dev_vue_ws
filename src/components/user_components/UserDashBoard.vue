<template>
<nav-bar current_active_bar="home"></nav-bar>
<RecentPostCarousel></RecentPostCarousel>
<div class="container" v-for="post in list_post" :key="post.post_id">
	<PostWithImage v-if="!post.is_text_only" :post_id="post.post_id"></PostWithImage>
	<PostWithTextOnly v-else :post_id="post.post_id" ></PostWithTextOnly>
</div>
</template>

<script>
import axios from 'axios'
import NavBar from '../nav_bar/NavContainer.vue'
import RecentPostCarousel from '../dashboard_components/RecentPostCarousel.vue';
import PostWithImage from '../post_componets/PostWithImage.vue';
import PostWithTextOnly from '../post_componets/PostWithTextOnly.vue';

const dashboard = {
	data(){
		return {
			list_post : [],
			path: ''
		}
	},
components:{
	NavBar,
	RecentPostCarousel,
	PostWithImage,
	PostWithTextOnly
},
created(){
	this.path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/user/post/" + window.localStorage.getItem("user_id")
	let config = {
		headers:{
			'Token': window.localStorage.getItem('token')
		}
	};
	axios.get(this.path, {}, config).then(response =>{
		if (response.status == 200)
		{
			console.log('response data', response.data)
			this.list_post = response.data.list_post
			// console.log(typeof(response.data.list_post))
			console.log(this.list_post)
			for (let x in this.list_post)
			{
				console.log(x);
			}
		}
	})
}
};
export default dashboard;
</script>

<style scoped>

</style>