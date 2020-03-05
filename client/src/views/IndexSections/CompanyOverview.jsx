import React from "react";

import { Parallax } from "react-parallax";
import { isMobile } from "react-device-detect";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class CompanyOverview extends React.Component {
  render() {
    let strengthImage = isMobile ? 100 : 400;
    return (
      <>
        <Parallax
          blur={{ min: -5, max: 5 }}
          bgImage={require("../../assets/img/pics-vte5/nasa-Q1p7bh3SHj8-unsplash.jpg")}
          bgImageAlt="Bulmag DC"
          strength={strengthImage}
        >
          <div style={{ height: "250px" }} />

          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  <span className="text-danger">Company Overview</span>
                </h2>

                <div className="position-relative">
                  <div
                    className="row text-white"
                    style={{
                      textShadow:
                        "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
                    }}
                  >
                    <Col className="order-md-6" md="6">
                      <div className="display-3">
                        <p className="lead">
                          <h2>Enterprise Class Vendors and Solutions</h2>
                        </p>

                        <p>
                          Bulmag AD offer full range of Lenovo®, NetApp®,
                          INFINIDAT®, VMware®, RedHat®, Microsoft®, Cisco®,
                          TransactionSystems®, PAX®, and Datecs® products.
                        </p>
                      </div>
                    </Col>
                    <Col className="order-md-6" md="6">
                      <div className="display-3">
                        <p className="lead">
                          <h2>25+ Years Experience in System Integration</h2>
                        </p>

                        <p>
                          With more than 100+ successful projects, Bulmag AD is
                          surely your trusted companion on the path to digital
                          transformation.
                        </p>
                      </div>
                    </Col>
                    <Col className="order-md-6" md="6">
                      <div className="display-3">
                        <p className="lead">
                          <h2>Professional Excellence</h2>
                        </p>

                        <p>
                          We are maintaining the tools and resources needed to
                          deliver our services more effectively yielding great
                          returns, more efficient work cycles, while achieving
                          positive impact at the end of the day.
                        </p>
                      </div>
                    </Col>
                    <Col className="order-md-6" md="6">
                      <div className="display-3">
                        <p className="lead">
                          <h2>Customizable Cloud Offerings</h2>
                        </p>

                        <p>
                          Whether you choose our SaaS, PaaS, or IaaS service
                          it'll be tailored to meet virtually every IT need you
                          might have. Suitable for organizations who demand
                          better prices, better coverage, better performance,
                          and better service.
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Parallax>
      </>
    );
  }
}

export default CompanyOverview;
