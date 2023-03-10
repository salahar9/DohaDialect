/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import DDNavbar from "./views/IndexSections/Navbar";
import DDFooter from "components/Footers/DDFooter.js";
import App from "App";

import { AuthProvider } from "./auth-context/auth.context";

const root = document.getElementById("root");
let user = localStorage.getItem("user");
user = JSON.parse(user);

ReactDOM.render(
  <AuthProvider userData={user}>
    <BrowserRouter>
      <Fragment>
        <DDNavbar />
        <Switch>
          <App />
        </Switch>
        <DDFooter />
      </Fragment>
    </BrowserRouter>
  </AuthProvider>,
  root
);
