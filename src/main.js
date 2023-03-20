import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
// import post from './components/post_componets/PostContainer.vue'
const app = createApp(App);
// app.mount(post)
app.mount('#app');
