<template>
	<NavBar :current_active_bar="none"></NavBar>
	<div class="container">
		<!-- <div id="carouselExampleSlidesOnly" class="carousel slide " data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img class="d-block w-100 image_size" :src="image_url" alt="First slide" v-if="is_image_available">
				</div>
				</div>
			</div> -->
			<PostWithImage v-if="!is_text_only_post" :post_id="post_id"></PostWithImage>
			<PostWithTextOnly v-else :post_id="post_id"></PostWithTextOnly>
			<div id="accordion">

		<div class="card">
			<div class="card-header" id="headingTwo">
				<h5 class="mb-0">
					<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						Likes
					</button>
				</h5>
			</div>
			<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
				
				<LikeUserGrid>

				</LikeUserGrid>
			</div>
		</div>
		<div class="card">
			<div class="card-header" id="headingThree">
				<h5 class="mb-0">
					<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						Comments
					</button>
				</h5>
			</div>
			<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
				<div class="card-body">
					<h6>Currently This post Have {{ comment_count }} comments</h6>
					<PostComment v-for="comment in list_comments" :key="comment.commenter_id" :user_id="comment.commenter_id" :user_name="comment.commenter_name" :comment="comment.comment_content"></PostComment>
					<WriteComment></WriteComment>
				</div>
			</div>
		</div>
	</div>
	</div>


</template>

<script>
import NavBar from '../nav_bar/NavContainer.vue';
import LikeUserGrid from './LikeUserGrid.vue';
import PostComment from './PostCommentContainer.vue'
import WriteComment from './WriteComment.vue'
import PostWithImage from './PostWithImage.vue'
import PostWithTextOnly from './PostWithTextOnly.vue'

import axios from 'axios'
export default{
	data(){
		return {
			num_of_comments:[1,2,3,4,5],
			list_comments: [],
			comment_path : '',
			like_path: '',
			bookmark_path: '',
			list_user_likes: [],
			likes_count : 0,
			comment_count: 0,
			image_url: '',
			post_comment_path: '',
			is_image_available : false,
			is_text_only_post : false,
			post_id : ''
		}
	},
	async created(){
		this.post_id = this.$route.params.post_id
		let post_id = this.post_id
		this.is_text_only_post = this.$route.params.is_text_only_post == '1' ? true : false;
		console.log('param is:', post_id)
		this.like_path = process.env.VUE_APP_FLASK_SERVER_URL + '/api/v2/like/post/' + localStorage.getItem('user_id') + "/" + post_id
		let post_get_path =  process.env.VUE_APP_FLASK_SERVER_URL + '/api/v2/post/' + localStorage.getItem('user_id') + "/" + post_id
		this.post_comment_path = process.env.VUE_APP_FLASK_SERVER_URL + '/api/v2/comment/post/' + localStorage.getItem('user_id') + "/" + post_id
		await axios.get(post_get_path, {}).then(response=>{
			// Receiving post response
			if(response.status == 200)
			{
				console.log('post_response is:', response.data)
				if (response.data.image_url == "NOT_AVAILABLE")
				{
					this.image_url = ""
				}
				else
				{
					this.image_url = this.getImageUrl(response.data.image_url)
					this.is_image_available = true;
				}
				this.likes_count = response.data.likes
				this.comment_count = response.data.comment_count
			}

		})
		//moved to seprate block
		// await axios.get(this.like_path, {} ).then(response =>{
		// 	if (response.status == 200)
		// 	{
		// 		console.log('response received as:', response);
		// 		let data = response.data
		// 		console.log('like data:', data)
		// 		this.likes_count = data.likes
		// 		if (data.likes_count != 0)
		// 		{
		// 			console.log('list of likers is:', data.list_user_likes)
		// 			this.list_user_likes = data.list_user_likes
		// 		}
				
		// 	}
		// }).catch(err=>{
		// 	console.log('error arrived during like fetch', err)
		// })
		await axios.get(this.post_comment_path, {}).then(response =>{
			if (response.status == 200)
			{
				console.log('comment received');
				let data = response.data
				console.log(data)
				if (data.post_id == post_id)
				{
					this.list_comments = data.comments
				}
			}
		}).catch(err =>{
			console.log('error arrived during comment fetch', err)
		})
	},
	components:{
    NavBar,
    LikeUserGrid,
    PostComment,
    WriteComment,
    PostWithImage,
    PostWithTextOnly
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
.carousel_size{

	width: 40vw;
}
.image_size{

	width: 50vw;
}

</style>