<template>
	<NavBar current_active_bar="profile"></NavBar>
	<UserDetailView :is_owner="false" :user_id="user_id"></UserDetailView>
	<div class="container">
		<UserProfilePost :is_owner="false" :user_id="user_id"></UserProfilePost>
	</div>
</template>

<script>
import NavBar from '../nav_bar/NavContainer.vue'
import UserProfilePost from '../post_componets/UserProfilePost.vue';
import UserDetailView from './UserDetailView.vue';
export default{
	components:{
		NavBar,
		UserDetailView,
		UserProfilePost
	},
	data(){
		return {
			user_id: this.$route.params['user_id']
		}
	},
	created(){
		if (window.localStorage.getItem('user_id') == this.user_id)
		{
			console.log('same user detected redirecting to profile page');
			this.$router.push('/user/profile');
		}
	}
}
</script>

<style scoped>

</style>