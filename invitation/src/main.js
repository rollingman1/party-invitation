import App from './App.vue'
import router from './router';
import Vue from 'vue';

Vue.config.productionTip =true;

new Vue({
    router, 
    render:(h)=>h(App),
}).$mount("#app");