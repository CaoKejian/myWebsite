import { RouteRecordRaw } from 'vue-router';
import { First } from '../components/Welcome/first';
import { Forth } from '../components/Welcome/forth';
import { Second } from '../components/Welcome/second';
import { Third } from '../components/Welcome/third';

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  {
    path: '/welcome', component: () => import('../views/Welcome'),
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', component: First, },
      { path: '2', component: Second, },
      { path: '3', component: Third, },
      { path: '4', component: Forth, }
    ]
  },
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