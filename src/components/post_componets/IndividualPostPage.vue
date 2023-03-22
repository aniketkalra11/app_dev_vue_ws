<template>
	<NavBar></NavBar>
	<div class="container">
		<div id="carouselExampleSlidesOnly" class="carousel slide " data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img class="d-block w-100 image_size" src="../../assets/draw2.webp" alt="First slide">
				</div>
				</div>
			</div>

			<div id="accordion">

		<div class="card">
			<div class="card-header" id="headingTwo">
				<h5 class="mb-0">
					<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						Likes
					</button>
				</h5>
			</div>
			<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
				
				<LikeUserGrid>

				</LikeUserGrid>
			</div>
		</div>
		<div class="card">
			<div class="card-header" id="headingThree">
				<h5 class="mb-0">
					<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						Comments
					</button>
				</h5>
			</div>
			<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
				<div class="card-body">
					<h6>Currently This post Have N comments</h6>
					<PostComment v-for="n in num_of_comments" v-bind:key="n"></PostComment>
					<WriteComment></WriteComment>
				</div>
			</div>
		</div>
	</div>
	</div>


</template>

<script>
import NavBar from '../nav_bar/NavContainer.vue';
import LikeUserGrid from './LikeUserGrid.vue';
import PostComment from './PostCommentContainer.vue'
import WriteComment from './WriteComment.vue'
export default{
	data(){
		return {
			num_of_comments:[1,2,3,4,5]
		}
	},
	components:{
		NavBar,
		LikeUserGrid,
		PostComment,
		WriteComment
	}
}
</script>

<style scoped>
.carousel_size{

	width: 40vw;
}
.image_size{

	width: 50vw;
}

</style>