<template>
	<div class="container recent-post-carousel" >
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="../../assets/sample_1.jpg"  class="d-block w-100 crosal_dimesion" alt="...">
					<div class="carousel-caption d-none d-md-block">
					<h5>First Image May be user Id</h5>
					<p>Post on Date</p>
				</div>

				</div>
				<div class="carousel-item">
					<img src="../../assets/sample_2.jpg" class="d-block w-100 crosal_dimesion" alt="...">
					<div class="carousel-caption d-none d-md-block">
						<h5>Second Image May be user Id</h5>
						<p>Post on Date</p>
					</div>
				</div>
				<div class="carousel-item">
					<img src="../../assets/sample_3.jpg" class="d-block w-100 crosal_dimesion" alt="...">
					<div class="carousel-caption d-none d-md-block">
						<h5>Third Image May be user Id</h5>
						<p>Post on Date</p>
					</div>
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	</div>

	<CarouselImage></CarouselImage>


</template>

<script>
import CarouselImage from '../dashboard_components/CarouselImage.vue'
export default{
	data(){
		return{
			is_first_active: true,
			list_recent_post: ['../../assets/sample_1.jpg', '../../assets/sample_2.jpg', '../../assets/sample_3.jpg']
		}
	},
	components:{
		CarouselImage
	},
	watch:{
		is_first_active(){
			if(this.is_first_active)
			{
				this.is_first_active = false;
			}
		}
	}

}
</script>

<style scoped>
.crosal_dimesion{

	width: 20vw;
}
.recent-post-carousel{
	margin-bottom: 10px;
}
</style>