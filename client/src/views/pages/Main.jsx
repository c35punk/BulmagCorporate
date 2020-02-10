import React from "react";

import Carousel from "../IndexSections/Carousel.jsx";
import CompanyOverview from "../IndexSections/CompanyOverview.jsx";
import HomePageIntro from "views/IndexSections/HomePageIntro.jsx";
import ProfessionalServicesBanner from "views/IndexSections/ProfessionalServicesBanner.jsx";
import SupportBanner from "views/IndexSections/SupportBanner";

class Main extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <main ref="main">
        <Carousel />
        <SupportBanner />
        <CompanyOverview />
        <HomePageIntro />
        <ProfessionalServicesBanner />
      </main>
    );
  }
}

export default Main;
