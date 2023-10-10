import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'DetallesTelefono/:telefono',
        component: () => import('pages/DetallesTelefono.vue'),
      },
    ],
  },
  {
    path: '/NuevoAnuncio',
    component: () => import('pages/NuevoAnuncio.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
