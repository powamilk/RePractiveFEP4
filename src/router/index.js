import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddForm from '@/views/AddForm.vue'
import EditForm from '@/components/EditForm.vue'
import DetailForm from '@/views/DetailForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
     {
       path: '/create',
       name: 'create',
      component: AddForm
    },
    {
      path: '/edit/:id',
      name: 'edit',
       component: EditForm
    },
     {
       path: '/detail/:id',
       name: 'detail',
      component: DetailForm
    }
  ]
})

export default router
