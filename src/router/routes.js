const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/HomePage.vue') },
      { path: 'about', name: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'services', name: 'services', component: () => import('pages/ServicesPage.vue') },
      { path: 'contact', name: 'contact', component: () => import('pages/ContactPage.vue') },
      { path: 'career', name: 'career', component: () => import('pages/CareerPage.vue') },
      { path: 'privacy-policy', name: 'privacy-policy', component: () => import('pages/PrivacyPolicy.vue') },
      { path: 'terms-and-conditions', name: 'terms-and-conditions', component: () => import('pages/TermsAndConditions.vue') }
    ]
  },

  // Always leave this as last one
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
