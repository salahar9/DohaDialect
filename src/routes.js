import Index from "views/Index.js";
import Index2 from "views/Index2.js";
import DDLanding from "views/examples/DDLanding.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Scores from "views/Scores.js";
import Weather from "views/Weather.js";

const routes = [
  {
    path: "/scores",
    key: "index2",
    component: Scores,
    protected: false,
  },
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
    path: "/weather",
    key: "DDLanding",
    component: Weather,
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
];

export default routes;
