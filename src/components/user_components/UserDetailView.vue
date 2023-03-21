<template>
<div class="container" id="main_container">
  <div class="container sub_container">
    <div class="container">
      <img src="../../assets/logo.png" class="profile_image">
    </div>
    <div class="container">
      <h5 id="user-name-h">Name of the User</h5>
    </div>
  </div>
  <div class="container sub_container">
    <div class=" w-75">
  <div class="card-body">
    <h5 class="card-title">UserName</h5>
    <div class="container p-3 m-0 border-0 bd-example bd-example-row">
          <div class="card-body">
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <a href="">Follower</a>
                </div>
                <div class="col">
                <a href="">Following</a>
                </div>
                <div class="col">
                <a href="">Posts</a>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  4
                </div>
                <div class="col">
                  4
                </div>
                <div class="col">
                  5
                </div>
              </div>
              
            </div>
          </div>

    </div>
    <a href="#" class="btn btn-primary">Edit Profile</a>
  </div>
</div>
    </div>
</div>
</template>

<script>
export default{

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