import React from "react";

//constants
import { auth, roles, notificationMessages } from "../constants/constants";
import { defaultUser } from "../components/contexts/user-context";
import notificationService from "../services/notification-service";

// reactstrap components
// import { Container, Row } from "reactstrap";

// core components
import Navigation from "components/Navbars/Navigation.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections

import Carousel from "./IndexSections/Carousel.jsx";
import Download from "./IndexSections/Download.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);

    const user = this.tryLoadUserFromStorage();

    this.state = { user };
  }

  tryLoadUserFromStorage = () => {
    const authToken = window.localStorage.getItem(auth.authToken);
    const authUser = JSON.parse(window.localStorage.getItem(auth.authUser));

    if (!authToken || !authUser) {
      return defaultUser;
    }

    const userFromStorage = { ...authUser, isLoggedIn: true };
    return userFromStorage;
  };

  isAdmin = () => {
    const { user } = this.state;

    return (
      user &&
      user.roles &&
      user.roles.length > 0 &&
      user.roles.includes(roles.adminRole)
    );
  };

  isLoginRequired = () => {
    const { user } = this.state;

    // Info Notification
    if (!user.isLoggedIn) {
      notificationService.infoMsg(notificationMessages.loginRequiredMsg);
      return true;
    }
    return false;
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Navigation />
        <main ref="main">
          <Carousel />

          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
