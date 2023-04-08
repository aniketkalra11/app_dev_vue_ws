<template>

<nav class="navbar navbar-expand-lg navbar-light  " style="background-color: #e3f2fd;">
  <a class="navbar-brand" href="#">Blog Lite</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item " :class="{active : is_home_active}">
        <router-link to="/user/dashboard" class="nav-link">Home</router-link>
        <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
      </li>
      <li class="nav-item" :class="{active: is_profile_active}">
        <!-- <a class="nav-link" href="#">Profile</a> -->
        <router-link to="/user/profile" class="nav-link">Profile</router-link>
      </li>
      <li class="nav-item" :class="{active: is_crate_post_active}">
        <router-link to="/user/createpost" class="nav-link">Create Post</router-link>
      </li>
      <li class="nav-item dropdown" :class="{active: is_book_mark_active}">
        <router-link :to="'/user/bookmark'" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          BookMarks
        </router-link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Show Bookmarks</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" @click="sendExportJobRequest" >Export Post</a>
        </div>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> -->
    </ul>
    <form class="form-inline my-2 my-lg-0" @submit.prevent="submitForm">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="search_keyword">
      <button class="btn btn-outline-info my-2 my-sm-0" @click="searchUser">Search</button>
      <button type="button" class="btn btn-outline-secondary" style="margin-left:10px" @click="logoutAction">Logout</button>
    </form>
  </div>
</nav>

</template>

<script>
import axios from 'axios'
export default {
  props:['current_active_bar', 'is_in_search_bar'],
  data(){
    return {
      is_home_active: false,
      is_profile_active: false,
      is_crate_post_active: false,
      is_book_mark_active: false,
      is_logout_success: false,
      search_keyword : ''
    }
  },
  methods:{
    getCurrentActiveBtn(){
      try{
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
    catch(e)
    {
      console.log("error arrived highlighting home button", e)
      this.is_home_active = true;
    }
  },
  async logoutAction(){
    let path = process.env.VUE_APP_FLASK_SERVER_URL + '/api/v2/user/authentication';
    console.log('path is:', path)
    let config = {
      headers: {
        'token': window.localStorage.getItem('token'),
        'user_id': window.localStorage.getItem('user_id'),
        'Content-Type': 'application/json'
      }
    }
    let data = {
      'user_id': window.localStorage.getItem('user_id')
    }
    await axios.delete(path, {
      headers:config.headers,
      data:data
    }).then(response=>{
      console.log(response)
      data = response.data
      if (data.is_success){
        this.is_logout_success = true;
        console.log('logout success');
      }
      else{
        console.log('error arrived');
        console.log(data)
      }
    }).catch(err =>{
      console.log(err);
    })
    if (this.is_logout_success)
    {
      window.localStorage.clear()
    }
    
  },
  async searchUser(){
    " This will search user and display on the screen"
    if(this.is_in_search_bar)
    {
      this.$parent.get_search_profiles();
    }
    if (this.search_keyword != '')
    {
      this.$router.push('/user/search/'+ this.search_keyword)
    }
    
    
  },
  sendExportJobRequest(){
    console.log('creating new async request')
    let path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/export/" + window.localStorage.getItem("user_id")
    axios.get(path).then(response=>{
      console.log('accepted')
      if (response.status == 200)
      {
        alert('export job started please check mail after few minutes')
      }
    }).catch(err=>{
      console.log("error arrived please try after some time", err)
    })
  }
  },
  async created(){
    axios.defaults.headers.common["Authorization"] = 'Bearer ' + window.localStorage.getItem("token");
    console.log("button creation complete, Receiving val:", this.current_active_bar);
    this.getCurrentActiveBtn();
  },
  watch:{
    is_logout_success(){
      console.log('checking watcher')
      if (this.is_logout_success == true)
      {
        console.log('logout success, redirecting to main page');
        this.$router.push('/');
      }
    }
  }

}

</script>

<style scoped>

</style>