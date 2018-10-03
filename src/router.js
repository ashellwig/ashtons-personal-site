import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Experience from './views/experience/index.vue'
import IBM from './views/experience/details/IBM.vue'
import MGR from './views/experience/details/MGR.vue'
import Trimble from './views/experience/details/Trimble.vue'
import Apollo from './views/experience/details/Apollo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/experience',
      component: Experience,
      children: [{
        path: 'ibm',
        component: IBM
      }, {
        path: 'mgr',
        component: MGR
      }, {
        path: 'apollo',
        component: Apollo
      }, {
        path: 'trimble',
        component: Trimble
      }]
    }, {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
