import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// index page sections
import Tabs from "../IndexSections/Tabs";

class About extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <Container className="py-lg-md d-flex">
                <h1 className="display-3 text-white justify-content-center position-absolute">
                  ABOUT
                </h1>
              </Container>
              <Tabs />
              <div className="shape shape-style-1 shape-default"></div>
              <Container className="py-lg-md d-flex"></Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-secondary"
                    points="560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
        </main>
      </>
    );
  }
}

export default About;
