import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Card,
  Container,
  Button,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default"></div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">SERVICES</h1>
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
                    points="560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Button
                  className="btn-icon mb-12 mb-lg-0"
                  color="primary"
                  id="Enterprise"
                >
                  <span className="btn-inner--text">
                    <strong>Enterprise Services</strong>
                  </span>
                </Button>
                <Row className="justify-content-center">
                  <Col className="mt-5 mt-lg-0" lg="12">
                    {/* Menu */}
                    <div className="nav-wrapper">
                      <Nav
                        className="nav-fill flex-column flex-md-row"
                        id="tabs-icons-text"
                        pills
                        role="tablist"
                      >
                        <NavItem>
                          <NavLink
                            aria-selected={this.state.plainTabs === 1}
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.state.plainTabs === 1
                            })}
                            onClick={e => this.toggleNavs(e, "plainTabs", 1)}
                            href="#"
                            role="tab"
                          >
                            <i className="fa fa-2x fa-superpowers">&nbsp;</i>
                            <p className="mt-5 mt-lg-2">
                              Post-Warranty Maintenance
                            </p>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-selected={this.state.plainTabs === 2}
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.state.plainTabs === 2
                            })}
                            onClick={e => this.toggleNavs(e, "plainTabs", 2)}
                            href="#"
                            role="tab"
                          >
                            <i className="fa fa-2x fa-server">&nbsp;</i>
                            <p className="mt-5 mt-lg-2">Service Center</p>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-selected={this.state.plainTabs === 3}
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.state.plainTabs === 3
                            })}
                            onClick={e => this.toggleNavs(e, "plainTabs", 3)}
                            href="#"
                            role="tab"
                          >
                            <i className="fa fa-2x fa-cloud">&nbsp;</i>
                            <p className="mt-5 mt-lg-2">Cloud Offerings</p>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-selected={this.state.plainTabs === 4}
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.state.plainTabs === 4
                            })}
                            onClick={e => this.toggleNavs(e, "plainTabs", 4)}
                            href="#"
                            role="tab"
                          >
                            <i className="fa fa-2x fa-arrow-circle-up">&nbsp;</i>
                            <p className="mt-5 mt-lg-2">Outsourcing</p>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-selected={this.state.plainTabs === 5}
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.state.plainTabs === 5
                            })}
                            onClick={e => this.toggleNavs(e, "plainTabs", 5)}
                            href="#"
                            role="tab"
                          >
                            Audited Reports &amp; Financials
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                    <Card className="shadow">
                      <CardBody>
                        <TabContent
                          activeTab={"plainTabs" + this.state.plainTabs}
                        >
                          <TabPane tabId="plainTabs1">
                            <p className="description header">
                              <div id="maintenance">
                                <h6 className="text-darker">
                                  Post Warranty Enterprise Multi-Vendor
                                  Maintenance
                                </h6>
                                <div class="table-single-cell">
                                  <p></p>
                                  <h6 className="text-darker">
                                    With a Bulmag AD maintenance contract, you
                                    protect yourself against unplanned
                                    additional costs for repairs, support and
                                    maintenance, which exceed your budget and
                                    can threaten the financing of projects
                                    relevant to security.
                                  </h6>
                                  <p></p>

                                  <h5 className="text-darker">
                                    From hardware maintenance and repairs to
                                    telephone support and system monitoring, you
                                    get everything you need for a smooth data
                                    centre. Thereby, your systems are
                                    excellently secured.
                                  </h5>
                                  <p></p>

                                  <div class="row row-table">
                                    <div className="col-md-4 column text-left">
                                      <h5 className="text-dark">
                                        <strong>Server</strong>
                                      </h5>
                                      <p>
                                        <span>
                                          The Bulmag AD maintenance contract for
                                          hardware combines proactive system
                                          maintenance using the Technogroup AG
                                          Remotetool and direct access to the
                                          expertise of the Technogroup AG
                                          knowledge database. This service is
                                          complemented by the Auto-Call-System
                                          RHS Baseline, which informs the Bulmag
                                          AD control centre about hardware
                                          failures of server units. Thereby,
                                          a&nbsp;Bulmag AD technician fixes the
                                          error with the right components before
                                          you even noticed the error yourself.
                                          Using our service, you profit from an
                                          exceptional system reliability that is
                                          necessary for smooth operations.
                                        </span>
                                      </p>
                                    </div>
                                    <div class="col-md-4 column text-left">
                                      <h5 className="text-dark">
                                        <strong>Storage</strong>
                                      </h5>
                                      <p>
                                        <span>
                                          When every minute counts, play safe
                                          with a Bulmag AD service contract for
                                          storage systems. The service
                                          specifically designed for business
                                          critical storage systems provides
                                          integrated support for your storage
                                          environment, the associated virtual
                                          storage manager and the application
                                          software. You can adjust the scope of
                                          the contract depending on your desired
                                          level of availability. Besides support
                                          for storage solutions in large and
                                          medium-sized companies, Bulmag AD
                                          offers services for SAN infrastructure
                                          of all the main manufacturers,
                                          especially in heterogeneous system
                                          environments – independent of
                                          manufacturers.
                                        </span>
                                      </p>
                                    </div>
                                    <div class="col-md-4 column text-left">
                                      <h5 className="text-dark">
                                        <strong>Network</strong>
                                      </h5>
                                      <p>
                                        <span>
                                          A flexible business requires a
                                          flexible IT. Your LAN, WAN or SAN
                                          infrastructure is crucial for the
                                          deployment of your existing
                                          applications, processes and services.
                                          Establish a higher service level while
                                          simultaneously allowing a more
                                          reliable, secure and dependable
                                          delivery of your data to the user.
                                        </span>
                                      </p>
                                      <p>
                                        <span>
                                          In the age of virtualisation, a
                                          dynamic administration of the network
                                          configuration is of vital importance.
                                          From SAN via LAN to the WAN
                                          infrastructure and despite of using
                                          small switches or powerful directors,
                                          Bulmag AD is your professional service
                                          provider for hardware maintenance.
                                          Besides Cisco, Brocade and Adva,
                                          Bulmag AD supports all major network
                                          products.
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <h5 className="text-dark">
                                      <strong>
                                        Hyper-converged infrastructure
                                      </strong>
                                    </h5>
                                    <p>
                                      Hyper-converged systems are playing an
                                      ever greater role in both public and
                                      private clouds.
                                    </p>
                                    <p>
                                      Bulmag AD provides the right service
                                      contracts for all-round protection
                                      especially for those components, covering
                                      almost all known enterprise brands used
                                      for computing, networking, and storage
                                    </p>
                                  </div>
                                  <div class="divider">
                                    <span></span>
                                  </div>
                                  <div>
                                    <h5 className="text-dark">
                                      <strong>Flexible SLAs</strong>
                                    </h5>
                                    <p class="lead-thin">
                                      The SLAs in Bulmag AD’s maintenance
                                      contracts can be selected individually by
                                      every company that requires a maximum of
                                      IT availability:
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </p>
                          </TabPane>
                          <TabPane tabId="plainTabs2">
                            <div id="service">
                              <h6 className="text-dark">Service Center</h6>
                              <div class="table-single-cell">
                                <p></p>
                                <h6 className="text-dark">
                                  We have more than 25 years of experience in
                                  supporting enterprise IT equipment. Over the
                                  years we have build motivated team of highly
                                  qualified and certified specialists, advanced
                                  repair facilities, and operational quality
                                  management system.
                                </h6>
                                <p></p>

                                <h5 className="text-dark">
                                  In pursue of complete customer satisfaction we
                                  continuously improve quality and broaden range
                                  of our services, improve qualification and
                                  skills of our staff, renovate and expand
                                  certification.
                                </h5>
                                <p></p>

                                <div class="row row-table">
                                  <div class="col-md-6 column text-left">
                                    <h5 className="text-dark">
                                      <strong>
                                        Authorized Warranty Service Provider
                                      </strong>
                                    </h5>
                                    <p>
                                      <span>
                                        We are authorized Lenovo®, NetApp®, and
                                        PAX® warranty and post-warranty service
                                        providers. We have rich experience in
                                        maintenance of high-end servers and
                                        storages, as well as laptops, and of
                                        retail ECR systems. Our specialists are
                                        certified to broad expertise in
                                        supporting fiscal solutions and Datecs
                                        fiscal printers.
                                      </span>
                                    </p>
                                  </div>
                                  <div class="col-md-6 column text-left">
                                    <h5 className="text-dark">
                                      <strong>SLAs</strong>
                                    </h5>
                                    <p>
                                      <span>
                                        <ul>
                                          <li>
                                            9x5: 9 hours per day, Monday to
                                            Friday, excluding public and
                                            national holidays
                                          </li>
                                          <li>
                                            11x5: 11 hours per day, Monday to
                                            Friday, excluding public and
                                            national holidays
                                          </li>
                                          <li>
                                            24x7: 24 hours a day, 7 days a week,
                                            365 days a year, which can be
                                            extended by response time - 2 hours,
                                            4 hours or the next working day
                                            (NBD), or time to correct the
                                            problem
                                          </li>
                                        </ul>
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <h5 className="text-dark">
                                    <strong>Carry-in & On-site</strong>
                                  </h5>
                                  <p>
                                    The maintenance services are performed at
                                    the customer premises or in the service
                                    center of Bulmag AD. All repairs are
                                    registered in database, so our customers can
                                    always be of the actions taken.Our team is
                                    at your service to help with any problem
                                    that may appear
                                  </p>
                                </div>
                              </div>
                            </div>
                          </TabPane>
                          <TabPane tabId="plainTabs3">
                            <p className="description">
                              <div id="cloud">
                                <h6 className="text-dark">Cloud Services</h6>
                                <div class="table-single-cell">
                                  <p></p>
                                  <h6 className="text-dark">
                                    Before the blooming of cloud computing, a
                                    business would build their IT infrastructure
                                    from scratch. Thanks to cloud computing
                                    offerings high entry barrier to the world of
                                    enterprise computing. With cloud computing,
                                    entrepreneurs can now consume enterprise
                                    computing services.
                                  </h6>
                                  <p></p>

                                  <h5 class="lead-thin">
                                    We offer Infrastructure as a Service,
                                    Platform as a Service, and Software as a
                                    Service
                                  </h5>
                                  <p></p>

                                  <div class="row row-table">
                                    <div class="col-md-4 column text-left">
                                      <h5 className="text-darker">
                                        <strong>IaaS</strong>
                                      </h5>
                                      <p className="text-dark">
                                        <span>
                                          We offer pre-configured hardware
                                          resources. Does not include
                                          applications or even an operating
                                          system (implementing all of that is
                                          left up to the customer). Optionally
                                          we can provide extra storage for
                                          corporate data backups, more network
                                          bandwidth, etc.
                                        </span>
                                      </p>
                                    </div>
                                    <div class="col-md-4 column text-left">
                                      <h5 className="text-darker">
                                        <strong>PaaS</strong>
                                      </h5>
                                      <p>
                                        <span>
                                          Our offering includes base operating
                                          system and a suite of applications and
                                          development tools. Bulmag AD's PaaS
                                          eliminates the need for organizations
                                          to build and maintain the
                                          infrastructure traditionally used to
                                          develop applications. Streamline your
                                          software development.
                                        </span>
                                      </p>
                                    </div>
                                    <div class="col-md-4 column text-left">
                                      <h5 className="text-darker">
                                        <strong>SaaS</strong>
                                      </h5>
                                      <p>
                                        <span>
                                          Bulmag AD offers web-based backup and
                                          restore subscription-based
                                          application, including embedded
                                          encryption, history, secure upload and
                                          download.{" "}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <p></p>
                                  <div>
                                    <h5>
                                      <strong>Customizable cloud</strong>
                                    </h5>
                                    <p>
                                      Whether you choose our SaaS, PaaS, or IaaS
                                      service it'll be tailored to meet
                                      virtually every IT need you might have.
                                      Suitable for organizations who demand
                                      better prices, better coverage, better
                                      performance, and better service.
                                    </p>
                                    <p></p>
                                  </div>
                                  <div class="divider">
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                            </p>
                          </TabPane>
                          <TabPane tabId="plainTabs4">
                            <p className="description"></p>
                          </TabPane>
                          <TabPane tabId="plainTabs5">
                            <p className="description">
                              Audited annual reports &amp; Financials are
                              disclosed by Bulmag AD in full each year in the
                              Company Register to the Ministry of Justice.
                            </p>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default TabsSection;
