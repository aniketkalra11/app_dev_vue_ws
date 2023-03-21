<template>
	<NavBar current_active_bar="createpost"></NavBar>
	<div class="container post_container" style="background-color: white;">
		<form>
			<div class="form-group">
				<label for="exampleFormControlInput1" >Post title</label>
				<input type="text" class="form-control" id="post_title" placeholder="That describes the post" v-model="postTitle">
			</div>
			<div class="form-group">
				<label for="exampleFormControlSelect1">Post Type</label>
				<select class="form-control" id="exampleFormControlSelect1">
					<option>Private Post</option>
					<option selected>Public Post</option>
				</select>
			</div>
			<div class="form-group">
				<label for="exampleFormControlTextarea1">post containt</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  v-model="postContaint" placeholder="Please write your containt here"></textarea>
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
				<label for="exampleFormControlFile1">Please select a image which you want to upload</label>
				<input type="file" class="form-control-file" id="exampleFormControlFile1">
			</div>
			<div class="">
				<button type="submit" class="btn btn-primary mb-2">Create Post</button>
			</div>
		</form>
	</div>
</template>

<script>
import NavBar from '../nav_bar/NavContainer.vue'
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