import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/Navigation.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Download from "../IndexSections/Download.jsx";
import CardTemplate from "../IndexSections/CardExample";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">

                      <h1 className="display-3 text-white">
                        ABOUT US
                        <span>completed with examples</span>
                      </h1>
                      <p className="lead text-white">
                      <div class="static_text">
                            <h3>Creation</h3>
                            <br/>
                            Bulmag AD was founded in January 1991 as a Bulgarian-Hungarian Ltd (where from the
                            company’s
                            name: <span >BUL</span>garian <span
                                >MAG</span>yar). In 2003 the company was
                            reorganized
                            into a joint stock company (in Bulgarian - AD).
                            <p>The company business is a response to the strong demand
                                here
                                for higher quality and more reliable IT products.
                                Bulmag AD became one of IBM® Business Partners in the country in 1992 at the level
                                of
                                Solution Provider.</p>
                            <br/>
                            <h3>Main Activities</h3>
                            <br/>
                            <p>Bulmag AD is providing to clients IT System integration
                                elements in various combinations: Hardware &amp; Software Delivery, Professional
                                Services, Consultations Rendering, Training, Authorized Warranty (Lenovo Think,
                                NetApp,
                                Datecs, Pax) and Post-Warranty Service Provider,
                                Servicing and Maintenance, Specific Solutions Development, Design and
                                Implementation.</p>
                            <p><strong> <span
                                    ></span></strong></p>

                            <div>
                                <br/>
                                <h3>Our principles</h3>
                                <br/>
                                We do our best to deepen the partnership with leading IT vendors. Thus we like to
                                maintain a thoroughly knowledge of the most advanced IT and keep a sound position on
                                the
                                market.
                                <br/>
                                We aim at assisting to the success of our clients by selling to them high-tech
                                integrated system solutions. To do this we make on demand analysis, design,
                                integration,
                                optimization, support &amp; maintenance and further IT system enhancement and
                                development during the whole its life cycle. Our objective is to help clients gain
                                high
                                profitability, better quality of products offered and sold and services rendered as
                                well
                                as successful return on their investment.

                            </div>
                            <br/>
                            <p><strong> </strong></p>

                            <div>
                                <h3>History points</h3>
                                <div>
                                    <br/>
                                    <ul>1991 — Bulmag Ltd (in Bulgarian - OOD) Foundation</ul>
                                    <ul>1992 — IBM® Business Partner</ul>
                                    <ul>1996 — Certified IBM® Service</ul>
                                    <ul>1999 — IBM® Top Performer for Bulgaria</ul>
                                    <ul>2002 — ISO 9001:2000 Certification</ul>
                                    <ul>2003 — Bulmag AD (JSC)</ul>
                                    <ul>2006 — IBM® Premier Business Partner</ul>
                                    <ul>2007 — Lenovo® Premier Business Partner</ul>
                                    <ul>2015 — HPE® Business Partner</ul>
                                    <ul>2015 — SAP Labs® Business Partner</ul>
                                    <ul>2016 — Transaction Systems® Business Partner</ul>
                                    <ul>2019 — eBulmag® Online Shop</ul>

                                    &nbsp;

                                    <br/>
                                </div>
                            </div>
                            <div>
                                <h3>Main activities</h3>
                                <br/>
                                <ul>System integration, including:
                                    <li><em>Design of information systems;</em></li>
                                    <li><em>Delivery of hardware and software products;</em></li>
                                    <li><em>Professional and consultancy services;</em></li>
                                    <li><em>Training;</em></li>
                                    <li><em>Maintenance and support;</em></li>
                                    <li><em>Development and implementation of customer-specific solutions;</em></li>
                                    <li><em>Implementation of high availability and disaster recovery systems.</em>
                                    </li>
                                </ul>
                            </div>
                            <p><strong> </strong></p>

                            <div>
                                <br/>
                                <h3>Audited Reports &amp; Financials</h3>
                                <br/>
                            </div>
                            <p>Audited annual reports &amp; Financials are disclosed by
                                Bulmag AD in full each year in the Company Register to the Ministry of Justice.</p>
                            <br/>
                        </div>
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="http://www.bulmag.bg"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-bold-down" />
                          </span>
                          <span className="btn-inner--text">OFFICIAL WEBSITE</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.e-bulmag.bg"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-bag-17" />
                          </span>
                          <span className="btn-inner--text">
                            eBulmag Store
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
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
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <CardTemplate />
                    </Col>
                    <Col lg="4">
                      <CardTemplate />
                    </Col>
                    <Col lg="4">
                      <CardTemplate />
                    </Col>


                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Awesome features</h3>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Carefully crafted components
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Super friendly support team
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
