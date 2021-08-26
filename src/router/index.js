import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import menuView from '../components/menuView.vue'
import profileView from '../views/profileView.vue'
import bookView from '../views/bookView.vue'
import mapView from '../views/mapView.vue'
import settingView from '../views/settingView.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/menuView',
			name: 'menuView',
			component: menuView
		},
		{
			path: '/profileView',
			name: 'profileView',
			component: profileView
		},
		{
			path: '/bookView',
			name: 'bookView',
			component: bookView
		},
		{
			path: '/mapView',
			name: 'mapView',
			component: mapView
		},
		{
			path: '/settingView',
			name: 'settingView',
			component: settingView
		}
	]
})
