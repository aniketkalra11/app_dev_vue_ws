<template>
	<NavBar current_active_bar="search" :is_in_search_bar="true"></NavBar>
	<div class="container">
		<!-- <div class="row">
			<div class="col-sm">
				<ProfileCard></ProfileCard>
			</div>
			<div class="col-sm">
				<ProfileCard></ProfileCard>
			</div>
			<div class="col-sm">
				<ProfileCard></ProfileCard>
			</div>
		</div> -->
		<div class="row" v-for="list_fragment in profile_fragments" :key="list_fragment">
			<div class="col-sm" v-for="user in list_fragment" :key="user">
				<!-- {{ user }} -->
				<ProfileCard :user_id="user.user_id" :name="user.name" :num_of_followrs="user.num_of_followers" :num_of_followings="user.num_of_following" :is_already_following="user.is_user_already_following" :img_link="user.profile_photo" :num_posts="user.num_of_post" :id="user.user_id" v-if="user.user_id != user_id"></ProfileCard>
				
			</div>
		</div>
		<h1 v-if="profile_fragments.length == 0" > No profile found</h1>
	</div>
</template>


<script>
import ProfileCard from '../user_components/UserProfileCard.vue'
import NavBar from '../nav_bar/NavContainer.vue'
import axios from 'axios'
export default{
	components:{
		ProfileCard,
		NavBar
	},
	data(){
		return{
			result_profiles: [1,2,3,4,5,6,7,8],
			profile_fragments: [],
			list_users : [],
			user_id: '',
			is_follower_page: false,
			is_following_page : false
		}
	},
	created(){
		axios.defaults.headers.common["Content-Type"] = "application/json";
		axios.defaults.headers.common["Authorization"] = 'Bearer ' + window.localStorage.getItem("token");
		try{
			console.log('test')
			let key = this.$route.params['key']
			this.user_id = this.$route.params['user_id']
			if (key == 1)
			{
				this.is_follower_page = true
			}
			else if(key == 2)
			{
				this.is_following_page = true;
			}
		}
		catch(err)
		{
			console.log('')
		}
		if(this.is_follower_page)
		{
			console.log('follow_page')
			this.get_follower_profiles();
		}
		else if(this.is_following_page)
		{
			console.log('following_page')
			this.get_following_profiles();
		}
		else{
			this.get_search_profiles();
		}
	},
	methods:{
		create_profile_fragments(){
			console.log('creating fragments')
			let index=0;
			let temp = [];
			for ( let i=0; i<this.list_users.length; i++)
			{
				temp[i%3] = this.list_users[i]
				if(i%3 == 2)
				{
					this.profile_fragments[index] = temp;
					console.log('temp is:', temp);
					temp = []
					console.log('temp now: ', temp);
					index++;
				}
				if( i == this.list_users.length -1  && temp != [])
				{
					console.log('appending left overs', temp);
					this.profile_fragments[index] = temp;
				}
		}
		},
		get_search_profiles(){
			console.log("env var is:", process.env);
			console.log("Calling api using axios");
			let path= process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/user/search"
			let key_word = this.$route.params['keyword']
			console.log('keyword is', key_word)
			// this.user_id = localStorage.getItem('user_id')
			let key = {
				"keyword" : key_word,
				"user_id" : localStorage.getItem('user_id')
			}
			axios.post(path, key).then(response =>{
				if(response.status == 200){
					let data = response.data
					this.list_users = data.list_user_container
					this.create_profile_fragments()
				}
			}).catch(err =>{
				console.log('error arrived during search ', err)
			})
			console.log('creating artificial ids')
		},

		get_follower_profiles(){
			let path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/follower/user/" + this.user_id;

			axios.get(path).then(response =>{
				if(response.status == 200)
				{
					let data = response.data;
					this.list_users = data.list_user_container;
					console.log(this.list_users)
					this.create_profile_fragments();
				}
			}).catch(err =>{
				console.log('error arrived during follower creation', err);
			})
		},

		get_following_profiles(){
			let path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/following/user/" + this.user_id;
			axios.get(path).then(response =>{
				if(response.status == 200)
				{
					let data = response.data;
					this.list_users = data.list_user_container;
					console.log(this.list_users)
					this.create_profile_fragments();
				}
			}).catch(err =>{
				console.log('error arrived during follower creation', err);
			})
		}

	}
}
</script>

<style scoped>

</style>