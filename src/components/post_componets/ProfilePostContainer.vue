<template>
	<div class="container">
		<div class="card bg-dark text-white">
		<img class="card-img" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="Card image">
		<div class="card-img-overlay">
			<h5 class="card-title">Card title {{ title }}</h5>
			<p class="card-text">
				{{ containt }}
				This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
			<p class="card-text">Last updated 3 mins ago {{ creation_time }}</p>
		</div>
	</div>
	</div>
</template>

<script>
export default {
	data()
	{
		return {
			is_loading: false,
			is_error: false,
			likes: 0,
			commets: 0,
			flags: 0,
			title: "The profile title",
			containt: "The profile containt",
			creation_time: "Date",
			img_url: ""
		}
	} ,
	props:['post_id', 'user_id'] ,
	beforeCreate(){
		console.log("creating profile vue");
	}
}
</script>

<style scoped>


</style>