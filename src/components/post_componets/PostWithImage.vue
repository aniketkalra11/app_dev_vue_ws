<template>
<div class="container">
	<div class="card bg-dark text-white">
		<img class="card-img" :src="this.image_url" alt="Card image">
		<div class="card-img-overlay">
			<!-- <span class="card-title card_title_custom font-weight-bolder">user-id</span> -->

			<div class="dropdown dropdown_btn" v-if="is_owner">
				<a class="btn btn-secondary float-right" href="#" role="button"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical float-right float-top dropdown" viewBox="0 0 16 16">
					<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
					</svg>
				</a>
				<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" >
					<!-- <a class="dropdown-item" href="#">Hide Post</a> -->
					<router-link :to="'/user/post/edit/' + post_id" class="dropdown-item" href="#" v-if="is_owner">Edit Post</router-link>
					<a class="dropdown-item" href="#" v-if="is_owner">Delete Post</a>
				</div>
		</div>
		</div>
	</div>
	<PostContaint :timestamp="timestamp" :title="title" :caption="caption" :is_already_liked="is_already_liked" :is_bookmarked="is_bookmarked" :likes="likes" :comment_count="comment_count" :post_id="post_id"  ></PostContaint>
</div>
</template>

<script>
// import PostContainer from './PostContainer.vue';
import axios from 'axios'
import PostContaint from './PostContaint.vue'
export default {
	props:[ 'is_owner', 'post_id'],
		data() {
				return {
						path: '',
						likes: 0,
						is_already_liked: false,
						bookmarks: 0,
						is_bookmarked: false,
						comment_count: 0,
						title: '',
						caption: '',
						image_url: '',
						timestamp: '',
						user_id: '',
						user_name: '',
						is_text_only_post : false
				};
		},
		components: { 
			PostContaint 
		},
		async created(){
			axios.defaults.headers.common["Content-Type"] = "application/json";
			axios.defaults.headers.common["Authorization"] = 'Bearer ' + window.localStorage.getItem("token");
			console.log('creating image post for post_id', this.post_id);
			this.path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/post/";
			let get_post_path = this.path + window.localStorage.getItem('user_id') + "/" + this.post_id;
			this.user_id = window.localStorage.getItem('user_id');
			console.log('final url path is: ', this.path)
			let config = {
				headers:{
					'Token': window.localStorage.getItem('token')
				}
			}
			await axios.get(get_post_path, '', config).then(response =>{
				if (response.status == 200)
				{
					let data = response.data
					console.log(data);
					this.title = data.title;
					this.caption = data.caption;
					this.is_already_liked = data.is_already_liked;
					this.likes = data.likes;
					this.image_url = this.getImageUrl(data.image_url);
					this.comment_count = data.comment_count;
					this.is_bookmarked = data.is_already_bookmarked;
					// this.comment_count = data.comment_count;
					this.timestamp = data.timestamp;
					this.user_id = data.user_id
					this.user_name = data.user_name;
					// console.log('type of ')
				}
			})
		},
		methods:{
			getImageUrl(image_id){
				let final_url = process.env.VUE_APP_FLASK_SERVER_URL +  "/static/resources/img/" + image_id;
				return final_url
			}
		}


}
</script>

<style scoped>
.card_title_custom{
	width: 30vw;
	margin: 0px;
}
.dropdown_btn{
	margin:0px;
	
}
</style>