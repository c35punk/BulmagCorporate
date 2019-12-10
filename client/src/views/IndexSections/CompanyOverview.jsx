import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class CompanyOverview extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  <span className="text-success" color="default">
                    Company Overview
                  </span>
                </h2>

                <div className="c_feature_box product-title">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="c_box_item">
                        <a href="#">
                          <h4 color="primary">
                            Enterprise Class Vendors and Solutions
                          </h4>
                        </a>

                        <p>
                          Bulmag AD offer full range of Lenovo®, NetApp®,
                          INFINIDAT®, VMware®, RedHat®, Microsoft®, Cisco®,
                          TransactionSystems®, PAX®, and Datecs® products.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="c_box_item">
                        <a href="#">
                          <h4 color="primary">
                            25+ Years Experience in System Integration
                          </h4>
                        </a>

                        <p>
                          With more than 100+ successful projects, Bulmag AD is
                          surely your trusted companion on the path to digital
                          transformation.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="c_box_item">
                        <a href="#">
                          <h4 color="primary">
                            Continual Commitment to Professional Excellence
                          </h4>
                        </a>

                        <p>
                          We are maintaining the tools and resources needed to
                          deliver our services more effectively yielding great
                          returns, more efficient work cycles, while achieving
                          positive impact at the end of the day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-wrapper">
                  <Button
                    className="mb-3 mb-sm-0"
                    color="primary"
                    href="https://www.creative-tim.com/product/bulmag-design-system-react?ref=adsr-landing-page"
                  >
                    Download React
                  </Button>
                </div>
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Available on these technologies
                  </h4>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/vue-bulmag-design-system?ref=adsr-landing-page"
                        id="tooltip265846671"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846671">
                        Vue.js - The progressive javascript framework
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/bulmag-design-system-angular?ref=adsr-landing-page"
                        id="tooltip233150499"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip233150499">
                        Angular - One framework. Mobile & Desktop
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/bulmag-design-system-react?ref=adsr-landing-page"
                        id="tooltip308866163"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip308866163">
                        React - A JavaScript library for building user
                        interfaces
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/bulmag-design-system-react?ref=adsr-landing-page"
                        id="tooltip76119384"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip76119384">
                        Sketch - Digital design toolkit
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/bulmag-design-system-react?ref=adsr-landing-page"
                        id="tooltip646643508"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip646643508">
                        Adobe Photoshop - Software for digital images
                        manipulation
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default CompanyOverview;
