import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//constants & components
import { UserProvider, defaultState } from "../contexts/user-context";

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
import AddMachine from "./pages/AddMachine";
import Logout from "./pages/Logout";
import About from "./pages/About.jsx";
import Navigation from "../components/Navbars/Navigation";
import CardsFooter from "../components/Footers/CardsFooter";
import AddProduct from "./pages/AddProduct";
import AddService from "./pages/AddService";

class Index extends Component {
  constructor(props) {
    super(props);
    const userFromStorage = window.localStorage.getItem("user");

    const parsedUser = userFromStorage ? JSON.parse(userFromStorage) : {};

    console.log("parsedUser");
    console.log(parsedUser);

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

    console.log("Hello from Index.jsx");
    console.log(this.state);
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
              render={props => <Profile {...props} user={user} />}
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
            <UserRoute
              path="/logout"
              exact
              render={props => <Logout {...props} />}
            />
            <UserRoute
              path="/add-machine"
              exact
              render={props => <AddMachine {...props} />}
            />
            <AdminRoute
              path="/add-product"
              exact
              render={props => <AddProduct {...props} />}
            />
            <AdminRoute
              path="/add-service"
              exact
              render={props => <AddService {...props} />}
            />
          </Switch>
          <CardsFooter />
        </UserProvider>
      </div>
    );
  }
}

export default Index;
