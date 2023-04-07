<template>
	<div class="container profile_card">
		<div class="card" style="width: 18rem;">
			<img class="card-img-top" :src="createProfileUrl(img_link)" alt="Card image cap">
			<div class="card-body">
				<router-link :to="'/user/visit/profile/' + user_id "><h5 class="card-title">{{ name }}</h5></router-link>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">Number of Post: {{ num_posts }}</li>
				<li class="list-group-item">Number of followers: {{ flwr_count }}</li>
				<li class="list-group-item">Number of following: {{ flwing_count }}</li>
			</ul>
			<div class="card-body">
				<a :href="'#' + user_id" class="card-link" v-if="!is_following" @click="sendFollowRequest">Follow</a>
				<a :href="'#' + user_id" class="card-link" v-if="is_following" @click="removeFollowRequest">UnFollow</a>
				<router-link :to="'/user/visit/profile/' + user_id " class="card-link">Visit Profile</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default{
	props:['user_id', 'name', 'num_posts', 'num_of_followrs', 'num_of_followings', 'is_already_following', 'img_link'],
	data(){
		return {
			// name: 'Something',
			// num_of_posts: 0,
			// num_of_followers: 0,
			// num_of_followings: 0,
			// is_following: false,
			// img_src: '',
			is_following: false,
			follow_api_path: '',
			flwr_count :0,
			flwing_count : 0,
			api_data: {},
			headers: {},
			axios_config : {}
		}
	},
	async created(){
		console.log('creating profile')
		this.is_following = this.is_already_following;
		this.flwr_count = this.num_of_followrs;
		this.flwing_count = this.num_of_followings;
		this.follow_api_path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/user/follow"
		console.log('Follow user api path', this.follow_api_path);
		this.api_data = {
				"user_id": window.localStorage.getItem("user_id"),
				"f_user_id": this.user_id
			}
			this.headers = {
				"Content-Type" : "application/json"
			}
			this.axios_config = {
				headers: this.headers
			}
			axios.defaults.headers.common["Content-Type"] = "application/json";
			axios.defaults.headers.common["Authorization"] = 'Bearer ' + window.localStorage.getItem("token");
	},
	methods:{
		createProfileUrl(profile_link){
			let url = process.env.VUE_APP_FLASK_SERVER_URL + "/static/" + profile_link
			return url
		},
		sendFollowRequest(){
		
			axios.put(this.follow_api_path, this.api_data).then(response=>{
				if (response.status == 200)
				{
					let data = response.data;
					this.flwr_count = data.num_followers;
					this.flwing_count = data.num_following;
					this.is_following = true;
				}
				else{
					console.log('error arrived during user addition');
				}
			}).catch(err =>{
				console.log('error in user add user', err);
			})
		},
		removeFollowRequest(){
			axios.post(this.follow_api_path, this.api_data).then(response=>{
				if (response.status == 200)
				{
					let data = response.data;
					this.flwr_count = data.num_followers;
					this.flwing_count = data.num_following;
					this.is_following = false;
				}
				else{
					console.log('error arrived during user addition');
				}
			}).catch(err =>{
				console.log('error in user add user', err);
			})
		}
	}

}
</script>

<style scoped>
.profile_card{
	margin: 10px;
}

</style>