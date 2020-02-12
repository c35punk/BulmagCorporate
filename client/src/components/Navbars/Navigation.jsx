import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import { UserConsumer } from "../../contexts/user-context";

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
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    console.log("Hello from Navigation.jsx");
    console.log(this.props);
  }
  render() {
    let account;

    if (this.props.isLoggedIn && this.props.isAdmin) {
      account = (
        <>
          <DropdownItem to="/add-product" tag={Link}>
            Add Product
          </DropdownItem>
          <DropdownItem to="/admin-dashboard" tag={Link}>
            Admin Dashboard
          </DropdownItem>
          <DropdownItem to="/logout" tag={Link}>
            Logout
          </DropdownItem>
        </>
      );
    } else if (this.props.isLoggedIn) {
      account = (
        <>
          <DropdownItem to="/profile" tag={Link}>
            Profile
          </DropdownItem>
          <DropdownItem to="/dashboard" tag={Link}>
            Dashboard
          </DropdownItem>
          <DropdownItem to="/logout" tag={Link}>
            Logout
          </DropdownItem>
        </>
      );
    } else {
      account = (
        <>
          <DropdownItem to="/login" tag={Link}>
            Login
          </DropdownItem>
          <DropdownItem to="/register" tag={Link}>
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
            <UncontrolledCollapse navbar toggler="#navbar_global">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/bulmag-react.png")}
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
                        textShadow:
                          "-1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey"
                      }}
                    >
                      Portfolio
                    </span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-xl">
                    <div className="dropdown-menu-inner">
                      <Media>
                        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                          <i className="ni ni-briefcase-24" />
                        </div>
                        <Media body className="ml-3">
                          <Link to="/products">
                            <Button>Products</Button>
                          </Link>
                          <p className="description d-none d-md-inline-block mb-0">
                            We offer high-end HW and SW solutions
                          </p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-support-16" />
                        </div>
                        <Media body className="ml-3">
                          <Link to="/services">
                            <Button>Services</Button>
                          </Link>
                          <p className="description d-none d-md-inline-block mb-0">
                            Boost your business with our enterprise services
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
                        textShadow:
                          "-1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey"
                      }}
                    >
                      Company
                    </span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/about" tag={Link}>
                      About us
                    </DropdownItem>
                    <DropdownItem to="/projects" tag={Link}>
                      Projects
                    </DropdownItem>
                    <DropdownItem to="/contacts" tag={Link}>
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
                        textShadow:
                          "-1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey"
                      }}
                    >
                      {this.props.isLoggedIn ? (
                        <>Hello, {this.props.username}!</>
                      ) : (
                        <>Account</>
                      )}
                    </span>
                  </DropdownToggle>
                  <DropdownMenu>{account}</DropdownMenu>
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
                    href="https://github.com/c35punk/BulmagCorporate"
                    id="tooltip112445449"
                    target="_blank"
                  >
                    <i className="fa fa-github" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Github
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip112445449">
                    Star this project on Github
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem className="d-none d-lg-block lg-4">
                  <NavLink
                    className="nav-link-icon"
                    href="https://e-bulmag.bg/"
                    id="online-store"
                    target="_blank"
                  >
                    <i className="fa fa-shopping-cart" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      eBulmag
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
