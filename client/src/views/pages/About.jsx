import React from "react";

// reactstrap components
import { Container, Col, Row } from "reactstrap";
import { Parallax } from "react-parallax";

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
            <Parallax
              blur={{ min: -45, max: 45 }}
              bgImage={require("../../assets/img/pics-vte5/IMG_0860.jpg")}
              bgImageAlt="the dog"
              strength={450}
            >
              <div className="shape shape-style-1 shape-default "></div>
              <section className="section section-md section-shaped mb--200">
                <Container className="py-lg-md d-flex">
                  <div className="col px-0 mb--200">
                    <Row>
                      <Col lg="6">
                        <h1 className="display-3 text-white">ABOUT US</h1>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <div style={{ height: "350px" }} />
              </section>
            </Parallax>
            <section className="section section-lg pt-lg-0 mt--200">
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
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
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
