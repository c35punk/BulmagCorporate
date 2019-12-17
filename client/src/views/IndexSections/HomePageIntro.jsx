import React from "react";

import { Container, Row, Col } from "reactstrap";

const HomePageIntro = props => {
  return (
    <section className="section section-lg bg-gradient-default">
      <Container className="pt-lg pb-300">
        <Row className="text-center justify-content-center">
          <Col lg="10">
            <h2 className="display-3 text-white">Professional Service</h2>
          </Col>
        </Row>
        <Row className="row-grid mt-5">
          <Col lg="4">
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i className="ni ni-circle-08 text-primary" />
            </div>
            <h5 className="text-white mt-3">Development and Implementation</h5>
            <p className="text-white mt-3">
              We design, provide, install, and support
            </p>
          </Col>
          <Col lg="4">
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i className="ni ni-settings text-primary" />
            </div>
            <h5 className="text-white mt-3">Maintenance</h5>
            <p className="text-white mt-3">
              Post-warranty Enterprise Multi-vendor Maintenance
            </p>
          </Col>
          <Col lg="4">
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
      {/* SVG separator */}
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="fill-white" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
  );
};

export default HomePageIntro;
