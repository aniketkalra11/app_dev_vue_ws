<template>

<nav class="navbar navbar-expand-lg navbar-light  " style="background-color: #e3f2fd;">
  <a class="navbar-brand" href="#">Blog Lite</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item " :class="{active : is_home_active}">
        <router-link to="/" class="nav-link">Home</router-link>
        <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
      </li>
      <li class="nav-item" :class="{active: is_profile_active}">
        <!-- <a class="nav-link" href="#">Profile</a> -->
        <router-link to="/" class="nav-link">Profile</router-link>
      </li>
      <li class="nav-item" :class="{active: is_crate_post_active}">
        <router-link to="/" class="nav-link">Create Post</router-link>
      </li>
      <li class="nav-item dropdown" :class="{active: is_book_mark_active}">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          BookMarks
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Show Bookmarks</a>
          <a class="dropdown-item" href="#">Show Hidden Posts</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Show Private Posts</a>
        </div>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> -->
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
      <button type="button" class="btn btn-outline-secondary" style="margin-left:10px">Logout</button>
    </form>
  </div>
</nav>

</template>

<script>
export default {
  props:['current_active_bar'],
  data(){
    return {
      is_home_active: false,
      is_profile_active: false,
      is_crate_post_active: false,
      is_book_mark_active: false
    }
  },
  methods:{
    getCurrentActiveBtn(){
      if (this.current_active_bar.toLowerCase() == "home")
      {
        this.is_home_active = true;
        console.log("home statement executed")
      }
      else if (this.current_active_bar.toLowerCase() == "profile")
      {
        this.is_profile_active = true;
      }
      else if (this.current_active_bar.toLowerCase() == "createpost")
      {
        this.is_crate_post_active = true;
      }
    }
  },
  created(){
    console.log("button creation complete, Receiving val:", this.current_active_bar);
    this.getCurrentActiveBtn();
  }

}

</script>

<style scoped>

</style>