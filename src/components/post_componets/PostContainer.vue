<template>

	<div class="card mb-4" id="post_contianer">
		<a href=""><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
		<div class="card-body">
				<div class="small text-muted">user-id {{ user_id }}</div>
				<h3 class="small text"> Date and time {{ post_time }}</h3>
				<h2 class="card-title">Featured Post Title {{ title }}</h2>
				<p class="card-text" > {{ containt}}  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
				<a class="btn btn-primary" href="#!">Read more →</a>
		</div>
	</div>


</template>


<script>


	export default {
		data(){
			return {
				is_loading: true,
				likes: 0
			}
		},
		props:['post_id', 'user_id', 'post_time', 'title', 'containt']
		,
		beforeCreate()
		{
			console.log(this.title, ": Received as title");
			console.log(this.post_id, ": Received as post id");
			console.log('before create called');
			// fetch('http://172.25.254.249:5000/api/like/',
			// {
			// 	method: 'GET',
			// 	headers:{'Content-Type':'application/json',
      //               'Access-Control-Allow-Origin':'*',
      //               'Access-Control-Allow-Methods':'POSTGET,PATCH,OPTIONS'}
			// 		// body:{
			// 		// 	post_id: this.post_id,
			// 		// 	user_id: this.user_id
			// 		// }
				
			// }).then((response)=>{
			// 	if(response.ok)
			// 	{
			// 		return response.json();
			// 	}
			// }).then((data)=>{
			// 	this.likes = data.likes;
			// }).catch((exception)=>
			// {
			// 	console.log("error arrived");
			// 	console.log(exception)
			// })
		}

	}
	

</script>

<style scoped>
#post_contianer{
	margin: 10px;
	width: 60%;
}
</style>