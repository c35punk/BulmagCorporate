import React from "react";

import { Parallax } from "react-parallax";
import { Container, Row, Col } from "reactstrap";
import { isMobile } from "react-device-detect";

const HomePageIntro = props => {
  return (
    <Parallax
      bgImage={require("../../assets/img/pics-vte5/IMG_0870.jpg")}
      bgImageAlt="Bulmag DC"
      strength={isMobile ? 800 : 900}
    >
      <section className="section section-lg">
        <Container className="pt-lg pb-300">
          <Row className="text-center justify-content-center"></Row>
          <Row
            className="row-grid mt-5"
            style={{
              textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
            }}
          >
            <Col lg="4" className="text-center justify-content-center">
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                <i className="ni ni-circle-08 text-primary" />
              </div>
              <h5 className="text-white mt-3">
                Development and Implementation
              </h5>
              <p className="text-white mt-3">
                We design, provide, install, and support
              </p>
            </Col>
            <Col lg="4" className="text-center justify-content-center">
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                <i className="ni ni-settings text-primary" />
              </div>
              <h5 className="text-white mt-3">Maintenance</h5>
              <p className="text-white mt-3">
                Post-warranty Enterprise Multi-vendor Maintenance
              </p>
            </Col>
            <Col lg="4" className="text-center justify-content-center">
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                <i className="ni ni-ruler-pencil text-primary" />
              </div>
              <h5 className="text-white mt-3">Sizing</h5>
              <p className="text-white mt-3">
                IT solutions tailored to be the perfect fit for your business
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Parallax>
  );
};

export default HomePageIntro;
