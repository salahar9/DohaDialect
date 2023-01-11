import Index from "views/Index.js";
import Index2 from "views/Index2.js";
import DDLanding from "views/examples/DDLanding.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Scores from "views/examples/Scores.js";

const routes = [
  {
    path: "/",
    key: "index2",
    component: Index2,
    protected: false,
  },
  {
    path: "/oldindex",
    key: "index",
    component: Index,
    protected: false,
  },
  {
    path: "/DDlanding-page",
    key: "DDLanding",
    component: DDLanding,
    protected: false,
  },
  {
    path: "/login-page",
    key: "login",
    component: Login,
  },
  {
    path: "/profile-page",
    key: "profile",
    component: Profile,
    protected: false,
  },
  {
    path: "/register-page",
    key: "register",
    component: Register,
  },
  {
    path: "/scores-page",
    key: "scores",
    component: Scores,
    protected: false,
  },
];

export default routes;
