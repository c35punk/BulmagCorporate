import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class CompanyOverview extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg ">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  <span className="text-danger">Company Overview</span>
                </h2>

                <div className="position-relative">
                  <div className="row">
                    <Col className="order-md-6" md="6">
                      <div className="c_box_item">
                        <p className="lead">
                          <h2>Enterprise Class Vendors and Solutions</h2>
                        </p>

                        <p>
                          Bulmag AD offer full range of Lenovo®, NetApp®,
                          INFINIDAT®, VMware®, RedHat®, Microsoft®, Cisco®,
                          TransactionSystems®, PAX®, and Datecs® products.
                        </p>
                      </div>
                    </Col>
                    <Col className="order-md-6" md="6">
                      <div className="c_box_item">
                        <p className="lead text-black">
                          <h2>25+ Years Experience in System Integration</h2>
                        </p>

                        <p>
                          With more than 100+ successful projects, Bulmag AD is
                          surely your trusted companion on the path to digital
                          transformation.
                        </p>
                      </div>
                    </Col>
                    <Col className="order-md-6" md="6">
                      <div className="c_box_item">
                        <p className="lead text-black">
                          <h2>
                            Continual Commitment to Professional Excellence
                          </h2>
                        </p>

                        <p>
                          We are maintaining the tools and resources needed to
                          deliver our services more effectively yielding great
                          returns, more efficient work cycles, while achieving
                          positive impact at the end of the day.
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default CompanyOverview;
