import React from "react";

//constants & components
import { UserProvider, defaultState } from "../contexts/user-context";
import NotificationsContainer from "../components/notifications/NotificationsContainer";

// core components
import Navigation from "components/Navbars/Navigation.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections

import Carousel from "./IndexSections/Carousel.jsx";
import CompanyOverview from "./IndexSections/CompanyOverview.jsx";
import CardExample from "./IndexSections/CardExample";
import Tabs from "./IndexSections/Tabs";

class Index extends React.Component {
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

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    const { user } = this.state;

    return (
      <UserProvider value={user}>
        <NotificationsContainer />

        <Navigation />

        <main ref="main">
          <Carousel />
          <CardExample />
          <CompanyOverview />
          <Tabs />
        </main>
        <CardsFooter />
      </UserProvider>
    );
  }
}

export default Index;
