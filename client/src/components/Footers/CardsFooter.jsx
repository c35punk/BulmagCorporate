import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <Container>
          <h3 className="text-primary">Partners</h3>

          <Row>
            <Col className="mb-5 mb-md-0" md="3">
              <Card className="card-lift--hover shadow border-0">
                <a href="https://tr-sys.com/home/">
                  <CardImg
                    alt="..."
                    src="https://www.paymentcomponents.com/wp-content/uploads/2018/05/press3.png"
                  />
                </a>
              </Card>
            </Col>
            <Col className="mb-5 mb-lg-0" md="3">
              <Card className="card-lift--hover shadow border-0">
                <a href="https://www.lenovo.com/us/en/data-center">
                  <CardImg
                    alt="..."
                    src="https://www.elsetge.cat/myimg/f/114-1145719_center-for-international-maritime-security-lord-of-the.png"
                  />
                </a>
              </Card>
            </Col>
            <Col className="mb-5 mb-lg-2" md="3">
              <Card className="card-lift--hover shadow border-0">
                <a href="https://www.infinidat.com/products-technology/infinibox">
                  <CardImg
                    alt="..."
                    src="https://i.ytimg.com/vi/Tygk0HnjG-o/maxresdefault.jpg"
                  />
                </a>
              </Card>
            </Col>
            <Col className="mb-5 mb-lg-0" md="3">
              <Card className="card-lift--hover shadow border-0">
                <a href="https://www.openway.com/">
                  <CardImg
                    alt="..."
                    src="http://www.uzdaily.com/storage/img/Askar-foto/2-mfCd_q_iw.jpg"
                  />
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="row-grid align-items-center my-md">
            <Col lg="6">
              <h3 className="text-primary font-weight-light mb-2">
                Thank you for choosing us!
              </h3>
              <h6 className="mb-0 font-weight-light">
                Contact us and boost your business
              </h6>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-neutral btn-icon-only btn-round ml-1"
                color="facebook"
                href="https://www.facebook.com/eBulmag/"
                id="tooltip837440414"
                size="lg"
                target="_blank"
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
      </>
    );
  }
}

export default CardsFooter;
