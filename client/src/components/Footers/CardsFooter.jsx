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
            <Col>
              <a href="https://www.lenovo.com/us/en/data-center/storage/c/storage">
                <h6 className="text-primary"> Lenovo DCG </h6>
              </a>

              <a href="https://www.infinidat.com/products-technology/infinibox">
                <h6 className="text-primary"> INFINIDAT </h6>
              </a>

              <a href="https://tr-sys.com/home/">
                <h6 className="text-primary"> Tr-Sys </h6>
              </a>

              <a href="https://www.technogroup.com/">
                <h6 className="text-primary"> TechnoGroup </h6>
              </a>

              <a href="https://www.cisco.com/">
                <h6 className="text-primary"> CISCO </h6>
              </a>
            </Col>

            <Col>
              <a href="https://www.vmware.com/">
                <h6 className="text-primary"> VMware </h6>
              </a>

              <a href="https://www.microsoft.com/bg-bg/">
                <h6 className="text-primary"> Microsoft </h6>
              </a>

              <a href="https://www.redhat.com/en">
                <h6 className="text-primary"> Red Hat </h6>
              </a>

              <a href="https://www.vibbek.com/en/">
                <h6 className="text-primary"> Vibbek VCT </h6>
              </a>

              <a href="https://www.nutanix.com/en">
                <h6 className="text-primary"> Nutanix </h6>
              </a>
            </Col>
          </Row>

          <Row>
            <Col className="mb-5 mb-md-0" md="3">
              <Card className="card-lift--hover shadow border-0">
                <Link to="/products">
                  <CardImg
                    alt="..."
                    src="https://www.paymentcomponents.com/wp-content/uploads/2018/05/press3.png"
                  />
                </Link>
              </Card>
            </Col>
            <Col className="mb-5 mb-lg-0" md="3">
              <Card className="card-lift--hover shadow border-0">
                <Link to="/products">
                  <CardImg
                    alt="..."
                    src="https://www.lenovopartnernetwork.com/assets/Uploads/2e3f24153f/lenovo-default-social.jpg"
                  />
                </Link>
              </Card>
            </Col>
            <Col className="mb-5 mb-lg-2" md="3">
              <Card className="card-lift--hover shadow border-0">
                <Link to="/products">
                  <CardImg
                    alt="..."
                    src="https://i.ytimg.com/vi/Tygk0HnjG-o/maxresdefault.jpg"
                  />
                </Link>
              </Card>
            </Col>
            <Col className="mb-5 mb-lg-0" md="3">
              <Card className="card-lift--hover shadow border-0">
                <Link to="/products">
                  <CardImg
                    alt="..."
                    src="http://www.uzdaily.com/storage/img/Askar-foto/2-mfCd_q_iw.jpg"
                  />
                </Link>
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
