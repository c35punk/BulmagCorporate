import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//constants & components
import {
  UserConsumer,
  UserProvider,
  defaultState
} from "../contexts/user-context";
import NotificationsContainer from "../components/notifications/NotificationsContainer";

// core components
// import Navigation from "components/Navbars/Navigation.jsx";
// import CardsFooter from "components/Footers/CardsFooter.jsx";

// import { UserProvider, defaultState } from "../contexts/user-context";

import UserRoute from "../routes/user-route";
import AdminRoute from "../routes/auth-route";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Register from "./pages/Register.jsx";
import Contacts from "./pages/Contacts.jsx";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Dashboard from "./pages/Dashboard";
import AddSystem from "./pages/AddSystem";
import About from "./pages/About.jsx";
import Navigation from "components/Navbars/Navigation";
import CardsFooter from "components/Footers/CardsFooter";

class Index extends Component {
  constructor(props) {
    super(props);
    const userFromStorage = window.localStorage.getItem("user");

    const parsedUser = userFromStorage ? JSON.parse(userFromStorage) : {};

    this.state = {
      user: {
        ...defaultState,
        ...parsedUser,
        updateUser: this.updateUser
      }
    };
  }

  updateUser = user => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;

    return (
      <div>
        <UserProvider value={user}>
          <Navigation />
          <Switch>
            <Route path="/" exact render={props => <Main {...props} />} />
            <Route path="/about" exact render={props => <About {...props} />} />
            <Route
              path="/projects"
              exact
              render={props => <Projects {...props} />}
            />
            <Route path="/login" exact render={props => <Login {...props} />} />
            <UserRoute
              path="/profile"
              exact
              render={props => <Profile {...props} />}
            />
            <Route
              path="/register"
              exact
              render={props => <Register {...props} />}
            />
            <Route
              path="/contacts"
              exact
              render={props => <Contacts {...props} />}
            />
            <Route
              path="/products"
              exact
              render={props => <Products {...props} />}
            />
            <Route
              path="/services"
              exact
              render={props => <Services {...props} />}
            />
            <UserRoute
              path="/dashboard"
              exact
              render={props => <Dashboard {...props} />}
            />
            <Route
              path="/add-system"
              exact
              render={props => <AddSystem {...props} />}
            />
          </Switch>
          <CardsFooter />
        </UserProvider>
      </div>
    );
  }
}

export default Index;
