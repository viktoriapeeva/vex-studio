const routes = [
  {
    path: '/',
    component: () => import('layouts/HomePageLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/about', name: 'about', component: () => import('pages/AboutPage.vue') },
      {
        path: '/projects',
        name: 'projects',
        component: () => import('pages/ProjectsPage.vue'),
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('pages/ContactPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
