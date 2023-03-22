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
		<div class="row" v-for="ids in profile_fragments" :key="ids">
			<div class="col-sm" v-for="id in ids" :key="id">
				<ProfileCard></ProfileCard>
			</div>
		</div>
	</div>
</template>


<script>
import ProfileCard from '../user_components/UserProfileCard.vue'
import NavBar from '../nav_bar/NavContainer.vue'
export default{
	components:{
		ProfileCard,
		NavBar
	},
	data(){
		return{
			result_profiles: [1,2,3,4,5,6,7,8],
			profile_fragments: []
		}
	},
	async created(){
		console.log('creating fragments')
		let index=0;
		let temp = [];
		for ( let i=0; i<this.result_profiles.length; i++)
		{
			temp[i%3] = this.result_profiles[i]
			if(i%3 == 2)
			{
				this.profile_fragments[index] = temp;
				console.log('temp is:', temp);
				temp = []
				console.log('temp now: ', temp);
				index++;
			}
			if( i == this.result_profiles.length -1  && temp != [])
			{
				console.log('appending left overs', temp);
				this.profile_fragments[index] = temp;
			}
		}
		console.log('creating artificial ids')
	}
}
</script>

<style scoped>

</style>