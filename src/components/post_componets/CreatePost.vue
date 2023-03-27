<template>
	<NavBar current_active_bar="createpost"></NavBar>
	<div class="container post_container" style="background-color: white;">
		<form @submit.prevent="submitForm">
			<div class="form-group">
				<label for="post_title" >Post title</label>
				<input type="text" class="form-control" id="post_title" placeholder="That describes the post" v-model="postTitle">
			</div>
			<div class="form-group">
				<label for="post_type">Post Type</label>
				<select class="form-control" id="post_type">
					<option>Private Post</option>
					<option selected>Public Post</option>
				</select>
			</div>
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
				<button type="submit" class="btn btn-primary mb-2" @click="sendCreatePostRequest()
			">Create Post</button>
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
			is_writing_started: false
		}
	},
	methods:{
		getPostContaint(){
			return this.postContaint;
		},
		sendCreatePostRequest(){
			// This will send a api request to create a post
			let post_title = this.postTitle
			console.log('post_title: ', post_title)
			let post_containt = this.postContaint
			console.log('post_containt: ', post_containt)
			let post_type = document.getElementById('post_type').value
			console.log("post type: ", post_type)
			const file = document.getElementById('post_image').files[0]
			const formData = new FormData()
			formData.append('image', file)
			formData.append('post_title', post_title)
			formData.append('post Containt', post_containt)
			formData.append('post_type', post_type)
			console.log("Create post request received", file)
			let flask_url = process.env.VUE_APP_FLASK_SERVER_URL
			console.log( 'url is', flask_url)
			let path = flask_url + '/api/v2/post/' + localStorage.getItem('user_id') + "/sample_post"
			fetch(path,  {
				method: "post",

				body: formData
			}).then((response) =>{
				console.log(response)
				return response.data
			}).then((data) =>{
				console.log('data receiveing: ', data)
			}).catch((err) =>{
				console.log(' error arrived', err)
			})
			const config = {
				headers:{
					"token": localStorage.getItem('token'),
					'Access-Control-Allow-Origin': "*"
				}
			}
			axios.post(path, formData, config).then((response) =>{
				console.log("response", response)
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