<template>
<div class="container">
	<div class="card bg-dark text-white">
		<img class="card-img" src="../../assets/draw2.webp" alt="Card image">
		<div class="card-img-overlay">
			<!-- <span class="card-title card_title_custom font-weight-bolder">user-id</span> -->

			<h5 class="card-title float-left">Card title</h5>
			<div class="dropdown dropdown_btn">
				<a class="btn btn-secondary float-right" href="#" role="button"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical float-right float-top dropdown" viewBox="0 0 16 16">
					<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
					</svg>
				</a>
				<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<a class="dropdown-item" href="#">Report Post</a>
					<a class="dropdown-item" href="#">Hide Post</a>
				</div>
		</div>
		</div>
	</div>
	<PostContaint></PostContaint>
</div>
</template>

<script>
// import PostContainer from './PostContainer.vue';
import PostContaint from './PostContaint.vue'
export default {
    data() {
        return {
            is_liked: false
        };
    },
    container: {
        PostContaint
    },
    components: { 
			PostContaint 
		}
}
</script>

<style scoped>
.card_title_custom{
	width: 30vw;
	margin: 0px;
}
.dropdown_btn{
	margin:0px;
	
}
</style>