import Vue from 'vue';
import VueRouter from 'vue-router';

const prefixTitle = 'Matilha Digital - ';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: `${prefixTitle} @matheusbzevedo`,
    },
    component: () => import('@/views/Index.vue'),
  },
  {
    path: '/filmes',
    name: 'Filmes',
    meta: {
      title: `${prefixTitle} Filmes`,
    },
    component: () => import('@/views/Filmes.vue'),
  },
  {
    path: '/filme/:id',
    name: 'Filme',
    meta: {
      title: `${prefixTitle} Filme`,
    },
    component: () => import('@/views/Filme.vue'),
  },
  {
    path: '/veiculos',
    name: 'Veículos',
    meta: {
      title: `${prefixTitle} Veículos`,
    },
    component: () => import('@/views/Veiculos.vue'),
  },
  {
    path: '/veiculo/:id',
    name: 'Veículo',
    meta: {
      title: `${prefixTitle} Veículo`,
    },
    component: () => import('@/views/Veiculo.vue'),
  },
  {
    path: '*',
    component: () => import('@/views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || 'Matilha Digital';
  });
});

export default router;
