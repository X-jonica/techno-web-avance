import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProduitDescription from '../views/ProduitDescription.vue'
import PanierView from '../views/PanierView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignupView,
        meta: { requiresGuest: true }
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/product/:id',
        name: 'description-produit',
        component: ProduitDescription,
        props: true
    },
    {
        path: '/panier',
        name: 'Panier',
        component: PanierView,
        meta: { requiresAuth: true }
    },
    {
        path: '/connexion',
        name: 'Login',
        component: LoginView,
        meta: { requiresGuest: true }
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

// Gestion de l'authentification
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('user') || sessionStorage.getItem('user')

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/connexion')
    } else if (to.meta.requiresGuest && isAuthenticated) {
        next()
    } else {
        next()
    }
})


export default router
