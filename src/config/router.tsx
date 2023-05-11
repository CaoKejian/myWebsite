import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  {
    path: '/home', component: () => import('../views/Home')
  },
  {
    path: '/search', component: () => import('../views/Search'),
    children: [
      { path: "", component: () => import('../share/SearchPage') }
    ]
  },
  {
    path: '/resume', component: () => import('../views/Resume'),
    children: [
      { path: "", component: () => import('../share/ResumePage') }
    ]
  },
]