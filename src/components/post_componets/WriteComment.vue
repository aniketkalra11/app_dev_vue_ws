<template>
	<div class="container">
		<div class="card">
		<div class="card-header">
			{{ user_name }}
			<span class="card-subtitle mb-2 text-muted"> </span>
		</div>
		<div class="card-body">
			<!-- <h5 class="card-title">Special title treatment</h5> -->
				<div class="form-group">
					<label for="exampleFormControlTextarea1">Write Your comment here</label>
					<textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write is your opinion" v-model=	"containt"></textarea>
				</div>
				<button type="submit" class="btn btn-primary" @click="add_comment">Comment</button>
		</div>
	</div>
	</div>
</template>

<script>
import axios from 'axios'
export default{
	props:[],
	data(){
		return {
			comment_url: '',
			containt: '',
			user_name : ''
		}
	},
	created(){
		this.user_name = window.localStorage.getItem('user_name')
	},
	methods:{
		add_comment(){
			let json_data = {
				'post_id': this.$parent.post_id,
				'containt': this.containt
			}
			console.log('comment converted to json', json_data)
			axios.post(this.$parent.post_comment_path, json_data).then(response =>{
				console.log('post comment creation received', response)
				if (response.status == 200)
				{
					console.log('second check')
					let data = response.data
					console.log('data received', data)
					if (data.is_success == 'True'){
						let result_json = {
							'commenter_id': window.localStorage.getItem('user_id'),
							'commenter_name': window.localStorage.getItem('user_name'),
							'comment_content': this.containt
						}
						this.$parent.list_comments.push(result_json)
						this.$parent.comment_count ++;
						console.log('result pushed', this.$parent.list_comments)
						this.containt = '';	
					}
				}
			}).catch(err =>{
				console.log('error arrived during comment addition:', err);
			})
		}
	}


}
</script>

<style scoped>

</style>