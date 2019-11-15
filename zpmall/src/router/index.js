import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

//这里是做 "组件懒加载"
let Home = () => import("../views/Home.vue")
let Category = () => import("../views/Category.vue")
let Cart = () => import("../views/Cart.vue")
let Profile = () => import("../views/Profile.vue")
import FooterBar from '../components/FooterBar.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default:Home,
            'footer-bar':FooterBar
        }
    },
    {
        path: '/category',
        name: 'category',
        components: {
            default:Category,
            'footer-bar':FooterBar
        }
    },
    {
        path: '/cart',
        name: 'cart',
        components: {
            default:Cart,
            'footer-bar':FooterBar
        }
    },
    {
        path: '/profile',
        name: 'profile',
        components: {
            default:Profile,
            'footer-bar':FooterBar
        }
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
