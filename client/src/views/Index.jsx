import React from "react";

//constants & components

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

   
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
  

    return (
      <>
        <NotificationsContainer />
    
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
