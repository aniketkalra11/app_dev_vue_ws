


<script>
import { createRouter, createWebHistory } from 'vue-router'
//* Components
import SignUpComponet1 from './components/user_components/SignUpContainer1.vue'
import LogInContainer from './components/user_components/LogInContainer.vue'
import UserDashBoard from './components/user_components/UserDashBoard.vue'
import ExperimentContainer from './components/ExperimentContainer.vue'
import IndividualPostPage from './components/post_componets/IndividualPostPage.vue'
import UserProfile from './components/user_components/UserProfile.vue'
import CreatePost from './components/post_componets/CreatePost.vue'
import SearchContainer from './components/search_bars/search_container.vue'
import EditProfileContainer from './components/user_components/EditProfileContainer.vue'
import EditPost from './components/post_componets/EditPost.vue'
import UserProfileVisit from './components/user_components/UserProfileVisit'
import UserBookmarks from './components/user_components/UserBookmarks.vue'
import UserPasswordChange from './components/user_components/UserPasswordChange.vue'

const routes = createRouter({
	history: createWebHistory(),
	routes:[
		{ path: '/', component: LogInContainer},
		{ path: "/signup", component: SignUpComponet1},
		{ path: "/user/dashboard", component: UserDashBoard},
		{ path: "/experiment", component: ExperimentContainer},
		{ path: "/user/post/view/:post_id/:is_text_only_post", component: IndividualPostPage},
		{ path: "/user/profile", component: UserProfile},
		{ path: "/user/visit/profile/:user_id", component: UserProfileVisit},
		{ path: "/user/createpost", component: CreatePost},
		{ path: "/user/search/:keyword", component: SearchContainer},
		{ path: "/user/editprofile", component: EditProfileContainer},
		{ path: "/user/follow/:user_id/:key", component: SearchContainer},
		{ path: "/user/post/edit/:post_id", component: EditPost},
		{ path: "/user/bookmark", component: UserBookmarks},
		{ path: "/user/visit/profile/", component: UserProfileVisit},
		{ path: "/user/password/change", component: UserPasswordChange}

	]
});
export default routes;
</script>