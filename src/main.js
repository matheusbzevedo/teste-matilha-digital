import '@/style.scss';
import Vue from 'vue';
import router from '@/router';
import Loader from '@/components/Loader.vue';
import Pagination from '@/components/Pagination.vue';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import '@/plugins/index';

Vue.config.productionTip = false;
Vue.component('loader', Loader);
Vue.component('pagination', Pagination);
// Vue.mixin({
//   created: () => {
//     console.log('teste');
//   },
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
