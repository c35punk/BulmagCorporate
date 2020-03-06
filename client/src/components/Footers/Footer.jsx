import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardImg,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

class CardsFooter extends React.Component {
  render() {
    let partners = isMobile ? (
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
    ) : (
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
                  src="https://www.lenovopartnernetwork.com/assets/Uploads/2e3f24153f/lenovo-default-social.jpg"
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
    );

    return (
      <>
        <Container>
          <Row className="row-grid align-items-center my-md">
            {partners}
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
                href="https://www.e-bulmag.bg"
                id="tooltip495507257"
                size="lg"
                target="_blank"
              >
                <i className="fa fa-shopping-cart" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip495507257">
                Visit our eShop
              </UncontrolledTooltip>
            </Col>
          </Row>
          <hr />
          <Row className="align-items-center justify-content-md-start">
            <Col md="6">
              <div className="copyright">
                © {new Date().getFullYear()} Design by Bulmag AD
              </div>
              <br />
            </Col>
            <Col md="6">
              <div className="copyright">
                <Button tag={Link} to="/privacy-policy">
                  Privacy Policy
                </Button>
                <Button tag={Link} to="/disclaimer">
                  Disclaimer
                </Button>
              </div>
              <br />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default CardsFooter;
