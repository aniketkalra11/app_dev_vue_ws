<template>
	<div class="card mb-3">
		<div class="card-body">
			<h5 class="card-title" v-if="!$parent.is_text_only_post">{{ $parent.user_name}}</h5>
			<p class="card-text float-left"><small class="text-muted">Last updated {{ timestamp }}</small></p>
			<a v-if="!$parent.is_bookmarked" @click="add_bookmark" :href="'#' + post_id">
				<svg xmlns="http://www.w3.org/2000/svg" :width="icon_width+'px'" :height="icon_hegiht+'px'" fill="currentColor" class="bi bi-bookmark float-right book_mark_logo" viewBox="0 0 16 16" v-if="!$parent.is_bookmarked">
				<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"  v-if="!$parent.is_bookmarked"/>
				</svg>
			</a>
			<a v-if="$parent.is_bookmarked" @click="remove_bookmark" :href="'#' + post_id">
				<svg xmlns="http://www.w3.org/2000/svg"  :width="icon_width+'px'" :height="icon_hegiht+'px'" fill="currentColor" class="bi bi-bookmark float-right book_mark_logo" viewBox="0 0 16 16"  v-if="$parent.is_bookmarked">
				<path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"  v-if="$parent.is_bookmarked"/>
				</svg>
			</a>
			<br><br>
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text" v-html=" caption "></p><br><br>
			<a v-if="!$parent.is_already_liked" @click="add_like" :href="'#' + post_id">
			<svg xmlns="http://www.w3.org/2000/svg" :width="icon_width +'px'" :height="icon_hegiht+ 'px'" fill="currentColor" class="bi bi-heart float-left" viewBox="0 0 16 16" v-if="!$parent.is_already_liked">
				<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
			</svg>
			</a>
			<a v-if="$parent.is_already_liked" @click="remove_like" :href="'#' + post_id">
			<svg xmlns="http://www.w3.org/2000/svg" :width="icon_width +'px'" :height="icon_hegiht+ 'px'" fill="currentColor" class="bi bi-heart-fill float-left" viewBox="0 0 16 16" v-if="$parent.is_already_liked">
			<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
			</svg>
			</a>
			<span class="card-text float-left icon_text">{{ $parent.likes }}</span>
			<span class=" float-right icon_text" >{{ $parent.comment_count }}</span>
			<router-link :to="get_comment_url()">
			<svg xmlns="http://www.w3.org/2000/svg" :width="icon_width +'px'" :height="icon_hegiht+ 'px'" fill="currentColor" class="bi bi-card-list float-right" viewBox="0 0 16 16">
				<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
				<path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
			</svg>
		</router-link>
		<!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
		</div>
	</div>
</template>

<script>
// import { vShow } from 'vue';
import axios from 'axios'

	export default{
		data(){
			return {
				icon_hegiht: 30,
				icon_width: 30,
				like_api_path: '',
				bookmark_api_path: '',
				flag_api_path: '',
				is_liked: false,
				is_bookm: false,
				like_count: 0,
				comment_count_local: 0,
				individual_post_url: '',
				bookmark_data : {}

			}
		},
		props:['timestamp', 'title', 'caption', 'is_already_liked',
	'is_bookmarked', 'likes', 'comment_count', 'post_id'],
	methods:{
		add_like(){
			console.log('add like called')
			axios.put(this.like_api_path, {}, {}).then(response =>{
				if (response.status == 200)
				{
					let data = response.data
					console.log(data)
					if (data.is_success)
					{
						// this.like_count = data.like_count;
						// this.is_liked = true;
						this.$parent.likes = data.like_count;
						this.$parent.is_already_liked = true;
					}
				}
			}).catch(err =>{
				console.log('err arrived during add like', err);
			})
		},
		remove_like(){
			console.log('remove like called')
			axios.delete(this.like_api_path, {}, {}).then(response =>{
				if (response.status == 200)
				{
					let data = response.data
					if (data.is_success)
					{
						console.log('data:', data)
						this.$parent.likes = data.like_count;
						this.$parent.is_already_liked = false;
					}
				}
			}).catch(err =>{
				console.log('err arrived during add like', err);
			})
		},
		add_bookmark(){
			console.log('add bookmark called')
			axios.put(this.bookmark_api_path, this.bookmark_data).then( response =>{
				console.log('response for book mark receiving:', response)
				if (response.status == 200)
				{
					if (response.data.is_success)
					{
						console.log('bookmark success')
						this.is_bookm = true;
						this.$parent.is_bookmarked = true;
					}
				}
			}).catch(err=>{
				console.log('error arrived during bookmarks', err)
			})
		},
		remove_bookmark(){
			console.log('remove book mark called')
			axios.post(this.bookmark_api_path, this.bookmark_data).then( response =>{
				console.log('response for book mark receiving:', response)
				if (response.status == 200)
				{
					if (response.data.is_success)
					{
						console.log('bookmark success')
						this.is_bookm = false;
						this.$parent.is_bookmarked = false;
					}
				}
			}).catch(err=>{
				console.log('error arrived during bookmarks', err)
			})
		},
		view_comments(){
			this.$router.push("/user/post/view", )
		},
		get_comment_url(){
			let post_text = this.$parent.is_text_only_post  ? '1' : '2'
			let url = "/user/post/view/" + this.post_id + "/" +  post_text
			console.log('final post url is: ', url)
			return url; 
		}
	},
	created(){
		console.log('post_id', this.post_id, " and user_id:", localStorage.getItem('user_id'))
		this.like_api_path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/like/post/" + window.localStorage.getItem('user_id') + "/"  + this.post_id
		this.bookmark_api_path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/bookmark/post/" + window.localStorage.getItem('user_id') 
		this.flag_api_path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/flag/post/" + window.localStorage.getItem('user_id') + "/"  + this.post_id
		this.is_liked = this.is_already_liked;
		this.is_bookm = this.is_bookmarked;
		this.like_count = this.likes;
		this.comment_count_local = this.comment_count;
		this.bookmark_data = {
			'post_id' : this.post_id
		}
		axios.defaults.headers.common["Content-Type"] = "application/json";
		axios.defaults.headers.common["Authorization"] = 'Bearer ' + window.localStorage.getItem("token");

	},
	mounted(){
		this.is_bookm = this.is_bookmarked;
	},
	watch:{
		
	}
	}
</script>

<style scoped>
.icon_text{
	padding: 5px;
}
.book_mark_logo{
	margin-right:22px
}

</style>