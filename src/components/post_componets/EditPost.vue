<template>
	<NavBar current_active_bar="createpost"></NavBar>
	<div class="container post_container" style="background-color: white;">
		<form @submit.prevent="sendEditPostRequest">
			<div class="form-group">
				<label for="post_title" >Post title</label>
				<input type="text" class="form-control" id="post_title" placeholder="That describes the post" v-model="postTitle">
			</div>
			<div class="form-group">
				<label for="post_type">Post Type</label>
				<select class="form-control" id="post_type">
					<option value="private">Private Post</option>
					<option value="public" selected>Public Post</option>
				</select>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="photo_d" id="flexRadioDefault1" checked value="keep_photo" v-model="photo_d">
				<label class="form-check-label" for="flexRadioDefault1">
					Keep Post Photo
				</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="photo_d" id="flexRadioDefault2"  value="remove_photo" v-model="photo_d">
				<label class="form-check-label" for="flexRadioDefault2">
					Remove Post Photo
				</label>
			</div>
			<br>
			<div class="form-group">
				<label for="post_containt">post containt</label>
				<textarea class="form-control" id="post_containt" rows="3"  v-model="postContaint" placeholder="Please write your containt here"></textarea>
			</div>
			<div class="card w-50" v-show="is_writing_started">
			<div class="card-body">
				<h4 class="card-title">Live vue</h4>
				<hr>
				<h5 class="card-title">{{ postTitle }}</h5>
				<p class="card-text" v-html="getPostContaint()" ></p>
			</div>
			</div>
			<div class="form-group">
				<label for="post_image">Please select a image which you want to upload</label>
				<input type="file" class="form-control-file" id="post_image">
			</div>
			<div class="">
				<button type="submit" class="btn btn-primary mb-2">Update Post</button>
			</div>
		</form>
	</div>
</template>

<script>
import NavBar from '../nav_bar/NavContainer.vue'
import axios from 'axios'
export default{
	data(){
		return {
			postTitle: "",
			postContaint: "",
			photo_d: "keep_photo",
			is_writing_started: false,
			post_id: ''
		}
	},
	created(){
		axios.defaults.headers.common["Authorization"] = 'Bearer ' + window.localStorage.getItem("token");
		this.post_id = this.$route.params['post_id']
		let path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/post/";
		let get_post_path = path + window.localStorage.getItem('user_id') + "/" + this.post_id;
		axios.get(get_post_path).then(response=>{
			if (response.status == 200)
			{
				let data = response.data;
				this.postTitle = data.title;
				this.postContaint = data.caption;
			}
		}
		)
	},
	methods:{
		getPostContaint(){
			return this.postContaint;
		},
		async sendEditPostRequest(){
			// This will send a api request to create a post
			let post_title = this.postTitle
			console.log('post_title: ', post_title)
			let post_containt = this.postContaint
			console.log('caption ', post_containt)
			let post_type = document.getElementById('post_type').value
			console.log("post type: ", post_type)
			const file = document.getElementById('post_image').files[0]
			const formData = new FormData()
			formData.append('image', file)
			formData.append('title', post_title)
			formData.append('caption', post_containt)
			formData.append('type', post_type)
			formData.append('photo_d', this.photo_d)
			console.log("Create post request received", file)
			let flask_url = process.env.VUE_APP_FLASK_SERVER_URL
			console.log( 'url is', flask_url)
			let path = flask_url + '/api/v2/post/' + localStorage.getItem('user_id') + "/" + this.post_id;
			const config = {
				headers:{
					"token": localStorage.getItem('token'),
				}
			}
			await axios.put(path, formData, config).then((response) =>{
				console.log("response", response)
				let data = response.data
				console.log(data)
				if (data.is_success)
				{
					console.log('post creation complete, redirecting to profile')
					this.$router.push('/user/profile')
				}
				else{
					console.log('unable to create log error arrived:', data.err)
					alert('error arrived: ', data.err);
				}
			}).catch((err) =>{
				console.log(err)
			})
		}
	},
	watch: {
		postTitle(){
			if (this.postTitle != "")
			{
				this.is_writing_started = true
			}
			else
			{
				if (this.postTitle == "" && this.postContaint == "")
				{
					this.is_writing_started = false;
				}
			}
		},
		postContaint(){
			if (this.postTitle != "")
			{
				this.is_writing_started = true
			}
			else
			{
				if (this.postTitle == "" && this.postContaint == "")
					{
						this.is_writing_started = false;
					}
			}
		}
	},
	components:{
		NavBar
	}
}
</script>

<style scoped>
.post_container{
	background-color: white;
	margin-top: 2vh;
	border-radius: 3%;
	padding: 30px;
}

</style>