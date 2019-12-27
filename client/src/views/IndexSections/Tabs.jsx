import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

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
        <Row className="justify-content-center">
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
                    Main Activities
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
                    Our principles
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
                    History points
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
                    Audited Reports &amp; Financials
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <p className="description">
                      Bulmag AD is providing to clients IT System integration
                      elements in various combinations: Hardware &amp; Software
                      Delivery, Professional Services, Consultations Rendering,
                      Training, Authorized Warranty (Lenovo Think, NetApp,
                      Datecs, Pax) and Post-Warranty Service Provider, Servicing
                      and Maintenance, Specific Solutions Development, Design
                      and Implementation.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                    <p className="description">
                      We do our best to deepen the partnership with leading IT
                      vendors. Thus we like to maintain a thoroughly knowledge
                      of the most advanced IT and keep a sound position on the
                      market.
                      <br />
                      We aim at assisting to the success of our clients by
                      selling to them high-tech integrated system solutions. To
                      do this we make on demand analysis, design, integration,
                      optimization, support &amp; maintenance and further IT
                      system enhancement and development during the whole its
                      life cycle. Our objective is to help clients gain high
                      profitability, better quality of products offered and sold
                      and services rendered as well as successful return on
                      their investment.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs3">
                    <p className="description">
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
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs4">
                    <p className="description">
                      <ul>
                        System integration, including:
                        <li>
                          <em>Design of information systems;</em>
                        </li>
                        <li>
                          <em>Delivery of hardware and software products;</em>
                        </li>
                        <li>
                          <em>Professional and consultancy services;</em>
                        </li>
                        <li>
                          <em>Training;</em>
                        </li>
                        <li>
                          <em>Maintenance and support;</em>
                        </li>
                        <li>
                          <em>
                            Development and implementation of customer-specific
                            solutions;
                          </em>
                        </li>
                        <li>
                          <em>
                            Implementation of high availability and disaster
                            recovery systems.
                          </em>
                        </li>
                      </ul>
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs5">
                    <p className="description">
                      Audited annual reports &amp; Financials are disclosed by
                      Bulmag AD in full each year in the Company Register to the
                      Ministry of Justice.
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
