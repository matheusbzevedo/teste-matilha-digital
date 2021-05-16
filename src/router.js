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
    path: '/naves',
    name: 'Naves',
    meta: {
      title: `${prefixTitle} Naves`,
    },
    component: () => import('@/views/Naves.vue'),
  },
  {
    path: '/nave/:id',
    name: 'Nave',
    meta: {
      title: `${prefixTitle} Nave`,
    },
    component: () => import('@/views/Nave.vue'),
  },
  {
    path: '/pessoas',
    name: 'Pessoas',
    meta: {
      title: `${prefixTitle} Pessoas`,
    },
    component: () => import('@/views/Pessoas.vue'),
  },
  {
    path: '/pessoa/:id',
    name: 'Pessoa',
    meta: {
      title: `${prefixTitle} Pessoa`,
    },
    component: () => import('@/views/Pessoa.vue'),
  },
  {
    path: '/planetas',
    name: 'Planetas',
    meta: {
      title: `${prefixTitle} Planetas`,
    },
    component: () => import('@/views/Planetas.vue'),
  },
  {
    path: '/planeta/:id',
    name: 'Planeta',
    meta: {
      title: `${prefixTitle} Planeta`,
    },
    component: () => import('@/views/Planeta.vue'),
  },
  {
    path: '/especies',
    name: 'Espécies',
    meta: {
      title: `${prefixTitle} Espécies`,
    },
    component: () => import('@/views/Especies.vue'),
  },
  {
    path: '/especie/:id',
    name: 'Espécie',
    meta: {
      title: `${prefixTitle} Espécie`,
    },
    component: () => import('@/views/Especie.vue'),
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
