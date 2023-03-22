<template>
	<div class="container">
		<PostWithImage is_owner="true"></PostWithImage>
	</div>
	<div class="container">
		<PostWithTextOnly is_owner="true"></PostWithTextOnly>
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