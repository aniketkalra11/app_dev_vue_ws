<template>
	<div class="container">
		<div class="card">
		<div class="card-header">
			<router-link :to="'/user/visit/profile/' + user_id">
				{{ user_name }}
			</router-link>
			<span class="card-subtitle mb-2 text-muted"> says</span>
		</div>
		<div class="card-body">
			<!-- <h5 class="card-title">Special title treatment</h5> -->
			<p class="card-text">{{ comment }}</p>
		</div>
	</div>
</div>

</template>

<script>
export default{
	data(){
		return {
		}
	},
	props:['user_id', 'user_name', 'comment'],
	methods:{
	}
}
</script>

<style scoped>

</style>