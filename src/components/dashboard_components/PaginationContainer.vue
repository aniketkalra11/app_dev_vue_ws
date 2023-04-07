<template>
<nav aria-label="Page navigation example" v-if="!is_err_arrived">
  <ul class="pagination justify-content-center">
    <li class="page-item" :class="{
			disabled: !is_prev_page_available
		}" >
      <a class="page-link" href="#" tabindex="-1" @click="prev_page_button">Previous</a>
    </li>
    <li class="page-item " v-for="page in $parent.num_page" :key="page" :class="{active: cur_page == page}"><a class="page-link" href="#" @click="set_page_containt(page)">{{ page }}</a></li>
    <li class="page-item" :class="{
				disabled : !is_next_page_available
			}">
      <a class="page-link" href="#" @click="next_page_button">Next</a>
    </li>
  </ul>
</nav>
</template>


<script>
// import axios from 'axios'
//* Here we are expecting few properties from parent
// 1. Total number of items
// 2. current page 
// 3. and one watcher for function
// 4. setpage function
	export default {
		data(){
			return {
				num_page: 0,
				is_err_arrived: false,
				is_prev_page_available : false,
				is_next_page_available: true,
				cur_page:  1
			}
		},
		props:['page_count'],
		async created(){
			this.num_page = this.$parent.num_page;
			try{
				console.log('total number pages received', this.num_page);
			}catch(err)
			{
					console.log('error arrived during pagination', err)
					this.is_err_arrived = true;
			}
		},
		methods:{
			set_page_containt(index){
				this.cur_page = index
				if (this.cur_page == 1)
				{
					this.is_prev_page_available = false;
				}
				else{
					this.is_prev_page_available = true
				}
				if (this.cur_page == this.$parent.num_page)
				{
					this.is_next_page_available = false;
				}
				else{
					this.is_next_page_available = true;
				}
				console.log('page set request received', index)
				this.$parent.set_page_containt(index)
			},
			next_page_button()
			{
				if(this.cur_page != this.$parent.num_page)
				{
					this.set_page_containt(this.cur_page + 1)
				}
			},
			prev_page_button()
			{
				if(this.cur_page != 1)
				{
					this.set_page_containt(this.cur_page - 1)
				}
			}
		}
	}
</script>

<style scoped>

</style>