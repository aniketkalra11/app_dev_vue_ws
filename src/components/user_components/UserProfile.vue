<template>
	<NavBar current_active_bar="profile"></NavBar>
	<UserDetailView></UserDetailView>
	<div class="container">
		<UserProfilePost ></UserProfilePost>
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

	}
}
</script>

<style scoped>

</style>