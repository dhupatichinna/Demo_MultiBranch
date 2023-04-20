import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeLogin from '../views/EmployeLogin.vue'
import Singup from '../views/Singup.vue'
import Register from '../views/Registration.vue'
import Employee from '../views/Employee.vue'
import Update from '../views/Update.vue'
import About from '../views/About.vue'
import Delete from '../views/Delete.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component:EmployeLogin
  },
  {
    path: '/singup',
    name: 'singup',
    component: Singup
  },
  {
    path: '/employee',
    name: 'employe',
    component: Employee
  },
  {
    path: '/employee/update/:id',
    name: 'update',
    component: Update
  },
  {
    path: '/employee/register',
    name: 'regiter',
    component: Register
  },
  {
    path: '/employee/delete/:id',
    name: 'delete',
    component: Delete
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
