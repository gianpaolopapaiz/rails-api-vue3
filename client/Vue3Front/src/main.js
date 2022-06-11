import { createApp } from "vue";
import App from "./App.vue";
import * as Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import AccountsPage from "./pages/AccountsPage.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: AccountsPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)

app.use(VueAxios, axios);
app.use(router);

app.mount("#app");
