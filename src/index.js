import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/bulmag-design-system-react.scss";

import Index from "views/Index.jsx";
import Landing from "views/pages/Landing.jsx";
import Login from "views/pages/Login.jsx";
import Profile from "views/pages/Profile.jsx";
import Register from "views/pages/Register.jsx";
import Contacts from "views/pages/Contacts.jsx";
import Products from "views/pages/Products";
import Services from "views/pages/Services";
import About from 'views/pages/About'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/about" exact render={props => <About {...props} />} />
      <Route path="/landing" exact render={props => <Landing {...props} />} />
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Route path="/profile" exact render={props => <Profile {...props} />} />
      <Route path="/register" exact render={props => <Register {...props} />} />
      <Route path="/contacts" exact render={props => <Contacts {...props} />} />
      <Route path="/products" exact render={props => <Products {...props} />} />
      <Route path="/services" exact render={props => <Services {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
