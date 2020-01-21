import React from "react";

import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";

const SupportBanner = () => {
  return (
    <section>
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-lg-2 ml-lg-auto" md="6">
            <div className="position-relative pl-md-5">
              <img
                alt="..."
                className="img-center img-fluid"
                src="https://ze-robot.com/dl/da/data-center-1600%C3%97900.jpg"
              />
            </div>
          </Col>
          <Col className="order-lg-1" lg="6">
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                      <i className="ni ni-satisfied" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h5 className="title text-success">High-end Products</h5>
                    <p>
                      Bulmag AD offer full range of Lenovo®, NetApp®,
                      INFINIDAT®, VMware®, RedHat®, Microsoft®, Cisco®,
                      TransactionSystems®, PAX®, and Datecs® products.
                    </p>
                    <Button className="text-warning" to="/products" tag={Link}>
                      Learn more
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                      <i className="ni ni-active-40" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h5 className="title text-warning">
                      Boost you business with our Services
                    </h5>
                    <p>
                      We are maintaining the tools and resources needed to
                      deliver our services more effectively yielding great
                      returns, more efficient work cycles, while achieving
                      positive impact at the end of the day.
                    </p>
                    <Button className="text-warning" to="/services" tag={Link}>
                      Learn more
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
    </section>
  );
};

export default SupportBanner;
