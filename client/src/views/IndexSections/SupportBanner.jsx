import React from "react";

import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

const SupportBanner = () => {
  let imageShow = !isMobile ? (
    <Col className="order-lg-2 ml-lg-auto" md="6">
      <div className="position-relative pl-md-5">
        <img
          alt="..."
          className="img-center img-fluid"
          src={require("../../assets/img/pics-vte5/kisspng-data-center-structured-cabling-information-system-5b58c0372956a0-removebg-preview.png")}
        />
      </div>
    </Col>
  ) : null;

  return (
    <section>
      <Container>
        <Row className="row-grid align-items-center">
          {imageShow}
          <Col className="order-lg-1" lg="6">
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                      <i className="ni ni-satisfied" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h5 className="title text-primary">High-end Products</h5>
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
