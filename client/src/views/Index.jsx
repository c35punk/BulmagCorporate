import React from "react";

//constants & components
import { auth, roles, notificationMessages } from "../constants/constants";
import { defaultUser, UserProvider } from "../components/contexts/user-context";
import notificationService from "../services/notification-service";
import NotificationsContainer from "../components/notifications/NotificationsContainer";

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

  updateUser = user => {
    window.localStorage.setItem(auth.authUser, JSON.stringify(user));
    this.setState({ user });
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    const { user } = this.state;
    console.log(user);

    return (
      <>
        <NotificationsContainer />
        <UserProvider
          // UserContext
          value={{
            user,
            isAdmin: this.isAdmin,
            isLoginRequired: this.isLoginRequired,
            updateUser: this.updateUser
          }}
        >
          <Navigation />
          <main ref="main">
            <Carousel />

            <Download />
          </main>
          <CardsFooter />
        </UserProvider>
      </>
    );
  }
}

export default Index;
