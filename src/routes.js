import Index from "views/Index.js";
import DDLanding from "views/examples/DDLanding.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";

const routes = [
  {
    path: '/',
    key: 'index',
    component: Index,
    protected: false,
  },
  {
    path: '/DDlanding-page',
    key: 'DDLanding',
    component: DDLanding,
    protected: false,
  },
  {
    path: '/login-page',
    key: 'login',
    component: Login,
  },
  {
    path: '/profile-page',
    key: 'profile',
    component: Profile,
    protected: false,
  },
  {
    path: '/register-page',
    key: 'register',
    component: Register,
  }
]

export default routes;