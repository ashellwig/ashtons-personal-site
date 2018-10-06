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
import FedexGround from './views/experience/details/FedexGround.vue'
import RexelHoldings from './views/experience/details/RexelHoldings.vue'
import Walmart from './views/experience/details/Walmart.vue'
import Education from './views/experience/details/Education.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'AHellwig | Home',
        metaTags: [{
          name: 'description',
          content: 'The home page of Ashton Hellwig\'s personal site'
        }, {
          property: 'og:description',
          content: 'The home page of Ashton Hellwig\'s personal site'
        }]
      }
    }, {
      path: '/experience',
      component: Experience,
      name: 'Experience',
      meta: {
        title: 'AHellwig | Experience',
        metaTags: [{
          name: 'description',
          content: 'Landing page for my technical experience'
        }, {
          property: 'og:description',
          content: 'Landing page for my technical experience'
        }]
      }
    }, {
      path: '/experience/ibm',
      name: 'IBM',
      component: IBM,
      meta: {
        title: 'AHellwig | Experience | IBM',
        metaTags: [{
          name: 'description',
          content: 'Details about my work experience with IBM'
        }, {
          property: 'og:description',
          content: 'Details about my work experience with IBM'
        }]
      }
    }, {
      path: '/experience/mgr',
      name: 'Mrs Greens Remedies',
      component: MGR,
      meta: {
        title: 'AHellwig | Experience | 421 Hemp',
        metaTags: [{
          name: 'description',
          content: 'Details about my work experience with Mrs Greens Remedies'
        }, {
          property: 'og:description',
          content: 'Details about my work experience with Mrs Greens Remedies'
        }]
      }
    }, {
      path: '/experience/apollo',
      name: 'Apollo DAE',
      component: Apollo,
      meta: {
        title: 'AHellwig | Experience | Apollo',
        metaTags: [{
          name: 'description',
          content: 'Details about my work experience with Apollo DAE'
        }, {
          property: 'og:description',
          content: 'Details about my work experience with Apollo DAE'
        }]
      }
    }, {
      path: '/experience/trimble',
      name: 'Trimble',
      component: Trimble,
      meta: {
        title: 'AHellwig | Experience | Trimble',
        metaTags: [{
          name: 'description',
          content: 'Details about my work experience with Trimble Navigation'
        }, {
          property: 'og:description',
          content: 'Details about my work experience with Trimble Navigation'
        }]
      }
    }, {
      path: '/experience/fedex',
      name: 'Fedex',
      component: FedexGround,
      meta: {
        title: 'AHellwig | Experience | Fedex',
        metaTags: [{
          name: 'description',
          content: 'Details about my experience with FedEx Ground'
        }, {
          property: 'og:description',
          content: 'Details about my experience with FedEx Ground'
        }]
      }
    }, {
      path: '/experience/walmart',
      name: 'Walmart',
      component: Walmart,
      meta: {
        title: 'AHellwig | Experience | Walmart',
        metaTags: [{
          name: 'description',
          content: 'Details about my experience with Walmart Stores'
        }, {
          property: 'og:description',
          content: 'Details about my experience with Walmart Stores'
        }]
      }
    }, {
      path: '/experience/rexel',
      name: 'Rexel',
      component: RexelHoldings,
      meta: {
        title: 'AHellwig | Experience | Rexel Holdings',
        metaTags: [{
          name: 'description',
          content: 'Details about my experience with Rexel Holdings USA'
        }, {
          property: 'og:description',
          content: 'Details about my experience with Rexel Holdings USA'
        }]
      }
    }, {
      path: '/experience/education',
      name: 'Education',
      component: Education,
      meta: {
        title: 'AHellwig | Education',
        metaTags: [{
          name: 'description',
          content: 'Details about my education'
        }, {
          property: 'og:description',
          content: 'Details about my education'
        }]
      }
    }, {
      path: '/social',
      name: 'Social Networks',
      component: Social,
      meta: {
        title: 'AHellwig | Social Networks',
        metaTags: [{
          name: 'description',
          content: 'Details about my social network profiles'
        }, {
          property: 'og:description',
          content: 'Details about my social network profiles'
        }]
      }
    }, {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
      meta: {
        title: 'AHellwig | Portfolio',
        metaTags: [{
          name: 'description',
          content: 'Details about my favorite personal projects and contributions'
        }, {
          property: 'og:description',
          content: 'Details about my favorite personal projects and contributions'
        }]
      }
    }, {
      path: '/about',
      name: 'about',
      meta: {
        title: 'AHellwig | About',
        metaTags: [{
          name: 'description',
          content: 'The about page of Ashton Hellwig\'s personal site'
        }, {
          property: 'og:description',
          content: 'The about page of Ashton Hellwig\'s personal site'
        }]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
