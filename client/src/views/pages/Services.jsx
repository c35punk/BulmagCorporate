import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { Parallax } from "react-parallax";
import { isMobile } from "react-device-detect";

// reactstrap components
import {
  Card,
  Container,
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
            <Parallax
              blur={{ min: -5, max: 5 }}
              bgImage={require("../../assets/img/pics-vte5/IMG_0870.jpg")}
              bgImageAlt="Cables"
              strength={isMobile ? 150 : 1000}
            >
              <div className="shape shape-style-1 shape-default "></div>
              <section className="section section-md section-shaped mb--200">
                <Container className="py-lg-md d-flex">
                  <div className="col px-0 mb--200">
                    <Row>
                      <Col lg="6">
                        <h1
                          className="display-3 text-white"
                          style={{
                            textShadow:
                              "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
                          }}
                        >
                          SERVICES
                        </h1>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <div style={{ height: isMobile ? "70px" : "350px"  }} />

                {/* SVG separator */}
                {/* <div className="separator separator-bottom separator-skew">
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
              </div> */}
              </section>
            </Parallax>
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
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
                          className={classnames("mb-sm-2 mb-md-0", {
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
                          className={classnames("mb-sm-2 mb-md-0", {
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
                          className={classnames("mb-sm-2 mb-md-0", {
                            active: this.state.plainTabs === 3
                          })}
                          onClick={e => this.toggleNavs(e, "plainTabs", 3)}
                          href="#"
                          role="tab"
                        >
                          <i className="fa fa-2x fa-black-tie">&nbsp;</i>
                          <p className="mt-5 mt-lg-2">Consulting Services</p>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.plainTabs === 4}
                          className={classnames("mb-sm-2 mb-md-0", {
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
                          className={classnames("mb-sm-2 mb-md-0", {
                            active: this.state.plainTabs === 5
                          })}
                          onClick={e => this.toggleNavs(e, "plainTabs", 5)}
                          href="#"
                          role="tab"
                        >
                          <i className="fa fa-2x fa-handshake-o">&nbsp;</i>
                          <p className="mt-5 mt-lg-2">Integration Services</p>
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
                                <h6 className="text-darker">
                                  With a Bulmag AD maintenance contract, you
                                  protect yourself against unplanned additional
                                  costs for repairs, support and maintenance,
                                  which exceed your budget and can threaten the
                                  financing of projects relevant to security.
                                </h6>

                                <h5 className="text-darker">
                                  From hardware maintenance and repairs to
                                  telephone support and system monitoring, you
                                  get everything you need for a smooth data
                                  centre. Thereby, your systems are excellently
                                  secured.
                                </h5>

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
                                        complemented by the Auto-Call-System RHS
                                        Baseline, which informs the Bulmag AD
                                        control centre about hardware failures
                                        of server units. Thereby, a&nbsp;Bulmag
                                        AD technician fixes the error with the
                                        right components before you even noticed
                                        the error yourself. Using our service,
                                        you profit from an exceptional system
                                        reliability that is necessary for smooth
                                        operations.
                                      </span>
                                    </p>
                                  </div>
                                  <div class="col-md-4 column text-left">
                                    <h5 className="text-dark">
                                      <strong>Storage</strong>
                                    </h5>
                                    <p>
                                      <span>
                                        When every minute counts, play safe with
                                        a Bulmag AD service contract for storage
                                        systems. The service specifically
                                        designed for business critical storage
                                        systems provides integrated support for
                                        your storage environment, the associated
                                        virtual storage manager and the
                                        application software. You can adjust the
                                        scope of the contract depending on your
                                        desired level of availability. Besides
                                        support for storage solutions in large
                                        and medium-sized companies, Bulmag AD
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
                                        A flexible business requires a flexible
                                        IT. Your LAN, WAN or SAN infrastructure
                                        is crucial for the deployment of your
                                        existing applications, processes and
                                        services. Establish a higher service
                                        level while simultaneously allowing a
                                        more reliable, secure and dependable
                                        delivery of your data to the user.
                                      </span>
                                    </p>
                                    <p>
                                      <span>
                                        In the age of virtualisation, a dynamic
                                        administration of the network
                                        configuration is of vital importance.
                                        From SAN via LAN to the WAN
                                        infrastructure and despite of using
                                        small switches or powerful directors,
                                        Bulmag AD is your professional service
                                        provider for hardware maintenance.
                                        Besides Cisco, Brocade and Adva, Bulmag
                                        AD supports all major network products.
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
                                    Hyper-converged systems are playing an ever
                                    greater role in both public and private
                                    clouds.
                                  </p>
                                  <p>
                                    Bulmag AD provides the right service
                                    contracts for all-round protection
                                    especially for those components, covering
                                    almost all known enterprise brands used for
                                    computing, networking, and storage
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
                                    every company that requires a maximum of IT
                                    availability:
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
                              <h6 className="text-dark">
                                We have more than 25 years of experience in
                                supporting enterprise IT equipment. Over the
                                years we have build motivated team of highly
                                qualified and certified specialists, advanced
                                repair facilities, and operational quality
                                management system.
                              </h6>

                              <h5 className="text-dark">
                                In pursue of complete customer satisfaction we
                                continuously improve quality and broaden range
                                of our services, improve qualification and
                                skills of our staff, renovate and expand
                                certification.
                              </h5>

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
                                      certified to broad expertise in supporting
                                      fiscal solutions and Datecs fiscal
                                      printers.
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
                                          Friday, excluding public and national
                                          holidays
                                        </li>
                                        <li>
                                          11x5: 11 hours per day, Monday to
                                          Friday, excluding public and national
                                          holidays
                                        </li>
                                        <li>
                                          24x7: 24 hours a day, 7 days a week,
                                          365 days a year, which can be extended
                                          by response time - 2 hours, 4 hours or
                                          the next working day (NBD), or time to
                                          correct the problem
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
                                  The maintenance services are performed at the
                                  customer premises or in the service center of
                                  Bulmag AD. All repairs are registered in
                                  database, so our customers can always be of
                                  the actions taken.Our team is at your service
                                  to help with any problem that may appear
                                </p>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId="plainTabs3">
                          <p className="description">
                            <div id="consultancy">
                              <h6 className="text-darker">
                                Consulting Services
                              </h6>
                              <div>
                                <h6 className="text-dark">
                                  Bulmag AD has successfully navigated the
                                  ever-evolving technology landscape, helping
                                  organizations in a variety of industries to
                                  remain competitive.
                                </h6>

                                <h5 className="text-dark">
                                  We have proven record in solving complex
                                  business challenges with technology,
                                  delivering smoother operations.
                                </h5>

                                <div class="row row-table">
                                  <div class="col-md-6 column text-left">
                                    <h5 className="text-dark">
                                      <strong>Digital Transformation</strong>
                                    </h5>
                                    <p>
                                      <span>
                                        With the right choice of
                                        business-supporting technologies, we
                                        help enterprises go beyond automating
                                        traditional methods and processes and
                                        explore new ways to boost business and
                                        even transform business models. We
                                        operate in various domains including
                                        healthcare, retail, banking, telecoms,
                                        manufacturing and more and carefully
                                        gather experience in delivering reliable
                                        IT solutions with the focus on industry
                                        specifics. We are ready to join your IT
                                        journey regardless of your digital
                                        maturity level and help choose most
                                        profitable technology innovations to
                                        leverage your business and improve the
                                        experience of your employees and
                                        customers.
                                      </span>
                                    </p>
                                  </div>
                                  <div class="col-md-6 column text-left">
                                    <h5 className="text-darker">
                                      <strong>IT Strategy</strong>
                                    </h5>
                                    <p>
                                      <span>
                                        With almost three decades in IT
                                        business, we know that it’s a daunting
                                        task to devise and implement a concise
                                        IT strategy aligned with business goals.
                                        We are happy to share our experience to
                                        support you in technology roadmapping
                                        and exploring most efficient ways to use
                                        available resources and technology
                                        trends. We can develop a new technology
                                        agenda or adjust the existing one to a
                                        changing business strategy, for example:
                                        geographical expansion new products and
                                        services mergers and acquisitions If you
                                        have little time for IT strategic
                                        planning, feel uncertain about new
                                        initiatives or are still in two minds
                                        about choosing most profitable
                                        directions of IT development, we are
                                        here to accompany you in IT strategy
                                        development and execution to help your
                                        business scale to a new level of market
                                        competitiveness and get the most from
                                        your investments.
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <h5 className="text-darker">
                                    <strong>
                                      Round the clock availability
                                    </strong>
                                  </h5>
                                  <p>
                                    Relying on the best HW and SW solutions in
                                    the business and backed by certified
                                    professionals with deep experience in
                                    enterprise maintenance.
                                  </p>
                                </div>

                                <div>
                                  <h5 className="text-darker">
                                    <strong>Flexible SLAs</strong>
                                  </h5>
                                  <p className="text-dark">
                                    The SLAs in Bulmag AD's outsourcing services
                                    are flexible in order to fit individually
                                    for your financial institution's way of
                                    work.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </p>
                        </TabPane>
                        <TabPane tabId="plainTabs4">
                          <p className="description">
                            <div id="out">
                              <h6 className="text-darker">
                                EFT-POS & ATM Outsourcing
                              </h6>
                              <div class="table-single-cell">
                                <h6 className="text-dark">
                                  Small-to-medium sized financial institutions
                                  POSs/ATMs do not generate economies of scale.
                                  Bulmag AD will operate your ATM/POS network
                                  via a team of experts, which creates
                                  operational efficiencies and cost savings for
                                  you.
                                </h6>

                                <h5 className="text-dark">
                                  We offer full outsourcing with all necessary
                                  SW and HW included for 3 years or 5 years.
                                </h5>

                                <div class="row row-table">
                                  <div class="col-md-6 column text-left">
                                    <h5 className="text-dark">
                                      <strong>POS Outsourcing</strong>
                                    </h5>
                                    <p>
                                      <span>
                                        Bulmag AD can offer your company a
                                        profitable solution of outsourcing your
                                        POS business partially or entirely.
                                        Backed by the best in class vendors and
                                        solutions you can end up with
                                        considerable cost savings. Doing so,
                                        your financial institution would throw
                                        more effort at its core business. Our
                                        POS outsourcing offering is backed by
                                        PAX Technology for POS terminals and
                                        UniPOS Pro TMS or Vibbek VCT for SW
                                        management of your POS fleet.
                                      </span>
                                    </p>
                                  </div>
                                  <div class="col-md-6 column text-left">
                                    <h5 className="text-darker">
                                      <strong>ATM Outsourcing</strong>
                                    </h5>
                                    <p>
                                      <span>
                                        Outsourcing ATM management to Bulmag AD
                                        not only saves time and money, it leaves
                                        you free to focus on running your
                                        business and keeping customers
                                        satisfied. With Bulmag AD as your one
                                        point of contact and accountability, you
                                        will never have to worry about your
                                        equipment being out of date or out of
                                        cash. Bulmag AD can result ATM operating
                                        savings of up to 30% eliminating capital
                                        costs associated with purchasing and
                                        maintaining ATM equipment. We offer
                                        sophisticated, top-of-the-line
                                        management SW provided by Auriga SpA
                                        combined with the most innovative ATM
                                        vendor - GRG Banking.
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <h5 className="text-darker">
                                    <strong>
                                      Round the clock availability
                                    </strong>
                                  </h5>
                                  <p>
                                    Relying on the best HW and SW solutions in
                                    the business and backed by certified
                                    professionals with deep experience in
                                    enterprise maintenance.
                                  </p>
                                </div>
                                <div class="divider">
                                  <span></span>
                                </div>
                                <div>
                                  <h5 className="text-darker">
                                    <strong>Flexible SLAs</strong>
                                  </h5>
                                  <p class="lead-thin">
                                    The SLAs in Bulmag AD's outsourcing services
                                    are flexible in order to fit individually
                                    for your financial institution's way of
                                    work.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </p>
                        </TabPane>
                        <TabPane tabId="plainTabs5">
                          <p className="description">
                            <div id="integration">
                              <h6 className="text-darker">
                                Integration Services
                              </h6>

                              <div>
                                <h6 className="text-dark">
                                  Modern business environment generates the need
                                  to use different IT solutions for different
                                  purposes to ensure effective work of an
                                  enterprise. In this respect, system
                                  integration is a vital point to consider,
                                  whether you are planning to add new
                                  functionality to the IT solutions already in
                                  use, or implement new software.
                                </h6>

                                <h5 className="text-dark">
                                  It’s essential that your employees need to
                                  collaborate to work effectively - the same is
                                  expected from the IT solutions you are using.
                                  With an integrated system made of synchronized
                                  components, you get an opportunity to increase
                                  business efficiency and reduce maintenance
                                  costs.
                                </h5>

                                <div class="row row-table">
                                  <div class="col-md-6 column text-left">
                                    <h5 className="text-darker">
                                      <strong>Managed Services</strong>
                                    </h5>
                                    <p>
                                      <span>
                                        In today’s turbulent economic climate,
                                        it’s all about performance and
                                        operational efficiencies. IT budgets are
                                        under increased pressure as companies
                                        try to deliver more with less amid
                                        greater complexity. In order to build
                                        greater IT impact on business,
                                        forward-thinking leaders are shifting IT
                                        operations away from tackling with
                                        software, hardware and personnel,
                                        towards meeting their business
                                        objectives. Our portfolio of managed
                                        services can help you get better
                                        performance and greater efficiency,
                                        reduce complexity and operating costs,
                                        minimize risks, improve availability and
                                        resiliency, while taking advantage of
                                        leading-edge skills, tools and best
                                        practices. By combining our managed
                                        services you can get the flexibility,
                                        personalized support and protection that
                                        fit your business. Hosted IT services:
                                        Have difficulties to provide suitable
                                        conditions for your IT equipment? We can
                                        host it in our datacenter, sharing our
                                        infrastructure and connectivity. You may
                                        choose whether your equipment to be
                                        hosted as a whole (e.g. datacenter) or
                                        in some part (i.e. mail or web servers,
                                        secondary DR site). We also can do for
                                        you some everyday tasks as
                                        backup/recovery, security, patch
                                        management, etc. Rent: We can offer
                                        rental of selected equipment in order to
                                        provide CFOs with more straightforward
                                        and predictable expenditure. Monitoring
                                        and Management Services: Our monitoring
                                        and management services can offload your
                                        IT infrastructure management
                                        responsibilities, while reducing costs
                                        and freeing up IT staff for strategic
                                        initiatives.
                                        <ul>
                                          Monitoring and Management Services
                                          Benefits:
                                          <li>
                                            <em>
                                              Access to highly skilled technical
                                              professionals with rich expertise
                                              and experience in technology;
                                            </em>
                                          </li>
                                          <li>
                                            <em>
                                              Guaranteed service levels designed
                                              to ensure business continuity;
                                            </em>
                                          </li>
                                          <li>
                                            <em>
                                              Proactive monitoring of hardware
                                              and software infrastructure on a
                                              24 x 7 basis to optimize
                                              utilization and performance;
                                            </em>
                                          </li>
                                          <li>
                                            <em>
                                              Preemptive protection from known
                                              and emerging security threats to
                                              reduce risk and improve regulatory
                                              compliance;
                                            </em>
                                          </li>
                                          <li>
                                            <em>
                                              Data backup service that enables
                                              recovery of system information in
                                              case of possible contingencies;
                                            </em>
                                          </li>
                                          <li>
                                            <em>
                                              Help desk provided on a 24x7 basis
                                              to assist customers, resolve
                                              problems, and to react to any
                                              alerts discovered by the
                                              monitoring infrastructure.
                                            </em>
                                          </li>
                                        </ul>
                                      </span>
                                    </p>
                                  </div>
                                  <div class="col-md-6 column text-left">
                                    <h5 className="text-darker">
                                      <strong>Specialties</strong>
                                    </h5>
                                    <p>
                                      <span>
                                        Analyzing customer business and
                                        technical requirements and needs,
                                        designing Power Systems solutions which
                                        include attached IBM System x and
                                        Systems Storage, and implementing the
                                        solution. Installing, integrating,
                                        implementing, and supporting the
                                        following: varieties of Power Systems
                                        solutions, based on IBM AIX, RedHat
                                        Enterprise Linux on Power, SUSE Linux
                                        Enterprise Server for Power and
                                        Canonical Ubuntu for POWER, AIX LPARs,
                                        Linux LPARs and VIOS on IBM Power
                                        Systems servers, PowerHA (HACMP), HA
                                        clusters. Training and preparing
                                        students, who are experienced AIX system
                                        administrators with TCP/IP networking
                                        and AIX Logical Volume Manager (LVM)
                                        experience who are responsible for the
                                        planning and installation of a PowerHA,
                                        to install and configure a highly
                                        available cluster using PowerHA
                                        SystemMirror. Supporting complex,
                                        partitioned POWER environments.
                                        Planning, installing, configuring and
                                        managing IBM's enterprise-class Power
                                        Systems servers. Analyzing the
                                        customer's needs, architect the
                                        solution, and plan the implementation
                                        with IBM System Storage DS8000, IBM XIV
                                        Storage System, IBM System Storage
                                        TS7700 Virtualization Engine and
                                        enterprise tape libraries, IBM System
                                        Storage ProtecTIER Gateways and
                                        Appliances, IBM Scale Out Network
                                        Attached Storage (SONAS), IBM System
                                        Storage SAN Volume Controller, and IBM
                                        enterprise SAN products. Designing,
                                        implementing, managing, monitoring and
                                        supporting SAN, LAN and WAN
                                        infrastructure. Planning and installing
                                        switch and chassis firmware upgrades.
                                        Managing VLANs and inter VLAN
                                        communication and routing. Designing and
                                        managing SAN zones, domains and
                                        configurations. Analyzing, designing,
                                        planning, installing and post
                                        installation support for Microsoft
                                        Windows Server, IBM AIX, RHEL, SLES,
                                        Ubuntu, Citrix XenServer, OpenBSD.{" "}
                                        <p>
                                          Apart from the above-mentioned
                                          IBM-centric services we feel
                                          comfortable working with all major
                                          vendors such as HPE, Dell, and Cisco
                                          (HW+SW), as well as VMware, RedHat,
                                          Microsoft (SW).
                                        </p>
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <h5 className="text-dark">
                                    <strong>Rich integration history</strong>
                                  </h5>
                                  <p>
                                    With more than 100+ successfully closed
                                    project we are your preferred system
                                    integrator.
                                  </p>
                                </div>
                                <div class="divider">
                                  <span></span>
                                </div>
                                <div>
                                  <h5 className="text-darker">
                                    <strong>
                                      We always tailor the right fit
                                    </strong>
                                  </h5>
                                  <p class="lead-thin">
                                    Analyzing the input information you provide
                                    we get to build the right solution for you.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </p>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default TabsSection;
