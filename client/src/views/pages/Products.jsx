import React from "react";
import axios from "axios";
import { dbConstants } from "../../constants/constants";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

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
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default"></div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">PRODUCTS</h1>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
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
                    System Integration Hardware
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
                  id="HCI"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-server" />
                  </span>
                  <span className="btn-inner--text">
                    Hyper-converged Infrastructure & Cloud
                  </span>
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
          </section>
        </main>
      </>
    );
  }
}

export default Products;
