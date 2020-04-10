import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import certsArr from "../../constants/certs";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  Container
} from "reactstrap";
import CertificateCard from "./CertificateCard";

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
        <Row className="justify-content-center text-darker">
          <Col className="mt-5 mt-lg-0" lg="6">
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
                    About Us
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
                    History Points
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
                    Customers
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
                    Certificates
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
                    Bank Accounts
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <p className="description">
                      <section id="about">
                        <Container>
                          <div>
                            <Row>
                              <div className="col-lg-9">
                                <h3 className="text-darker">Creation</h3>
                                Bulmag AD was founded in January 1991 as a
                                Bulgarian-Hungarian Ltd (where from the
                                company’s name: <span>BUL</span>
                                garian <span>MAG</span>
                                yar). In 2003 the company was reorganized into a
                                joint stock company (in Bulgarian - AD).
                                <p>
                                  The company business is a response to the
                                  strong demand here for higher quality and more
                                  reliable IT products. Bulmag AD became one of
                                  IBM® Business Partners in the country in 1992
                                  at the level of Solution Provider.
                                </p>
                                <h3 className="text-darker">Main Activities</h3>
                                <p>
                                  Bulmag AD is providing to clients IT System
                                  integration elements in various combinations:
                                  Hardware &amp; Software Delivery, Professional
                                  Services, Consultations Rendering, Training,
                                  Authorized Warranty (Lenovo Think, NetApp,
                                  Datecs, Pax) and Post-Warranty Service
                                  Provider, Servicing and Maintenance, Specific
                                  Solutions Development, Design and
                                  Implementation.
                                </p>
                                <div>
                                  <h3 className="text-darker">
                                    Our principles
                                  </h3>
                                  We do our best to deepen the partnership with
                                  leading IT vendors. Thus we like to maintain a
                                  thoroughly knowledge of the most advanced IT
                                  and keep a sound position on the market. We
                                  aim at assisting to the success of our clients
                                  by selling to them high-tech integrated system
                                  solutions. To do this we make on demand
                                  analysis, design, integration, optimization,
                                  support &amp; maintenance and further IT
                                  system enhancement and development during the
                                  whole its life cycle. Our objective is to help
                                  clients gain high profitability, better
                                  quality of products offered and sold and
                                  services rendered as well as successful return
                                  on their investment.
                                </div>{" "}
                                <div>
                                  <h3 className="text-darker">
                                    Main activities
                                  </h3>

                                  <ul className="text-dark">
                                    System integration, including:
                                    <li>
                                      <em>Design of information systems;</em>
                                    </li>
                                    <li>
                                      <em>
                                        Delivery of hardware and software
                                        products;
                                      </em>
                                    </li>
                                    <li>
                                      <em>
                                        Professional and consultancy services;
                                      </em>
                                    </li>
                                    <li>
                                      <em>Training;</em>
                                    </li>
                                    <li>
                                      <em>Maintenance and support;</em>
                                    </li>
                                    <li>
                                      <em>
                                        Development and implementation of
                                        customer-specific solutions;
                                      </em>
                                    </li>
                                    <li>
                                      <em>
                                        Implementation of high availability and
                                        disaster recovery systems.
                                      </em>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h3 className="text-darker">
                                    Audited Reports &amp; Financials
                                  </h3>
                                </div>
                                <p>
                                  Audited annual reports &amp; Financials are
                                  disclosed by Bulmag AD in full each year in
                                  the Company Register to the Ministry of
                                  Justice.
                                </p>
                              </div>
                            </Row>
                          </div>
                        </Container>
                      </section>
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                    <p className="description">
                      <section className="static_area" id="customers">
                        <div className="container">
                          <div className="static_inner">
                            <div className="row">
                              <div className="col-lg-9">
                                <div className="static_main_content">
                                  <div className="static_text">
                                    <div>
                                      <h3 className="text-darker">Customers</h3>
                                      <br />
                                      <h5 className="text-dark">
                                        <strong> Bulmag AD</strong> implemented
                                        solutions with numerous clients of which
                                        the following are worth mentioning:
                                      </h5>
                                    </div>
                                    <br />
                                    <p>
                                      <img
                                        src="../../assets/img/img/bulmag.bg/logo_RaiffeisenBank.jpg"
                                        alt="RAIFFEISENBANK EAD"
                                        width="150"
                                        height="50"
                                      />
                                      <strong>
                                        {" "}
                                        RAIFFEISENBANK (BULGARIA) EAD
                                      </strong>{" "}
                                      [
                                      <a
                                        href="http://www.rbb.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.rbb.bg
                                      </a>
                                      ] – Implementation of core banking
                                      infrastructure (corporate banking, retail
                                      banking); Implementation of computing
                                      environment for risk management and
                                      compliance system; Implementing of
                                      infrastructure for card center and SWIFT;
                                      Multi-center disaster recovery solution
                                      with IBM® Tivoli® Storage Manager; Server
                                      and storage consolidation and
                                      virtualization: Consultancy, professional,
                                      support and maintenance services;
                                      Delivery, installation, and setup of IBM®
                                      high-end and midrange POWER®/IBM® I and
                                      POWER®/AIX® servers, IBM® enterprise disk
                                      and tape storage systems and SAN
                                      infrastructure, IBM® workgroup and blade
                                      servers, system software; Delivery and
                                      implementation of IBM® Tivoli® (Spectrum)
                                      products.
                                    </p>
                                    <br />
                                    <p>
                                      <img
                                        alt="BORICA-BANKSERVICE JSC"
                                        src="../../assets/img/img/bulmag.bg/logo_BoricaBankservice.jpg"
                                        width="150"
                                        height="91"
                                      />
                                      <strong>BORICA-BANKSERVICE JSC</strong> [
                                      <a
                                        href="http://www.bobs.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.bobs.bg
                                      </a>
                                      ] (owned by the Central Bank and main
                                      commercial banks), the main Bulgarian
                                      operator of interbank and card payments
                                      systems, and other financial services—
                                      Implementation of infrastructure for
                                      BISERA interbank payments system in EUR
                                      and BGN and SEBRA budget payments system;
                                      Implementation of infrastructure for
                                      Express-M fast money transfer system;
                                      Implementation of infrastructure for B
                                      Trust electronic signature certification
                                      services and eFaktura.bg electronic
                                      invoice service; Feasibility study,
                                      project design and participation in
                                      implementation of Server and storage
                                      consolidation and virtualization;
                                      Feasibility study, project design and
                                      participation in implementation of
                                      multi-datacenter disaster recovery
                                      solution with IBM® Tivoli® Storage
                                      Manager; Feasibility study, project design
                                      and implementation of system monitoring
                                      based on IBM® Tivoli® Monitoring and TPC;
                                      Implementation of private cloud system;
                                      Implementation of video surveillance
                                      security solution in accordance to the
                                      requirements of Visa and MasterCard; Joint
                                      solutions: Hosting, outsourcing, lease of
                                      servers equipment; System monitoring;
                                      Disaster recovery; Private clouds and
                                      managed services – IaaS, PaaS, SaaS, etc.:
                                      Delivery, installation, and setup of IBM®
                                      high-end and midrange POWER/AIX servers,
                                      IBM® enterprise disk and tape storage
                                      systems and SAN infrastructure, ADVA DWDM,
                                      IBM® workgroup and blade servers, system
                                      software, middleware; Delivery and
                                      implementation of IBM® Tivoli® products;
                                      Consultancy, professional, support and
                                      maintenance services; Lease and managed
                                      services of servers and infrastructure.
                                    </p>
                                    <br />
                                    <p>
                                      <img src="../" alt="" />
                                      <img
                                        alt="UNITED BULGARIAN BANK AD"
                                        src="https://cdn.dribbble.com/users/798777/screenshots/3674860/ubb_sibank_dribbble.gif"
                                        width="150"
                                        height="70"
                                      />{" "}
                                      <strong> UNITED BULGARIAN BANK AD</strong>
                                      [
                                      <a
                                        href="http://www.ubb.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.ubb.bg
                                      </a>
                                      ]— Implementation of core banking
                                      infrastructure (business banking, card
                                      center); Feasibility study, project design
                                      and implementation of disaster recovery
                                      solution for the main banking processes
                                      (Joint project with BANKSERVICE JSC);
                                      Implementation of computing environment
                                      for SWIFT system for international
                                      payments; Implementation of infrastructure
                                      for ERP, based on SAP products; Computing
                                      environment for Competence Center; Data
                                      recovery solution for the Help Center of
                                      the bank; Expansion and renovation of
                                      branch network: Consultancy, professional,
                                      support and maintenance services;
                                      Delivery, installation, and setup of IBM®
                                      high-end and midrange POWER/AIX servers,
                                      IBM® enterprise disk and tape storage
                                      systems and SAN infrastructure, IBM®
                                      workgroup and blade servers, system
                                      software, workstations; Delivery and
                                      implementation of IBM® Tivoli® Storage
                                      Manager; Lease and managed services (IaaS)
                                      of servers and infrastructure.
                                    </p>
                                    <br />
                                    <p>
                                      <img
                                        alt="HVB BANK BIOCHIM"
                                        src="../../assets/img/bulmag.bg/logo_BiochimBank.jpg"
                                        width="150"
                                        height="37"
                                      />
                                      <strong> HVB BANK BIOCHIM</strong> —
                                      Implementation of core banking system;
                                      automation of banking processes: Delivery,
                                      installation and support of IBM® System z
                                      mainframes, Enterprise Storage Servers
                                      &amp; RAMAC, workgroup servers and
                                      workstations.
                                    </p>
                                    <br />
                                    <p>
                                      <img
                                        alt="Hebros Bank"
                                        src="../../assets/img/img/bulmag.bg/logo_HebrosBank.jpg"
                                        width="150"
                                        height="34"
                                      />
                                      <strong> HEBROS BANK</strong>– Core
                                      banking and Banking processes automation:
                                      Delivery, installation and support of IBM®
                                      midrange AIX servers, workgroup servers,
                                      workstations.
                                    </p>
                                    <br />
                                    <p>
                                      <img
                                        alt="FIRST INVESTMENT BANK AD"
                                        src="../../assets/img/img/bulmag.bg/logo_FirstInvestmentBank.jpg"
                                        width="150"
                                        height="43"
                                      />
                                      <strong> FIRST INVESTMENT BANK AD</strong>{" "}
                                      [
                                      <a
                                        href="http://www.fibank.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.fibank.bg
                                      </a>
                                      ] – Implementation of online banking
                                      infrastructure; Server consolidation:
                                      Delivery, installation and setup of IBM®
                                      midrange AIX servers and IBM® blades.
                                    </p>
                                    <br />
                                    <p>
                                      <img
                                        alt="D COMMERCE BANK AD"
                                        src="../../assets/img/img/bulmag.bg/logo_DBank.jpg"
                                        width="150"
                                        height="43"
                                      />
                                      <strong> D COMMERCE BANK AD</strong> [
                                      <a
                                        href="http://www.dbank.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.dbank.bg
                                      </a>
                                      ]– Server and storage virtualization; Data
                                      recovery solution; Branch network
                                      expansion: Delivery, installation, setup
                                      and maintenance and of IBM® blade servers,
                                      disk and tape storage, workstations,
                                      implementation of IBM® Tivoli® Storage
                                      Manager.
                                    </p>
                                    <br />
                                    <p>
                                      <img
                                        alt="UNICREDIT BULBANK AD"
                                        src="https://amcham.bg/wp-content/uploads/2017/02/unicredit-e1547457644805.png"
                                        width="180"
                                        height="60"
                                      />
                                      <strong> UNICREDIT BULBANK AD</strong> [
                                      <a
                                        href="http://www.unicreditbulbank.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.unicreditbulbank.bg
                                      </a>
                                      ] – Migration to new branch banking
                                      software in branch network (86 bank
                                      branches and offices): Delivery,
                                      installation and setup of IBM® workgroup
                                      servers, workstations, network and
                                      periphery, hands-on training of staff,
                                      hardware and software maintenance.
                                    </p>
                                    <br />
                                    <p>
                                      <img
                                        alt="CENTRAL COOPERATIVE BANK PLC."
                                        src="../../assets/img/img/bulmag.bg/logo_ccb.png"
                                        width="150"
                                        height="28"
                                      />
                                      <strong>
                                        {" "}
                                        CENTRAL COOPERATIVE BANK PLC
                                      </strong>
                                      . [
                                      <a
                                        href="http://www.ccbank.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.ccbank.bg
                                      </a>
                                      ] – Automation of banking processes:
                                      Delivery, installation and putting into
                                      operation of IBM® servers and system
                                      software, workstations.
                                    </p>
                                    <br />
                                    <p>
                                      <img
                                        alt="DSK BANK"
                                        src="../../assets/img/img/bulmag.bg/logo_DSKBank.jpg"
                                        width="150"
                                        height="32"
                                      />
                                      <strong> DSK BANK</strong> [
                                      <a
                                        href="http://www.dskbank.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.dskbank.bg
                                      </a>
                                      ] – Connectivity solution for disaster
                                      recovery: Delivery and installation of
                                      IBM® SAN infrastructure, Cisco CWDM
                                      Extended Distance Solution; ATM network
                                      expansion: Delivery and installation of
                                      IBM® ATMs.
                                    </p>
                                    <br />
                                    <p>
                                      <img
                                        alt="BNP PARIBAS S.A. BULGARIA"
                                        src="../../assets/img/img/bulmag.bg/logo_BNP_Paribas.jpg"
                                        width="150"
                                        height="34"
                                      />
                                      <strong>
                                        {" "}
                                        BNP PARIBAS S.A. BULGARIA
                                      </strong>{" "}
                                      [
                                      <a
                                        href="http://www.bnpparibas.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.bnpparibas.bg
                                      </a>
                                      ] – Implementation of core banking system
                                      infrastructure: Delivery, installation and
                                      putting into operation of IBM® AIX®
                                      servers and system software.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="VIVACOM"
                                          src="../../assets/img/img/bulmag.bg/logo_VIVIACOM.jpg"
                                          width="150"
                                          height="36"
                                        />
                                        VIVACOM
                                      </strong>
                                      [
                                      <a
                                        href="http://www.vivacom.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.vivacom.bg
                                      </a>
                                      ] – Automation of business processes, SAN
                                      infrastructure: Delivery, installation,
                                      maintenance and support of IBM® enterprise
                                      SAN switches, ADVA DWDM, IBM® workgroup
                                      servers, workstations.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="DANONE BULGARIA"
                                          src="../../assets/img/img/bulmag.bg/logo_Danone.gif"
                                          width="150"
                                          height="44"
                                        />
                                        DANONE BULGARIA
                                      </strong>{" "}
                                      [
                                      <a
                                        href="http://www.danone.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.danone.bg
                                      </a>
                                      ] — Automation of business processes:
                                      Delivery, installation, maintenance and
                                      support of IBM® workgroup servers, system
                                      software and middleware, workstations.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="COCA COLA HBC"
                                          src="../../assets/img/img/bulmag.bg/logo_CocaColaHbc.jpg"
                                          width="150"
                                          height="24"
                                        />
                                        COCA COLA HBC
                                      </strong>
                                      [
                                      <a
                                        href="http://en.coca-colahellenic.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        en.coca-colahellenic.bg
                                      </a>
                                      ] – L3 support of international Lotus
                                      Notes Infrastructure; Managed services –
                                      IaaS: Consultancy, professional, support
                                      and maintenance services; Managed services
                                      of servers and infrastructure.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="KAVEN ORBICO LTD"
                                          src="../../assets/img/img/bulmag.bg/logo_KavenOrbico.jpg"
                                          width="150"
                                          height="21"
                                        />
                                        KAVEN ORBICO LTD
                                      </strong>{" "}
                                      [
                                      <a
                                        href="http://www.kavenorbico.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.kavenorbico.bg
                                      </a>
                                      ]– Implementation of core business
                                      infrastructure; Server virtualization:
                                      Delivery, installation, and setup of IBM®
                                      POWER®/AIX® servers, IBM® disk and tape
                                      storage systems and SAN infrastructure,
                                      IBM® workgroup servers; Delivery and
                                      implementation of VMWare products.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="DEMAX AD"
                                          src="../../assets/img/img/bulmag.bg/logo_Demax.jpg"
                                          width="150"
                                          height="38"
                                        />
                                        DEMAX AD
                                      </strong>
                                      [
                                      <a
                                        href="http://www.demax.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.demax.bg
                                      </a>
                                      ]— Enablement of personalized printing
                                      services: Delivery, installation and
                                      maintenance of IBM® production printers,
                                      implementation of IBM® Infoprint Manager.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="NATIONAL ACADEMIC LIBRARY AND INFORMATION SYSTEM FOUNDATION"
                                          src="../../assets/img/img/bulmag.bg/logo_Nalis.jpg"
                                          width="150"
                                          height="34"
                                        />
                                        NATIONAL ACADEMIC LIBRARY AND
                                        INFORMATION SYSTEM FOUNDATION
                                      </strong>{" "}
                                      [
                                      <a
                                        href="http://www.nalis.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.nalis.bg
                                      </a>
                                      ] – Implementation of infrastructure for
                                      library information system; Data recovery
                                      solution: Delivery, installation, setup
                                      and maintenance and of IBM® blade servers,
                                      disk and tape storage, implementation of
                                      IBM® Tivoli® Storage Manager.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="KOZLODUY NPP PLC"
                                          src="../../assets/img/img/bulmag.bg/logo_KozloduyNPP.jpg"
                                          width="150"
                                          height="50"
                                        />
                                        KOZLODUY NPP PLC
                                      </strong>{" "}
                                      [
                                      <a
                                        href="http://www.kznpp.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.kznpp.org
                                      </a>
                                      ] – Server and storage virtualization;
                                      Data recovery solution: Delivery,
                                      installation, setup and maintenance and of
                                      IBM® workgroup and blade servers, disk and
                                      tape storage, workstations, implementation
                                      of IBM® Tivoli® Storage Manager.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="SOFIYSKA VODA AD"
                                          src="../../assets/img/img/bulmag.bg/logo_SofiyskaVoda.jpg"
                                          width="150"
                                          height="50"
                                        />
                                        SOFIYSKA VODA AD
                                      </strong>{" "}
                                      [
                                      <a
                                        href="http://www.sofiyskavoda.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.sofiyskavoda.bg
                                      </a>
                                      ] – Participation in the implementation of
                                      billing system: Professional, support and
                                      maintenance services; Delivery,
                                      installation, and setup of IBM® high-end
                                      POWER®/AIX® server, IBM® disk and tape
                                      storage systems and SAN infrastructure,
                                      IBM® workgroup servers, system software.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="BULGARTRANSGAZ EAD"
                                          src="../../assets/img/img/bulmag.bg/logo_BulgarTransGas.jpg"
                                          width="150"
                                          height="37"
                                        />
                                        BULGARTRANSGAZ EAD
                                      </strong>{" "}
                                      [
                                      <a
                                        href="http://www.bulgartransgaz.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.bulgartransgaz.bg
                                      </a>
                                      ] – Professional, support and maintenance
                                      services: Delivery, installation and
                                      configuration of IBM® AIX®/VIOS,
                                      reconfiguration of IBM® Lotus.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="NATSIONALNA ELEKTRICHESKA KOMPANIA EAD"
                                          src="../../assets/img/img/bulmag.bg/logo_NEK.jpg"
                                          width="150"
                                          height="35"
                                        />
                                        NATSIONALNA ELEKTRICHESKA KOMPANIA EAD
                                        (NEK EAD)
                                      </strong>{" "}
                                      [
                                      <a
                                        href="http://www.nek.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.nek.bg
                                      </a>
                                      ] – Automation of business processes:
                                      Delivery, installation, maintenance and
                                      support of IBM® workgroup servers,
                                      workstations.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="SUPREME ADMINISTRATIVE COURT"
                                          src="../../assets/img/img/bulmag.bg/logo_VAS.jpg"
                                          width="150"
                                          height="53"
                                        />
                                        SUPREME ADMINISTRATIVE COURT
                                      </strong>{" "}
                                      – [
                                      <a
                                        href="http://www.sac.government.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.sac.government.bg
                                      </a>
                                      ] — Data protection: Implementation of
                                      IBM® Tivoli® Storage Manager and IBM
                                      Tivoli® Data Protection for IBM® Lotus
                                      Notes.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="ING"
                                          src="../../assets/img/img/bulmag.bg/logo_ING.jpg"
                                          width="150"
                                          height="37"
                                        />
                                        ING PENSION INSURANCE
                                      </strong>
                                      [
                                      <a
                                        href="http://www.ing.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.ing.bg
                                      </a>
                                      ] – Automation of business processes:
                                      Delivery, installation, maintenance and
                                      support of IBM® workgroup servers, disk
                                      and tape storage.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="Dir.bg"
                                          src="../../assets/img/img/bulmag.bg/logo_Dirbg.jpg"
                                          width="150"
                                          height="41"
                                        />
                                        DIR.BG
                                      </strong>{" "}
                                      [
                                      <a
                                        href="http://www.dir.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.dir.bg
                                      </a>
                                      ] – Infrastructure for internet services:
                                      Delivery, installation, maintenance and
                                      support of IBM® servers, disk and tape
                                      storage, system software, implementation
                                      of IBM® Tivoli® Storage Manager.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="MINI MARITSA IZTOK EAD"
                                          src="../../assets/img/img/bulmag.bg/logo_MaricaIztok.jpg"
                                          width="150"
                                          height="45"
                                        />
                                        MINI MARITSA IZTOK EAD
                                      </strong>
                                      [
                                      <a
                                        href="http://www.marica-iztok.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.marica-iztok.com
                                      </a>
                                      ] – Implementation of infrastructure for
                                      ERP, based on SAP products: Professional,
                                      support and maintenance services;
                                      Delivery, installation, and setup of IBM®
                                      high-end servers, IBM® disk and tape
                                      storage systems and SAN infrastructure.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="METRO C &amp; C BULGARIA"
                                          src="../../assets/img/img/bulmag.bg/logo_Metro.jpg"
                                          width="150"
                                          height="42"
                                        />
                                        METRO C &amp; C BULGARIA
                                      </strong>{" "}
                                      [
                                      <a
                                        href="http://www.metro.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.metro.bg
                                      </a>
                                      ] — IT infrastructure reorganization;
                                      Server and storage consolidation and
                                      virtualization: Delivery, installation,
                                      maintenance and support of IBM® high end
                                      and workgroup servers, disk and tape
                                      storage, workstations, and POS terminals.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="PRAKTIKER BULGARIA"
                                          src="../../assets/img/bulmag.bg/logo_Praktiker.jpg"
                                          width="150"
                                          height="33"
                                        />
                                        PRAKTIKER BULGARIA
                                      </strong>{" "}
                                      [
                                      <a
                                        href="http://www.praktiker.bg/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        www.praktiker.bg
                                      </a>
                                      ] —Localization of IBM® Supermarket
                                      Application Software; Implementation of
                                      fiscal solution based on IBM® POS
                                      terminals: Consultancy, professional,
                                      support and maintenance services;
                                      Delivery, installation and setup of IBM®
                                      POS terminals, fiscal printers and
                                      controllers.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="BAUMAX BULGARIA"
                                          src="../../assets/img/img/bulmag.bg/logo_Baumax.jpg"
                                          width="150"
                                          height="39"
                                        />
                                        BAUMAX BULGARIA
                                      </strong>{" "}
                                      [www.baumax.bg] — Participation as a
                                      consultant in development, localization
                                      and implementation of software solution
                                      for Fiscal Cash Terminal LANs:
                                      Consultancy, professional, support and
                                      maintenance services; Delivery,
                                      installation and setup of IBM® POS
                                      terminals, fiscal printers and
                                      controllers.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="CARREFOUR BULGARIA"
                                          src="../../assets/img/img/bulmag.bg/logo_Carrefour.jpg"
                                          width="150"
                                          height="29"
                                        />
                                        CARREFOUR BULGARIA
                                      </strong>{" "}
                                      [www.carrefour.bg] – Implementation of
                                      core business infrastructure; Disaster
                                      recovery solution: Professional, support
                                      and maintenance services; Delivery,
                                      installation, and setup of IBM®
                                      POWER®/IBM® I servers, disk storage,
                                      system software; Implementation of MIMIX.
                                    </p>
                                    <br />
                                    <p>
                                      <strong>
                                        {" "}
                                        <img
                                          alt="MERCATOR-B"
                                          src="../../assets/img/img/bulmag.bg/logo_Mercator.jpg"
                                          width="150"
                                          height="45"
                                        />
                                        MERCATOR-B
                                      </strong>
                                      [www.mercator.bg] – Participation in
                                      implementation of fiscal POS system:
                                      Consultancy, professional, support and
                                      maintenance services, hands-on training of
                                      staff.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs3">
                    <p className="description">
                      <ul>
                        <h5 className="text-darker">
                          1991 — Bulmag Ltd (in Bulgarian - OOD) Foundation
                        </h5>
                      </ul>
                      <ul>
                        <h5 className="text-darker">
                          {" "}
                          1992 — IBM® Business Partner
                        </h5>
                      </ul>
                      <ul>
                        <h5 className="text-darker">
                          1996 — Certified IBM® Service
                        </h5>
                      </ul>
                      <ul>
                        <h5 className="text-darker">
                          {" "}
                          1999 — IBM® Top Performer for Bulgaria
                        </h5>
                      </ul>
                      <ul>
                        <h5 className="text-darker">
                          {" "}
                          2002 — ISO 9001:2000 Certification
                        </h5>
                      </ul>
                      <ul>
                        <h5 className="text-darker">2003 — Bulmag AD (JSC)</h5>
                      </ul>
                      <ul>
                        <h5 className="text-darker">
                          2006 — IBM® Premier Business Partner
                        </h5>
                      </ul>
                      <ul>
                        <h5 className="text-darker">
                          2007 — Lenovo® Premier Business Partner
                        </h5>
                      </ul>
                      <ul>
                        <h5 className="text-darker">
                          2015 — HPE® Business Partner
                        </h5>
                      </ul>
                      <ul>
                        <h5 className="text-darker">
                          {" "}
                          2015 — SAP Labs® Business Partner
                        </h5>
                      </ul>
                      <ul>
                        <h5 className="text-darker">
                          2016 — Transaction Systems® Business Partner
                        </h5>
                      </ul>

                      <ul className="text-dark">
                        <h5 className="text-darker">
                          2019 — eBulmag® Online Shop
                        </h5>
                      </ul>
                      <ul className="text-dark">
                        <h5 className="text-darker">
                          2020 — Authorised INFINIDAT Service Center
                        </h5>
                      </ul>
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs4">
                    <p className="description">
                      <Col lg="12">
                        <Row className="row-grid">
                          {certsArr
                            .sort(function(a, b) {
                              return a.name
                                .toLowerCase()
                                .localeCompare(b.name.toLowerCase());
                            })
                            .map(person => {
                              return (
                                <>
                                  <CertificateCard person={person} />
                                  <br />
                                </>
                              );
                            })}
                        </Row>
                      </Col>
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs5">
                    <p className="description">
                      <div className="static_text">
                        <h3 className="text-primary">UniCredit Bulbank AD</h3>
                        <table className="bordered">
                          <thead>
                            <tr>
                              <th width="80">CURRENCY</th>
                              <th width="90">SWIFT/BIC</th>
                              <th width="90">BAE</th>
                              <th>IBAN</th>
                            </tr>
                          </thead>
                          <tr>
                            <td>BGN</td>
                            <td>UNCRBGSF</td>
                            <td>UNCR7630</td>
                            <td>BG10 UNCR 7630 1007 6022 07</td>
                          </tr>
                          <tr>
                            <td>USD</td>
                            <td>UNCRBGSF</td>
                            <td>UNCR7630</td>
                            <td>BG34 UNCR 7630 1175 6999 62</td>
                          </tr>
                          <tr>
                            <td>EUR</td>
                            <td>UNCRBGSF</td>
                            <td>UNCR7630</td>
                            <td>BG92 UNCR 7000 1500 6762 96</td>
                          </tr>
                        </table>

                        <h3 className="text-primary">
                          RaiffeisenBank (Bulgaria) EAD
                        </h3>
                        <table className="bordered">
                          <thead>
                            <tr>
                              <th width="80">CURRENCY</th>
                              <th width="90">SWIFT BIC</th>
                              <th width="90">BAE</th>
                              <th>IBAN</th>
                            </tr>
                          </thead>
                          <tr>
                            <td>BGN</td>
                            <td>RZBBBGSF</td>
                            <td>RZBB9155</td>
                            <td>BG42 RZBB 9155 1060 1801 19</td>
                          </tr>
                          <tr>
                            <td>USD</td>
                            <td>RZBBBGSF</td>
                            <td>RZBB9155</td>
                            <td>BG81 RZBB 9155 1160 1801 12</td>
                          </tr>
                          <tr>
                            <td>EUR</td>
                            <td>RZBBBGSF</td>
                            <td>RZBB9155</td>
                            <td>BG30 RZBB 9155 1460 1801 08</td>
                          </tr>
                        </table>
                      </div>
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default TabsSection;
