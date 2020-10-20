import React from "react";

import {
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

class Service extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
  render() {
    return (
      <>
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
                  active: this.state.plainTabs === 1,
                })}
                onClick={(e) => this.toggleNavs(e, "plainTabs", 1)}
                href="#"
                role="tab"
              >
                Main Activities
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
                  Training, Authorized Warranty (Lenovo Think, NetApp, Datecs,
                  Pax) and Post-Warranty Service Provider, Servicing and
                  Maintenance, Specific Solutions Development, Design and
                  Implementation.
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}
export default Service;
