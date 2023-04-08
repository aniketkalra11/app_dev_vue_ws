<template>
<div class="container" id="main_container">
  <div class="container sub_container">
    <div class="container">
      <img :src="profileImg" class="profile_image">
    </div>
    <div class="container">
      <h5 id="user-name-h">{{ user_name }}</h5>
    </div>
  </div>
  <div class="container sub_container">
    <div class=" w-75">
  <div class="card-body">
    <h5 class="card-title">{{user_id}}</h5>
    <div class="container p-3 m-0 border-0 bd-example bd-example-row">
          <div class="card-body">
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <router-link :to="'/user/follow/'+ user_id+ '/1'">Follower</router-link>
                </div>
                <div class="col">
                  <router-link :to="'/user/follow/'+ user_id+ '/2'">Following</router-link>
                </div>
                <div class="col">
                <a href="">Posts</a>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  {{ numFollowers }}
                </div>
                <div class="col">
                  {{ numFollowing }}
                </div>
                <div class="col">
                  {{ numPost }}
                </div>
              </div>
              
            </div>
          </div>

    </div>
    <!-- <a href="#" class="btn btn-primary">Edit Profile</a> -->
    <RouterLink to="/user/editprofile" class="btn btn-primary" v-if="is_owner
    ">Edit Profile</RouterLink>
    <button class="btn btn-danger" v-if="is_owner" @click="remove_user()"> Delete User</button>
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
    numPost: 0,
    numFollowers: 0,
    numFollowing: 0,
    profileImg : '',
    user_name: ''
    }
  },
  props:['is_owner', 'user_id'],
  async created(){
    axios.defaults.headers.common["Authorization"] = 'Bearer ' + window.localStorage.getItem("token");
    console.log("fetching user profile details");
    let path = process.env.VUE_APP_FLASK_SERVER_URL + '/api/v2/user/fetch/' + this.user_id;
    await axios.get(path, {}).then(response =>{
      console.log(response)
      if(response.status == 200)
      {
        let data = response.data
        this.numFollowers = data.numFollowers
        this.numFollowing = data.numFollowing
        this.numPost = data.numPosts
        this.user_name = data.name
        this.profileImg = this.getImagePath(data.profile_photo)
      }
    }).catch(err =>{
      console.log(err, ' error arrived during call');
    })
  },
  methods:{
    getImagePath(image_link){
      let image_url = process.env.VUE_APP_FLASK_SERVER_URL + '/static/' + image_link
      return image_url
    },
    remove_user()
  {
    let val = prompt("Please type 1 for delete user")
    console.log(val)
    if (val == '1')
    {
      console.log('confirmation received removing user')
      let path = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/delete/user/" + localStorage.getItem('user_id')
      axios.post(path).then(response =>{
        console.log('response of user delete', response)
        if (response.status == 200)
        {
          let data = response.data
          if (data.is_success)
          {
            alert('user_delete complete')
            localStorage.clear();
            this.$router.push("/");
          }
        }
        
      })
    }
  }
  }
  

}
</script>


<style scoped>
.profile_image{
  margin-top: 10px;
  margin-bottom: 20px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border-color: lightblue;
  border-style: solid;
}
#main_container{
  display:flex;
  border-radius: 2%;
  background-color: white;
}
.sub_container{
  padding:0px;
  margin:0 auto;
  text-align: center;
  margin-bottom: 15px;
}
#user-name-h{
  margin-top:20px;
}
</style>