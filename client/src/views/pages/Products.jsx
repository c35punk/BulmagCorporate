import React from "react";
import axios from "axios";
import { dbConstants } from "../../constants/constants";
import { isMobile } from "react-device-detect";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { Parallax } from "react-parallax";

// index page sections
import Product from "../IndexSections/Product";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get(dbConstants.productsUrl)
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <Parallax
              blur={{ min: -45, max: 45 }}
              bgImage={require("../../assets/img/pics-vte5/IMG_0857.jpg")}
              bgImageAlt="the dog"
              strength={isMobile ? 600 : 650}
            >
              {" "}
              <div className="shape shape-style-1 shape-default "></div>
              <section className="section section-md section-shaped mb--200">
                <Container className="py-lg-md d-flex">
                  <div className="col px-0 mb--200">
                    <Row>
                      <Col lg="6">
                        <h1 className="display-3 text-white">PRODUCTS</h1>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <div style={{ height: isMobile ? "70px" : "350px" }} />
              </section>
            </Parallax>
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Button
                  className="btn-icon mb-2 mb-lg-0"
                  color="primary"
                  id="HCI"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-server" />
                  </span>
                  <span className="btn-inner--text">HCI & Cloud</span>
                </Button>
                <Col lg="12">
                  <Row className="row-grid">
                    {this.state.products
                      .filter(x => x.type === "HCI")
                      .map(product => {
                        return (
                          <>
                            <Product product={product} />
                            <br />
                          </>
                        );
                      })}
                  </Row>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row className="justify-content-center">
                <Button
                  className="btn-icon mb-12 mb-lg-0"
                  color="primary"
                  id="HW"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-server" />
                  </span>
                  <span className="btn-inner--text">
                    Digital Transformation Hardware
                  </span>
                </Button>
                <Col lg="12">
                  <Row className="row-grid">
                    {this.state.products
                      .filter(x => x.type === "HW")
                      .map(product => {
                        return (
                          <>
                            <Product product={product} />
                            <br />
                          </>
                        );
                      })}
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="justify-content-center">
                <Button
                  className="btn-icon mb-2 mb-lg-0"
                  color="primary"
                  id="Banking"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-server" />
                  </span>
                  <span className="btn-inner--text">Banking Solutions</span>
                </Button>
                <Col lg="12">
                  <Row className="row-grid">
                    {this.state.products
                      .filter(x => x.type === "Banking")
                      .map(product => {
                        return (
                          <>
                            <Product product={product} />
                            <br />
                          </>
                        );
                      })}
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="justify-content-center">
                <Button
                  className="btn-icon mb-2 mb-lg-0"
                  color="primary"
                  id="Banking"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-server" />
                  </span>
                  <span className="btn-inner--text">
                    In-house developed products
                  </span>
                </Button>
                <Col lg="12">
                  <Row className="row-grid">
                    {this.state.products
                      .filter(x => x.type === "InHouse")
                      .map(product => {
                        return (
                          <>
                            <Product product={product} />
                            <br />
                          </>
                        );
                      })}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Products;
