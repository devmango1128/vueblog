import { createWebHistory, createRouter } from "vue-router";
import BlogList from '@/components/BlogList.vue'
import BlogHome from '@/components/BlogHome.vue'
import BlogDetail from '@/components/_number.vue'

const routes = [
  {
    path: "/list",
    component: BlogList,
  },
  {
    path: "/",
    component: BlogHome
  },
  {
    path: "/list/:number",
    name: 'BlogDetail',
    component: BlogDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 