import React from "react";

import { Card, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const ProfessionalServicesBanner = () => {
  return (
    <section className="section section-lg pt-0 footer">
      <Container>
        <Card className="bg-gradient-warning shadow-lg border-0">
          <div className="p-5">
            <Row className="align-items-center">
              <Col lg="8">
                <h3 className="text-white">
                  PROFESSIONAL SERVICES AND ENTERPRISE MAINTENANCE
                </h3>
                <p className="lead text-white mt-3">
               Find the right service for your business
                </p>
              </Col>
              <Col className="ml-lg-auto" lg="3">
                <Button
                  block
                  className="btn-white"
                  color="default"
                  to="/services"
                  tag={Link}
                  size="lg"
                >
                  LEARN MORE
                </Button>
              </Col>
            </Row>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default ProfessionalServicesBanner;
