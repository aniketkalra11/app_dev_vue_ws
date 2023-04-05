<template>
	<NavBar current_active_bar="search"></NavBar>
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
				<ProfileCard :user_id="user.user_id" :name="user.name" :num_of_followrs="user.num_of_followers" :num_of_followings="user.num_of_following" :is_already_following="user.is_already_following" :img_link="user.profile_photo" ></ProfileCard>
			</div>
		</div>
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
			list_users : []
		}
	},
	created(){
		console.log("env var is:", process.env);
		console.log("Calling api using axios");
		let path= process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/user/search"
		let key_word = this.$route.params['keyword']
		console.log('keyword is', key_word)
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
		// const path= "http://172.25.254.249:5000/api/test"
		// axios.post(path,{
			
		// }
		// ).then(response => {
		// 	console.log(response)
		// }).catch(err =>{
		// 	console.log(err)
		// })

		// console.log('creating fragments')
		// let index=0;
		// let temp = [];
		// for ( let i=0; i<this.result_profiles.length; i++)
		// {
		// 	temp[i%3] = this.result_profiles[i]
		// 	if(i%3 == 2)
		// 	{
		// 		this.profile_fragments[index] = temp;
		// 		console.log('temp is:', temp);
		// 		temp = []
		// 		console.log('temp now: ', temp);
		// 		index++;
		// 	}
		// 	if( i == this.result_profiles.length -1  && temp != [])
		// 	{
		// 		console.log('appending left overs', temp);
		// 		this.profile_fragments[index] = temp;

		// 	}
		// }
		console.log('creating artificial ids')
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
		}
	}
}
</script>

<style scoped>

</style>