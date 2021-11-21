import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'beer',
            component:()=>import('./components/HelloWorld.vue')
        },
        {
            path:'/cover',
            name:'cover',
            component:()=>import('./components/Cover.vue')
        },
    ],
})