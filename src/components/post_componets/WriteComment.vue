<template>
	<div class="container">
		<div class="card">
		<div class="card-header">
			User_id
			<span class="card-subtitle mb-2 text-muted"> </span>
		</div>
		<div class="card-body">
			<!-- <h5 class="card-title">Special title treatment</h5> -->
			<form>
				<div class="form-group">
					<label for="exampleFormControlTextarea1">Write Your comment here</label>
					<textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write is your opinion"></textarea>
				</div>
				<button type="submit" class="btn btn-primary">Comment</button>
			</form>
		</div>
	</div>
	</div>
</template>

<script>
export default{
	props:['user_id', 'user_name']

}
</script>

<style scoped>

</style>