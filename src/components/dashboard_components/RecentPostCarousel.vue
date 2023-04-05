<template>
	<div class="container recent-post-carousel" v-show="is_suffient_post_available" >
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img :src="capsule_1.image_url"  class="d-block w-100 crosal_dimesion" alt="...">
					<div class="carousel-caption d-none d-md-block">
					<h5>{{ capsule_1.title }}</h5>
					<p>{{ capsule_1.timestamp }}</p>
				</div>

				</div>
				<div class="carousel-item">
					<img :src="capsule_2.image_url" class="d-block w-100 crosal_dimesion" alt="...">
					<div class="carousel-caption d-none d-md-block">
						<h5>{{ capsule_2.title }}</h5>
					<p>{{ capsule_2.timestamp }}</p>
					</div>
				</div>
				<div class="carousel-item">
					<img :src="capsule_3.image_url" class="d-block w-100 crosal_dimesion" alt="...">
					<div class="carousel-caption d-none d-md-block">
						<h5>{{ capsule_3.title }}</h5>
						<p>{{ capsule_3.timestamp }}</p>
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
import axios from 'axios'
export default{
	data(){
		return{
			is_first_active: true,
			capsule_1:{
				image_url: '',
				user_id: '',
				title: '',
				timestamp: ''
			},
			capsule_2:{
				image_url: '',
				user_id: '',
				title: '',
				timestamp: ''
			},
			capsule_3:{
				image_url: '',
				user_id: '',
				title: '',
				timestamp: ''
			},
			is_suffient_post_available : true,
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
	},
	async created(){
		let path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/carousel"
		axios.get(path, {}, {}).then(response =>{
			console.log('carosol data receiving', response.data)
			let list_post = response.data.list_post
			if (list_post.length >= 3)
			{
				// Image url
				this.capsule_1.image_url = this.getImageUrl( list_post[0].image_url);
				this.capsule_2.image_url = this.getImageUrl( list_post[1].image_url);
				this.capsule_3.image_url = this.getImageUrl( list_post[2].image_url);
				//user_id
				this.capsule_1.user_id = list_post[0].user_id;
				this.capsule_2.user_id = list_post[1].user_id;
				this.capsule_3.user_id = list_post[2].user_id;
				//title
				this.capsule_1.title = list_post[0].title;
				this.capsule_2.title = list_post[1].title;
				this.capsule_3.title = list_post[2].title;
				//timestamp
				this.capsule_1.timestamp = list_post[0].timestamp;
				this.capsule_2.timestamp = list_post[1].timestamp;
				this.capsule_3.timestamp = list_post[2].timestamp;

			}
			else
			{
				this.is_suffient_post_available = false;
			}
			console.log('capsule_log', this.capsule_1)

		}).catch(err =>{
			console.log('error arrived in caursol',err);
		})
	},
	methods:{
		fill_capusle(obj, item){
			this.obj.image_url = this.getImageUrl(item.image_url);
			this.obj.user_id = item.user_id;
			this.obj.title = item.title;
			this.obj.timestamp = item.timestamp;
		},
		getImageUrl(url_response){
			//http://127.0.0.1:5000/static/resources/img/e1008047a13e51251024ea3be5d232eb.png
			return process.env.VUE_APP_FLASK_SERVER_URL + '/static/resources/img/' + url_response; 
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