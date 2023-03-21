<template>
	<div class="card mb-3">
		<div class="card-body">
			<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
			<h5 class="card-title">Card title</h5>
			<p class="card-text">Card Containt</p>
			<a href="">
			<svg xmlns="http://www.w3.org/2000/svg" :width="icon_width +'px'" :height="icon_hegiht+ 'px'" fill="currentColor" class="bi bi-heart float-left" viewBox="0 0 16 16" v-if="!is_liked">
				<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" :width="icon_width +'px'" :height="icon_hegiht+ 'px'" fill="currentColor" class="bi bi-heart-fill float-left" viewBox="0 0 16 16" v-if="is_liked">
			<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
			</svg>
			</a>
			<span class="card-text float-left icon_text">5</span>
			<span class=" float-right icon_text" >3</span>
			<a href="">
			<svg xmlns="http://www.w3.org/2000/svg" :width="icon_width +'px'" :height="icon_hegiht+ 'px'" fill="currentColor" class="bi bi-card-list float-right" viewBox="0 0 16 16">
				<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
				<path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
			</svg>
		</a>
		<!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
		</div>
	</div>
</template>

<script>
// import { vShow } from 'vue';

	export default{
		data(){
			return {
				icon_hegiht: 30,
				icon_width: 30
			}
		}
	}
</script>

<style scoped>
.icon_text{
	padding: 5px;
}

</style>