<template>
	<div class="container ex_container">
		<LoadingGrowingSpinner></LoadingGrowingSpinner>
	</div>
	<div class="container post_with_text">
		<PostWithTextOnly></PostWithTextOnly>
		<PostContainer></PostContainer>
		<PostWithImage></PostWithImage>
	</div>
</template>

<script>
import LoadingGrowingSpinner from './LoadingGrowingSpinner.vue';
import PostWithTextOnly from './post_componets/PostWithTextOnly.vue';
import PostContainer from './post_componets/PostContainer.vue';
import PostWithImage from './post_componets/PostWithImage.vue';


const expirement_container = {
	data(){

	},
	created(){

	},
	components:{
		LoadingGrowingSpinner,
		PostWithTextOnly,
		PostContainer, 
		PostWithImage
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