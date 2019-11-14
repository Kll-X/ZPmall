import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

//这里是做 "组件懒加载"
let Home = () => import("../views/Home.vue")
let Category = () => import("../views/Category.vue")
let Cart = () => import("../views/Cart.vue")
let Profile = () => import("../views/Profile.vue")

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/category',
        name: 'category',
        component: Category
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '*',
        name: 'error',
        component: Error
    }
]

const router = new VueRouter({
    routes
})

export default router
