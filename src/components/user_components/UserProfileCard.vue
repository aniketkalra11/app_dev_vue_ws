<template>
	<div class="container profile_card">
		<div class="card" style="width: 18rem;">
			<img class="card-img-top" :src="createProfileUrl(img_link)" alt="Card image cap">
			<div class="card-body">
				<h5 class="card-title">Card title</h5>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">Number of Post: {{ num_posts }}</li>
				<li class="list-group-item">Number of followers: {{ num_of_followrs }}</li>
				<li class="list-group-item">Number of following: {{ num_of_followings }}</li>
			</ul>
			<div class="card-body">
				<a href="#" class="card-link" v-if="!is_already_following">Follow</a>
				<a href="#" class="card-link" v-if="is_already_following">UnFollow</a>
				<a href="#" class="card-link">Visit Profile</a>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:['user_id', 'name', 'num_posts', 'num_of_followrs', 'num_of_followings', 'is_already_following', 'img_link'],
	data(){
		return {
			// name: 'Something',
			// num_of_posts: 0,
			// num_of_followers: 0,
			// num_of_followings: 0,
			// is_following: false,
			// img_src: ''

		}
	},
	async created(){
		console.log('creating profile')
		this.is
	},
	methods:{
		createProfileUrl(profile_link){
			let url = process.env.VUE_APP_FLASK_SERVER_URL + "/static/" + profile_link
			return url
		}
	}

}
</script>

<style scoped>
.profile_card{
	margin: 10px;
}

</style>