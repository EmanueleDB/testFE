import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import testComponent from "@/components/testComponent/TestComponent.vue"
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: testComponent,
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
