import React from "react";

import Carousel from "../IndexSections/Carousel.jsx";
import CompanyOverview from "../IndexSections/CompanyOverview.jsx";
import CardExample from "../IndexSections/CardExample";
import Tabs from "../IndexSections/Tabs";
import Navigation from "components/Navbars/Navigation.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

class Main extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <Carousel />
          <CardExample />
          <CompanyOverview />
          <Tabs />
        </main>
      </>
    );
  }
}

export default Main;
