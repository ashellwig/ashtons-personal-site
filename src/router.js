import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Experience from './views/experience/index.vue'
import IBM from './views/experience/details/IBM.vue'
import MGR from './views/experience/details/MGR.vue'
import Trimble from './views/experience/details/Trimble.vue'
import Apollo from './views/experience/details/Apollo.vue'
import Social from './views/social/index.vue'
import Portfolio from './views/portfolio/index.vue'

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
      name: 'Experience'
    }, {
      path: '/experience/ibm',
      name: 'IBM',
      component: IBM
    }, {
      path: '/experience/mgr',
      name: 'Mrs Greens Remedies',
      component: MGR
    }, {
      path: '/experience/apollo',
      name: 'Apollo DAE',
      component: Apollo
    }, {
      path: '/experience/trimble',
      name: 'Trimble',
      component: Trimble
    }, {
      path: '/social',
      name: 'Social Networks',
      component: Social
    }, {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
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
