import Vue from 'vue';
import VueRouter from 'vue-router';
import vuex from './store/index.js';
import App from './App.vue';
import Home from './components/Home.vue';
import AboutUs from './components/AboutUs.vue';
import ContactUs from './components/ContactUs.vue';
import PokemonFile from './components/PokemonFile.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/aboutus', component: AboutUs },
  { path: '/contactus', component: ContactUs },
  {
    name: 'pokemon',
    path: '/pokemon/:pokemonId',
    component: PokemonFile,
    props: true,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  store: vuex,
  render: (h) => h(App),
}).$mount('#app');
