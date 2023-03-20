<template>
 <div class="container center_class">
  <router-view></router-view>
 </div>
</template>

<script>




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
  }
}

</script>

<style scoped>

</style>
