import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueMoment from "vue-moment";

Vue.config.productionTip = false;

Vue.use(VueMoment);

Vue.filter("amount", (amount) => parseInt(amount, 10).toLocaleString());

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
