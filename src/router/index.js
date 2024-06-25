
import { createRouter, createWebHistory } from 'vue-router'
import Post from '../views/post.vue'
import Todo from '../views/todo.vue'
import Albums from '../views/Albums.vue'
import AlbumDetail from '../views/AlbumDetail.vue'



const routes = [
  { path: '/', redirect: '/post' },
  { path: '/post', component: Post },
  { path: '/todo', component: Todo },
  { path: '/albums', component: Albums },
  { path: '/albums/:id', component: AlbumDetail, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
