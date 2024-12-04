// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import components for your routes
import Home from '../components/BlogList.vue';
import BlogPost from '../components/BlogPost.vue';
import BlogGrid from '../components/BlogGrid.vue';
import BlogDetail from '../components/BlogDetail.vue';
import User from '../components/UserPage.vue';
import Login from '../components/LoginPage.vue';
import Signin from '../components/SignInPage.vue';
const routes = [
    {
        path: '/blog-grid',
        name:'BlogGrid',
        component:BlogGrid,
    },
    {
        path: '/blog-grid:id',
        name:'BlogDetail',
        component:BlogDetail,
    },
    {
        path: '/user',
        name:'User',
        component:User,
        meta: {requiresAuth: true}
    },
    { 
        path: '/',
        alias: '/home',
        name: 'Home' ,
        component: Home,
        children:{
            path: '/home:id',
            name:'BlogDetail',
            component:BlogDetail,
        },
    },
    {
        path: '/blog-post',
        name: 'BlogPost',
        component: BlogPost,
        meta: {requiresAuth: true}
    },

    /*Login path*/
    {
        path: '/login',
        name:'Login',
        component:Login,
    },
    /*Signin path*/
    {
        path: '/sign-in',
        name:'Signin',
        component:Signin
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const user = sessionStorage.getItem('user');
    if (to.matched.some(record => record.meta.requiresAuth) && user == null) {
        sessionStorage.setItem('nameUri',to.name);
        next ({ name: 'Login' }); // Redirect to login if not authenticated
    } else {
        next (); // Proceed to the route
    }
});
export default router;