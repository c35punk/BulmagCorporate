import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import Navigation from "components/Navbars/Navigation.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections

import Carousel from "./IndexSections/Carousel.jsx";
import Login from "./IndexSections/Login.jsx";
import Download from "./IndexSections/Download.jsx";


class Index extends React.Component {
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
          <Login />
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}


export default Index;
