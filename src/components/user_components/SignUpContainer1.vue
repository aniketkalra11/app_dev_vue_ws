<template>
  <div class="container" id="bubble1" style="  border-radius: 50%; position: absolute; "
v-bind:style="{top: getPosX()+'vh' , left: getPosY() + 'vw'}"
></div>
<div class="container center_class">
  <div class="container form_container">
    
    <label  class="col-sm2 col-form-label"> <h2>Personal Details:</h2></label>
    <form>
    <div class="form-row">
      <div class="col-md-4 mb-3">
        <label for="validationTooltip01">First name</label>
        <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" v-model="firstName" required>
        <div class="warn_text" v-if="!is_first_name_corr">
          Incorrect First-Name!
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <label for="validationTooltip02">Last name</label>
        <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" v-model="lastName" required>
        <div class="warn_text" v-if="!is_last_name_crr">
          Incorrect Last-Name
        </div>
      </div>

      <div class="col-md-4 mb-3">
        <label for="validationTooltipUsername">Username</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
          </div>
          <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" v-model="userName" aria-describedby="validationTooltipUsernamePrepend" required>
          <div class=" warn_text" v-if="!is_user_name_crr">
            {{ usr_name_err_msg }}
          </div>

        </div>
      </div>
    </div>

    <div class="form-row">
      <div class="col-md-4 mb-3">
        <label for="validationTooltip04">Date of Birth</label>
        <input type="date" class="form-control" id="validationTooltip04" placeholder="DOB" v-model="dob" required>
        <div class="warn_text" v-if="!is_dob_corr">
          Please enter a valid dob
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <label for="validationTooltip05">City</label>
        <input type="text" class="form-control" id="validationTooltip05" placeholder="Place" v-model="city" required>
        <div class="warn_text" v-if="!is_city_corr">
          Please enter a valid city name
        </div>
      </div>

      <div class="col-md-4 mb-3">
        <label for="validationTooltip06">Profession</label>
        <div class="input-group">
          <div class="input-group-prepend">
          </div>
          <input type="text" class="form-control" id="validationTooltip06"  v-model="profession" placeholder="Profession" aria-describedby="validationTooltipUsernamePrepend" required>
          <div class="warn_text" v-if="!is_profession_crr">
            Please enter a valid profession name
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="form-group row">
      <label for="inputEmail3" class="col-sm-2 col-form-label">User-Name</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
      </div>
    </div> -->
    <div class="form-group row">
      <label for="profileInput" class="col-sm-2 col-form-label">Profile Photo</label>
      <div class="col-sm-10">
        <input type="file" class="form-control" id="profileInput"  >
      </div>
    </div>
    <div class="form-group row">
      <label for="inputPassword1" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword1" placeholder="Password" v-model="password">
      </div>
    </div>
    <div class="form-group row">
      <label for="inputPassword2" class="col-sm-2 col-form-label">Re-Enter Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword2" placeholder="Re-Enter Password" v-model="re_password">
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-10">
        <button type="submit" class="btn btn-primary">Sign up</button>
      </div>
      <div class="col-sm-15">
        <button class="btn btn-primary" type="reset"><router-link to="/" > Sign in </router-link></button>
      </div>
    </div>
  </form>
  </div>
</div>


<div class="container" id="bubble2">

</div>
</template>
<!-- TODO: Need to create complete form from scratch -->
<script>
export default{
  data(){
    return {
      userName: "",
      is_user_name_corr: true,
      firstName: "",
      is_first_name_corr: true,
      lastName: "",
      is_last_name_crr: true,
      dob: "",
      is_dob_corr: true,
      city: "",
      is_city_corr: true,
      profession: "",
      is_profession_crr: true,
      is_user_name_crr: true,
      usr_name_err_msg: "",
      password: "",
      re_password: "",
      is_password_matched: true,
      // Bubble settings
      pos_x: 0,
      pos_y: 0,
      reverse_bubble_x: false,
      reverse_bubble_y: false
    }
  },
  watch:
  {
    firstName(){
      if(/^[a-zA-Z]{1,}$/.test(this.firstName))
      {
        console.log("value entered is:", this.firstName)
        this.is_first_name_corr = true;
      }
      else
      {
        console.log("value entered is incorrect:", this.firstName);
        this.is_first_name_corr = false;
      }
    },
    lastName(){
      if(/^[a-zA-Z]{1,}$/.test(this.lastName))
      {
        console.log("value entered is:", this.lastName)
        this.is_last_name_crr = true;
      }
      else
      {
        console.log("value entered is incorrect:", this.firstName);
        this.is_last_name_crr = false;
      }
    },
    userName(){
      // pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
      if(this.userName.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
      {
        this.is_user_name_crr = true;
        console.log("test success")
      }
      else{
        this.usr_name_err_msg = "Please enter correct user name";
        this.is_user_name_crr = false;
        // this.usr_name_err_msg = "Please choose a unique and valid username.";
        console.log("test failed")
      }
    },
    dob(){
      // 70 year previous date
      console.log("Dob received as:", this.dob);
      // if (int(this.dob.split('-')[0]) <= 1950 )
      // {
      //   this.is_dob_corr = false
      // }
      console.log(typeof(this.dob))
      //TODO: DOB check pending
    },
    profession(){
      if(/^[a-zA-Z]{3,}$/.test(this.profession))
      {
        console.log("value entered is:", this.profession)
        this.is_profession_crr = true;
      }
      else
      {
        console.log("value entered is incorrect:", this.profession);
        this.is_profession_crr = false;
      }
    },
    city(){
      if(/^[a-zA-Z]{3,}$/.test(this.city))
      {
        console.log("value entered is:", this.city)
        this.is_city_corr = true;
      }
      else
      {
        console.log("value entered is incorrect:", this.city);
        this.is_city_corr = false;
      }
    },
    re_password(){
      console.log('repassword')
      if(this.password === this.re_password)
      {
        console.log("confirm complete")
      }
    }
  },
  methods:{
    getPosX(){
      return this.pos_x;
    },
    getPosY(){
      return this.pos_y;
    }
  },
  created(){
    setInterval(
      () =>{
        if (!this.reverse_bubble_x)
        {
          this.pos_x += 0.10;
        }
        else
        {
          this.pos_x -= 0.10;
        }
        if(!this.reverse_bubble_y)
        {
          this.pos_y += 0.10
        }
        else
        {
          this.pos_y -= 0.10;
        }
        if (this.pos_x >= Math.random() * 90){
          this.reverse_bubble_x = true
        }
        if (this.pos_y >= Math.random() * 90)
        {
          this.reverse_bubble_y = true
        }
        if(this.pos_x < 0 )
        {
          this.reverse_bubble_x = false
        }
        if (this.pos_y < 0)
        {
          this.reverse_bubble_y = false
        }
      }, 10
    )
  }

}

</script>


<style scoped>
.form_container{
  margin: 10px;
  margin-top: 10vh;
  border: solid 1px;
  padding: 10px;
  border-radius: 7px;
  box-shadow: 10px 10px 7px 3px rgba(200,200,200,0.7);
}
.warn_text{
  color: red;
}
a{
  text-decoration: none;
  color:white;
}
#bubble1{
  background-color: rgba(255,0,0,0.0);
  box-shadow: 30px 30px 10px 15px rgba(230,0,0,0.5);
  height: 10px;
  width: 10px;
}

</style>