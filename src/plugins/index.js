import Vue from 'vue';
import axios from 'axios';
import URL from '@/helpers/URL';

axios.defaults.baseURL = 'https://swapi.dev/api/';

Vue.use({
  install() {
    Vue.prototype.$http = axios;

    Vue.prototype.$URLHelper = URL;
  },
});
