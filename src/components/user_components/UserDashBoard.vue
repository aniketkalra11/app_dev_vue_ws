<template>
<nav-bar current_active_bar="home"></nav-bar>
<RecentPostCarousel></RecentPostCarousel>
<div class="container">
	<PostWithImage></PostWithImage>
	<PostWithTextOnly></PostWithTextOnly>
</div>
</template>

<script>
import NavBar from '../nav_bar/NavContainer.vue'
import RecentPostCarousel from '../dashboard_components/RecentPostCarousel.vue';
import PostWithImage from '../post_componets/PostWithImage.vue';
import PostWithTextOnly from '../post_componets/PostWithTextOnly.vue';

const dashboard = {
components:{
	NavBar,
	RecentPostCarousel,
	PostWithImage,
	PostWithTextOnly
}
};
export default dashboard;
</script>

<style scoped>

</style>