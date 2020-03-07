import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

//constants & components
import { UserProvider, defaultState } from "../contexts/user-context";
import CookieConsent from "react-cookie-consent";

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
import AdminDashboard from "./pages/AdminDashboard";
import AddMachine from "./pages/AddMachine";
import Logout from "./pages/Logout";
import About from "./pages/About.jsx";
import Navigation from "../components/Navbars/Navigation";
import AddProduct from "./pages/AddProduct";
import NotFound from "./pages/NotFound";
import Footer from "components/Footers/Footer";
import { Button } from "reactstrap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";

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

    return (
      <div>
        <UserProvider value={user}>
          <CookieConsent style={{ color: "white" }}>
            We use cookies.{" "}
            <Button
              
              className="btn-white"
              color="default"
              to="/privacy-policy"
              tag={Link}
              size="sm"
            >
              Privacy Policy
            </Button>
            <Button
              
              className="btn-white"
              color="default"
              to="/disclaimer"
              tag={Link}
              size="sm"
            >
              Disclaimer
            </Button>
          </CookieConsent>
          <Navigation />
          <Switch>
            <Route path="/" exact render={props => <Main {...props} />} />
            <Route
              path="/not-found"
              exact
              render={props => <NotFound {...props} />}
            />
            <Route path="/about" exact render={props => <About {...props} />} />
            <Route
              path="/privacy-policy"
              exact
              render={props => <PrivacyPolicy {...props} />}
            />
            <Route
              path="/disclaimer"
              exact
              render={props => <Disclaimer {...props} />}
            />
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
            />
            <UserRoute
              path="/admin-dashboard"
              exact
              render={props => <AdminDashboard {...props} />}
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
          </Switch>
          <Footer />
        </UserProvider>
      </div>
    );
  }
}

export default Index;
