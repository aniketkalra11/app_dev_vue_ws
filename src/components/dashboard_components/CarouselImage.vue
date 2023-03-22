<template>
	<!-- Experiment failed-->
	<div class="carousel-item">
		<img src="../../assets/sample_1.jpg" class="d-block w-100 crosal_dimesion" alt="...">
		<!-- <img src="../../assets/sample_1.jpg"> -->
		<div class="carousel-caption d-none d-md-block">
			<h5>Second Image May be user Id</h5>
			<p>Post on Date</p>
		</div>
	</div>
</template>


<script>
export default{
	props:['post_id'],
	data(){
		return{

		}
	},
	created(){
		console.log("creating image :", this.post_id)
	}


}
</script>

<style scoped>

</style>