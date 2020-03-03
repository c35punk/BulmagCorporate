import React from "react";

import { isMobile } from "react-device-detect";

import Carousel from "../IndexSections/Carousel.jsx";
import CompanyOverview from "../IndexSections/CompanyOverview.jsx";
import HomePageIntro from "views/IndexSections/HomePageIntro.jsx";
import ProfessionalServicesBanner from "views/IndexSections/ProfessionalServicesBanner.jsx";
import SupportBanner from "views/IndexSections/SupportBanner";
import AltCarousel from "views/IndexSections/AltCarousel.jsx";

class Main extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    let carousel = !isMobile ? <Carousel /> : <AltCarousel />;
    return (
      <main ref="main">
        {carousel}
        <SupportBanner />
        <CompanyOverview />
        <ProfessionalServicesBanner />
        <HomePageIntro />
      </main>
    );
  }
}

export default Main;
