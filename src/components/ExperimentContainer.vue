<template>
	<NavBar></NavBar>
	<RecentPostCarousel></RecentPostCarousel>
	<div class="container ex_container">
		<LoadingGrowingSpinner></LoadingGrowingSpinner>
	</div>
	<div class="container post_with_text">
		<PostWithTextOnly></PostWithTextOnly>
		<PostWithImage></PostWithImage>
		<!-- <PostDeleteAndEditButton></PostDeleteAndEditButton> -->
	</div>
	<div class="container">
		<SearchWindow></SearchWindow>
	</div>
</template>

<script>
import LoadingGrowingSpinner from './LoadingGrowingSpinner.vue';
import PostWithTextOnly from './post_componets/PostWithTextOnly.vue';
import PostContainer from './post_componets/PostContainer.vue';
import PostWithImage from './post_componets/PostWithImage.vue';
import NavBar from './nav_bar/NavContainer.vue'
import RecentPostCarousel from './dashboard_components/RecentPostCarousel.vue';
import PostDeleteAndEditButton from './post_componets/PostDeleteAndEditButton.vue';
import SearchWindow from './search_bars/search_container.vue'




const expirement_container = {
	data(){

	},
	created(){

	},
	components:{
		LoadingGrowingSpinner,
		PostWithTextOnly,
		PostContainer, 
		PostWithImage,
		NavBar,
		RecentPostCarousel,
		PostDeleteAndEditButton,
		SearchWindow
	}
}
export default expirement_container
</script>

<style scoped>
.ex_container{
	position:absolute;
	top: 10vh;
	left: 10vw;
	height: 10vh;
	width: 10vw;
}
.post_with_text{
	margin-top:10px;
}
</style>