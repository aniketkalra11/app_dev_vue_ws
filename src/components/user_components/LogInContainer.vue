<template>
<!-- <div class="logo-class">
	<img class="logo-img" src="../../assets/blog_lite_logo.jpg">
</div> -->
<div class="container main_login_container">
	<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img  src="../../assets/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form @submit.prevent="submitForm">


          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Please Enter your</p>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address"  v-model="form.user_id" :class="{'is-invalid': is_error_arived}"/>
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password"  v-model="form.password" :class="{'is-invalid': is_error_arived}"/>
            <label class="form-label" for="form3Example4">Password</label>
            <div class="invalid-feedback">
            {{ error_msg }}
          </div>
          </div>


          <div class="d-flex justify-content-between align-items-center">
            <!-- Checkbox -->
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;" @click="loginValidation()">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <router-link to="/signup" 
                class="link-danger">Register</router-link></p>
          </div>

        </form>
      </div>
    </div>
  </div>

</section>






</div>



</template>

<script>
import axios from 'axios'
export default{
// $router available this.$route.push('path_where_you_want_to_go')
//injected
//this.$route.path
//this.$route.params

  data(){
   return{
      form:{
        user_id:'',
        password: ''
      },
      is_login_success:false,
      is_error_arived:false,
      error_msg:"",
      token: ''
   } 
  },
  methods:{
    async submitForm(){
      console.log("Submit Prevented")
    },
    async loginValidation(){
      let path= process.env.VUE_APP_FLASK_SERVER_URL
      let auth_path = path+'/api/v2/user/authentication'
      // let json_form = JSON.stringify(this.form)
      console.log('path received as:', path, auth_path)
      await axios({
        method:'post',
        url: auth_path,
        headers: {},
        data:{
          user_id: this.form.user_id,
          password: this.form.password
        }
      }).then(response => {
        let data = response.data
        console.log(data)
        // console.log(response)
        // console.log(response.ok)
        if(response.ok)
        {
          console.log('ok received')
        }
        if (data.is_login_success)
        {
          console.log("login Successfull");
          this.is_login_success = true;
          this.token = data.token
          this.error_msg = ""
          this.is_error_arived = false
        }
        else{
          console.log("login failed");
          this.is_error_arived = true;
          this.error_msg = data.error
        }
      }).catch(err => {
        console.log("error arrived", err)
      })
      // axios.post(auth_path, json_form)
      // .then(response => {
      //   console.log(response)
      // }).catch(err =>{
      //   console.log(err)
      // })
    }
  },
  watch:{
    is_login_success()
    {
      console.log('watcher called');
      //* Storing token in localStorage
      window.localStorage.setItem('user_id', this.form.user_id)
      window.localStorage.setItem('token', this.token)
      
      return this.$router.push("/user/dashboard")
    }
  }
}
</script>


<style scoped>
.main_login_container{
	margin-top: 30vh;
}
.logo-class{

	left: 50vh;
	top : 5vw;
	position: absolute;
}
.logo-img{
	width: 10vw;
	height: 30vh;
}

</style>



