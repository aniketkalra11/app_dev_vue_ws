<template>
	<NavBar></NavBar>
	<div class="container">
		<UserProfilePost></UserProfilePost>
	</div>
</template>

<script>
import NavBar from '../nav_bar/NavContainer.vue'
import UserProfilePost from '../post_componets/UserProfilePost.vue';
export default{
	components:{
		NavBar,
		UserProfilePost
	}
}
</script>

<style scoped>

</style>