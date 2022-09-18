import { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routeHome: Array<RouteConfig> = []

if (process.env.NODE_ENV !== 'production') {
	routeHome.push({
		path: '/',
		name: 'home',
		component: HomeView
	})
}

if (process.env.NODE_ENV === 'production') {
	routeHome.push({
		path: '/',
		redirect: '/vue-grid-layout/'
	})
	routeHome.push({
		path: '/vue-grid-layout/',
		name: 'home',
		component: HomeView
	})
}

const routes: Array<RouteConfig> = [
	...routeHome,
	// {
	//   path: '/',
	//   redirect: '/vue-grid-layout/'
	//   name: 'home',
	//   component: HomeView
	// },
	// {
	//   path: '/vue-grid-layout/',
	//   name: 'home',
	//   component: HomeView
	// },
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	}
]

export default routes