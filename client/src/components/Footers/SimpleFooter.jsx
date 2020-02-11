import React, { Component } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends Component {
  render() {
    return (
      <>
        <footer className="footer">
        <Container>
          <h3 className="text-primary">Partners</h3>
          <Row>
            <Col>
              <a href="https://www.lenovo.com/us/en/data-center">
                <h6 className="text-primary"> Lenovo DCG </h6>
              </a>

              <a href="https://www.infinidat.com/products-technology/infinibox">
                <h6 className="text-primary"> INFINIDAT </h6>
              </a>

              <a href="https://tr-sys.com/home/">
                <h6 className="text-primary"> Tr-Sys </h6>
              </a>

              <a href="https://www.openway.com/">
                <h6 className="text-primary"> OpenWay </h6>
              </a>
            </Col>
          </Row>

        </Container>
     
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  Thank you for choosing us!
                </h3>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  color="facebook"
                  href="https://www.facebook.com/eBulmag/"
                  id="tooltip837440414"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>

                <Button
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  color="github"
                  href="https://github.com/c35punk/BulmagCorporate"
                  id="tooltip495507257"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.linkedin.com/in/liubomir-djantov-a109759b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Design by ldj5
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink to="/contacts" tag={Link}>
                      Contacts
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/about" tag={Link}>
                      About Us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
