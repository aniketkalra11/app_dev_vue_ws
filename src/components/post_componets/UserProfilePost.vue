<template>
	<div class="container">
		<PostWithImage></PostWithImage>
	</div>
	<div class="container">
		<PostWithTextOnly></PostWithTextOnly>
	</div>
</template>

<script>
import PostWithImage from './PostWithImage.vue';
import PostWithTextOnly from './PostWithTextOnly.vue';
export default{
	components:{
		PostWithImage,
		PostWithTextOnly
	}
}
</script>

<style scoped>

</style>