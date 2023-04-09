<template>
  <div class="container" id="bubble1" style="  border-radius: 50%; position: absolute; "
v-bind:style="{top: getPosX()+'vh' , left: getPosY() + 'vw'}"
></div>
<div class="container center_class">
  <div class="container form_container">


    <div class="form-group row">
      <label for="inputPassword1" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword1" placeholder="Password" v-model="password">
        <div class="warn_text" v-if="!is_password_correct">
            {{ pass_err }}
          </div>
      </div>
    </div>


    <div class="form-group row">
      <label for="inputPassword1" class="col-sm-2 col-form-label">New - Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword1" placeholder="Password" v-model="new_password">
        <div class="warn_text" v-if="!is_new_password_correct">
            {{ new_pass_err }}
        </div>
      </div>
      
    </div>
    <div class="form-group row">
      <label for="inputPassword2" class="col-sm-2 col-form-label">Re-Enter Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword2" placeholder="Re-Enter Password" v-model="re_password">
        <div class="warn_text" v-if="!is_password_matched">
            incorrect input
          </div>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-10">
        <button type="submit" class="btn btn-primary" @click="editUserCall">Save Changes</button>
      </div>
      <div class="col-sm-15">
        <button class="btn btn-primary" type="reset"><router-link to="/user/profile" > Go Back</router-link></button>
      </div>
    </div>
  </div>
</div>


<div class="container" id="bubble2">

</div>
</template>
<!-- TODO: Need to create complete form from scratch -->
<script>
import axios from 'axios'
export default{
  data(){
    return {
 
      usr_name_err_msg: "",
      password: "",
      is_password_correct: true,
      pass_err : '',
      re_password: "",
      is_password_matched: true,
      new_password: "",
      is_new_password_correct: '',
      new_pass_err: '',
      // Bubble settings
      pos_x: 0,
      pos_y: 0,
      reverse_bubble_x: false,
      reverse_bubble_y: false,
      is_edit_success: false,
      complete_url : ''
    }
  },
  watch:
  {
    re_password(){
      console.log('repassword')
      if(this.new_password === this.re_password)
      {
        this.is_password_matched = true
        console.log("confirm complete")
      }
      else{
        this.is_password_matched = false;
      }
    },
    is_edit_success(){
      if (this.is_edit_success){
        // alert("user creation success please login");
        this.$router.push("/user/profile");
      }
    },
    password(){
      if( this.password.length < 8)
      {
        this.is_password_correct = false;
        this.pass_err = "Length to short";
      }
      else
      {
        this.is_password_correct = true;
      }
    },
    new_password(){
      if( this.new_password.length < 8)
      {
        this.is_new_password_correct = false;
        this.new_pass_err = "Length to short";
      }
      else
      {
        this.is_new_password_correct = true;
      }
    }
  },
  methods:{
    getPosX(){
      return this.pos_x;
    },
    getPosY(){
      return this.pos_y;
    },
    editUserCall(){
      console.log('update called')
      if (!this.is_password_correct || !this.is_password_matched || !this.is_new_password_correct)
      {
        alert("please enter details correctly");
        return;
      }
      // if (file)
      const form_data = new FormData()
      form_data.append('password', this.password);
      form_data.append('new_password', this.new_password);
      // form_data.append("profile_photo", file);

      console.log('creating api request')
      let config = {
        header:{
          "Content-Type": "multipart/form-data"
        }
      }
      axios.post(this.complete_url, form_data, config).then(response =>{
        console.log("respones", response)
        console.log('sent');
        let data = response.data
        console.log(data)
        if (data.is_success){
          this.is_edit_success = true;
          print('edit success');
          alert('password changed successfully');
          this.$router.push('/user/profile');
        }
        else{
          // alert('error arrived during creation' + data.err);
          this.is_password_correct = false;
          this.pass_err = data.err;
        }
      }).catch(err=>{
          console.log('err arrived', err);
          console.log('err arrived');
          alert('error arrived during creation' );
      })
      // alert('wait for it');
    },
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
    axios.defaults.headers.common["Authorization"] = 'Bearer ' + window.localStorage.getItem("token");
    this.complete_url = process.env.VUE_APP_FLASK_SERVER_URL + "/api/v2/passwd/update/user/" + window.localStorage.getItem('user_id');
    
    // axios.get(usr_get_url).then(respones=>{
    //   if (respones.status == 200)
    //   {
    //     console.log('user details retrived complete');
    //     let data = respones.data;
    //     console.log(data)
    //     this.firstName = data.fname;
    //     this.lastName = data.lname;
    //     this.userName = data.user_id;

    //     // this.dob = data.dob_d;
    //     let n_d = new Date(data.dob_d)
    //     var day = ("0" + n_d.getDate()).slice(-2);
    //     var month = ("0" + (n_d.getMonth() + 1)).slice(-2);
    //     let str_date = n_d.getFullYear() + "-" + month + "-" + day;
    //     console.log('created obj',n_d.getDate(), str_date)
    //     this.dob = str_date
    //     console.log(this.dob)
    //     this.city = data.city;
    //     if (data.profession != "NOT_AVAILABLE")
    //     {
    //       this.profession = data.profession;
    //     }
    //   }
    // }).catch(err =>{
    //   console.log('unable to edit profile error arrived');
    //   console.log(err);
    // })

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