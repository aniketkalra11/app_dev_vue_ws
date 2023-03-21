<template>
	<!-- post With text only -->
  <div class="container">
    <div class="card">
      <div class="card-header">
        <span class="float-left">User_id</span>
        <span style="padding=10px" class="float-right"></span>
        <div class="dropdown dropdown_btn" >
          <a class="btn btn-secondary float-right" href="#" role="button"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical float-right float-top dropdown" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Report Post</a>
            <a class="dropdown-item" href="#">Hide Post</a>
          </div>
        </div>
      </div>
    </div>
  <PostContaint></PostContaint>
  </div>
</template>

<script>
import PostContaint from './PostContaint.vue'
export default{
  components:{
    PostContaint
  }
}

</script>

<style>

</style>