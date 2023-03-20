<template>
 <div>
  <!-- <PostContainer user_id="demo_id" post_id="demo_post_id" title="Demo Title" containt="Post Demo Containt"></PostContainer> -->
  <navBar></navBar>
  <PostContainer v-for="post in l_posts" :key="post.demo_post_id" :title="post.title" :user_id="post.demo_id" :post_id="post.demo_post_id"  :containt="post.containt"></PostContainer>
  <ProfilePostContainer  ></ProfilePostContainer>
  <SignUpContainer></SignUpContainer>
 </div>


</template>

<script>

import NavBar from './components/nav_bar/NavContainer.vue'
import PostContainer from './components/post_componets/PostContainer.vue'
import ProfilePostContainer from './components/post_componets/ProfilePostContainer.vue'
import SignUpContainer from './components/user_components/SignUpContainer.vue'


export default {
  name: 'App',
  data(){
    return {
      l_posts:[
        {
          demo_id:'1',
          demo_post_id:'1_12',
          title:'demo 1',
          description: '123'
        },
        {
          demo_id:'2',
          demo_post_id:'2_12',
          title:'demo 2',
          description: '1223'
        },
        {
          demo_id:'3',
          demo_post_id:'3_12',
          title:'demo 1',
          description: '1233'
        }
      ]
    }
  },
  components:{
    PostContainer,
    ProfilePostContainer,
    SignUpContainer,
    NavBar
}
}

</script>

<style>

</style>
