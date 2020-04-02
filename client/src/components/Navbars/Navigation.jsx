import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import { UserConsumer } from "../../contexts/user-context";
import { isMobile } from "react-device-detect";
import Modal from "../../views/IndexSections/Modals";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.getElementById("mobileNav").className =
      "collapse hide navbar-collapse";
  }

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    let account;

    if (this.props.isLoggedIn && this.props.isAdmin) {
      account = (
        <>
          <DropdownItem to="/add-product" tag={Link} onClick={this.handleClick}>
            Add Product
          </DropdownItem>
          <DropdownItem
            to="/admin-dashboard"
            tag={Link}
            onClick={this.handleClick}
          >
            Admin Dashboard
          </DropdownItem>
          <DropdownItem to="/logout" tag={Link} onClick={this.handleClick}>
            Logout
          </DropdownItem>
        </>
      );
    } else if (this.props.isLoggedIn) {
      account = (
        <>
          <DropdownItem to="/profile" tag={Link} onClick={this.handleClick}>
            Profile
          </DropdownItem>
          <DropdownItem to="/dashboard" tag={Link} onClick={this.handleClick}>
            Dashboard
          </DropdownItem>
          <DropdownItem to="/logout" tag={Link} onClick={this.handleClick}>
            Logout
          </DropdownItem>
        </>
      );
    } else {
      account = (
        <>
          <DropdownItem to="/login" tag={Link} onClick={this.handleClick}>
            Login
          </DropdownItem>
          <DropdownItem to="/register" tag={Link} onClick={this.handleClick}>
            Register
          </DropdownItem>
        </>
      );
    }

    return (
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
          style={{ backgroundColor: "rgba(39, 39, 39, 0.56)" }}
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/img/brand/bulmag-react-white.png")}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              navbar
              toggler="#navbar_global"
              id="mobileNav"
            >
              <div className="navbar-collapse-header ">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/bulmag-react-white.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span
                      className="nav-link-inner--text"
                      style={{
                        textShadow: !isMobile
                          ? "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
                          : null
                      }}
                    >
                      Portfolio
                    </span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-xl bg-gradient-white">
                    <div className="dropdown-menu-inner">
                      <Media>
                        {isMobile ? null : (
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-briefcase-24" />
                          </div>
                        )}
                        <Media body className={!isMobile ? "ml-3" : "sm-4"}>
                          <Link to="/products">
                            <Button onClick={this.handleClick}>Products</Button>
                          </Link>
                          <p className="description d-none d-md-inline-block mb-0">
                            We offer high-end HW and SW solutions
                          </p>
                        </Media>
                      </Media>
                      <Media>
                        {!isMobile ? (
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-support-16" />
                          </div>
                        ) : null}
                        <Media body className={!isMobile ? "ml-3" : "sm-4"}>
                          <Link to="/services">
                            <Button onClick={this.handleClick}>Services</Button>
                          </Link>
                          <p className="description d-none d-md-inline-block mb-0">
                            Boost your business with our enterprise services
                          </p>
                        </Media>
                      </Media>
                      <Media>
                        {/* {isMobile ? null : (
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-briefcase-24" />
                          </div>
                        )} */}
                        <Media body className={!isMobile ? "ml-3" : "sm-4"}>
                          <Modal
                            lenovothreedtours={
                              "https://www.lenovofiles.com/3dtours/products/"
                            }
                            description="Lenovo Data Products Center 3D Tour"
                          />
                          <p className="description d-none d-md-inline-block mb-0">
                            VMware, Nutanix, and Microsoft Appliances<br />
                            DataCenter Building Blocks
                          </p>
                        </Media>
                      </Media>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-building d-lg-none mr-1" />
                    <span
                      className="nav-link-inner--text"
                      style={{
                        textShadow: !isMobile
                          ? "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
                          : null
                      }}
                    >
                      Company
                    </span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-xl bg-gradient-white">
                    <DropdownItem
                      to="/about"
                      tag={Link}
                      onClick={this.handleClick}
                    >
                      About us
                    </DropdownItem>
                    <DropdownItem
                      to="/projects"
                      tag={Link}
                      onClick={this.handleClick}
                    >
                      Projects
                    </DropdownItem>
                    <DropdownItem
                      to="/contacts"
                      tag={Link}
                      onClick={this.handleClick}
                    >
                      Contacts
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-badge d-lg-none mr-1" />
                    <span
                      className="nav-link-inner--text"
                      style={{
                        textShadow: !isMobile
                          ? "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
                          : null
                      }}
                    >
                      {this.props.isLoggedIn ? (
                        <>Hello, {this.props.username}!</>
                      ) : (
                        <>Bulmag Account</>
                      )}
                    </span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-xl bg-gradient-white">
                    {account}
                  </DropdownMenu>
                </UncontrolledDropdown>

                {/* {this.props.isLoggedIn ? greeting : false} */}
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.facebook.com/eBulmag/"
                    id="tooltip333589074"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Facebook
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip333589074">
                    Like us on Facebook
                  </UncontrolledTooltip>
                </NavItem>

                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://e-bulmag.bg/"
                    id="online-store"
                    target="_blank"
                  >
                    <i className="fa fa-shopping-cart" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Bulmag Online Shop
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="online-store">
                    Visit eBulmag online store
                  </UncontrolledTooltip>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

const NavContext = props => {
  return (
    <UserConsumer>
      {({ isLoggedIn, isAdmin, username, id }) => (
        <Navigation
          {...props}
          isAdmin={isAdmin}
          isLoggedIn={isLoggedIn}
          username={username}
          id={id}
        />
      )}
    </UserConsumer>
  );
};

export default NavContext;
