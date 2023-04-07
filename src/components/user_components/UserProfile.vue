<template>
	<NavBar current_active_bar="profile"></NavBar>
	<UserDetailView :is_owner="true" :user_id="user_id"></UserDetailView>
	<div class="container">
		<UserProfilePost  :is_owner="true" :user_id="user_id"></UserProfilePost>
	</div>
</template>

<script>
import NavBar from '../nav_bar/NavContainer.vue'
import UserProfilePost from '../post_componets/UserProfilePost.vue';
import UserDetailView from './UserDetailView.vue';
export default{
	data(){
		return {
			user_id : window.localStorage.getItem('user_id')
		}
	},
	components:{
		NavBar,
		UserDetailView,
		UserProfilePost
	}
}
</script>

<style scoped>

</style>