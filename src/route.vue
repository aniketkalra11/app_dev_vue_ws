


<script>
import { createRouter, createWebHistory } from 'vue-router'
//* Components
import SignUpComponet1 from './components/user_components/SignUpContainer1.vue'
import LogInContainer from './components/user_components/LogInContainer.vue'

const routes = createRouter({
	history: createWebHistory(),
	routes:[
		{ path: '/', component: LogInContainer},
		{ path: "/signup", component: SignUpComponet1}
	]
});
export default routes;
</script>