import Home from './views/Home.vue'
import Guide from './views/Guide.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/guide', component: Guide, meta: { title: 'Guide' } },
  { path: '/:path(.*)', component: NotFound },
]
