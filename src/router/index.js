import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'expanding-cards',
        name: 'Expanding Cards',
        // route level code-splitting
        // this generates a separate chunk (name.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "Expanding cards" */ '../components/ExpandingCards')
        }
      },
      {
        path: 'progress-steps',
        name: 'Progress steps',
        // route level code-splitting
        // this generates a separate chunk (name.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "Progress Steps" */ '../components/ProgressSteps')
        }
      },
      {
        path: 'rotating-nav',
        name: 'Rotating navigation',
        // route level code-splitting
        // this generates a separate chunk (name.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "Progress Steps" */ '../components/RotatingNav')
        }
      },
      {
        path: 'hidden-search',
        name: 'Hidden Search',
        // route level code-splitting
        // this generates a separate chunk (name.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "Progress Steps" */ '../components/HiddenSearch')
        }
      },
      {
        path: 'blury-loading',
        name: 'Blury loading',
        // route level code-splitting
        // this generates a separate chunk (name.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "Progress Steps" */ '../components/BluryLoading')
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
