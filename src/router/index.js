import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Counter from '@/views/Counter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home - Vue Learning App',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About - Vue Learning App',
      },
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter,
      meta: {
        title: 'Counter Demo - Vue Learning App',
      },
    },
    // Route dengan parameter
    {
      path: '/counter/:id',
      name: 'counter-detail',
      component: Counter,
      props: true,
      meta: {
        title: 'Counter Detail - Vue Learning App',
      },
    },
    // Fallback route untuk 404
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

// Navigation guards
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title
  }

  console.log(`Navigating from ${from.path} to ${to.path}`)
  next()
})

export default router
