import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faCheck, faTrashCan, faEdit } from "@fortawesome/free-solid-svg-icons"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap/dist/css/bootstrap.css"

library.add(faTrashCan, faCheck, faCircleXmark, faEdit)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.component("font-awesome-icon", FontAwesomeIcon)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
