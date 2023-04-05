<template>
	<div class="container p-3 m-0 border-0 bd-example bd-example-row">
				<div class="card-body">
					<div class="container text-center">
						<div class="row" v-for="row in rows_of_users" :key="row">
							<div class="col" v-for="user in row" :key="user">
								<router-link :to="'/user/visit/profile/' + user.liker_id">{{ user.liker_name }}</router-link>
							</div>
						</div>
						
					</div>
				</div>
	</div>
</template>

<script>
import axios from 'axios'
export default{
	data(){
		return {
			rows_of_users: [],
			list_likers : []
		}
	},
	async created(){
		await axios.get(this.$parent.like_path, {} ).then(response =>{
			if (response.status == 200)
			{
				console.log('response received as:', response);
				let data = response.data
				console.log('like data:', data)
				this.likes_count = data.likes
				if (data.likes_count != 0)
				{
					console.log('list of likers is:', data.list_user_likes)
					for ( let x in data.list_user_likes)
					{
						this.list_likers.push(data.list_user_likes[x])
					}
					this.compute_list_of_likers()
				}
				
			}
		}).catch(err=>{
			console.log('error arrived during like fetch', err)
		})
		// this.list_user_likes[1]
	},
	methods:{
		compute_list_of_likers()
		{
			console.log('computing number of rows ', this.likes_count)
			console.log('watcher called:', this.list_likers)
			if (this.$parent.likes_count != 0)
			{
				var l = [];
				l.push(this.list_likers[0])
				for (let i = 1; i< this.list_likers.length; i++)
				{
					if (i % 3 == 0)
					{
						this.rows_of_users.push(l)
						l = []
					}
					else{
						l.push(this.list_likers[i]);
					}
				}
				console.log('l:', l, " length is: ", l.length)
				if (l.length != 0)
				{
					console.log('appending left overs')
					this.rows_of_users.push(l)
				}
			}
			console.log('row of users', this.rows_of_users)
		}
	}

}
</script>

<style scoped>

</style>