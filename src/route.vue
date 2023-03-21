


<script>
import { createRouter, createWebHistory } from 'vue-router'
//* Components
import SignUpComponet1 from './components/user_components/SignUpContainer1.vue'
import LogInContainer from './components/user_components/LogInContainer.vue'
import UserDashBoard from './components/user_components/UserDashBoard.vue'
import ExperimentContainer from './components/ExperimentContainer.vue'
import IndividualPostPage from './components/post_componets/IndividualPostPage.vue'
import UserProfile from './components/user_components/UserProfile.vue'

const routes = createRouter({
	history: createWebHistory(),
	routes:[
		{ path: '/', component: LogInContainer},
		{ path: "/signup", component: SignUpComponet1},
		{ path: "/user/dashboard", component: UserDashBoard},
		{ path: "/experiment", component: ExperimentContainer},
		{ path:"/user/post/view", component: IndividualPostPage},
		{ path: "/user/profile", component: UserProfile}
	]
});
export default routes;
</script>