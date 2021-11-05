import { RouteRecordRaw } from 'vue-router';

export const weatherRoutes: Array<RouteRecordRaw> = [
  {
    path: '/weather',
    name: 'Weather',
    component: () => import('./weather-demo-page.vue')
  },
]

