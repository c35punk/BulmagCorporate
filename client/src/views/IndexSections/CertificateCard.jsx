import React from "react";
import Modal from "../../views/IndexSections/Modals";

import { Card, CardBody, Badge, Col, Row } from "reactstrap";

class CertificateCard extends React.Component {
  render() {
    let { name, certs } = this.props.person;

    return (
      <Col lg="12">
        <Card className="shadow border-0">
          <CardBody
            style={{
              border: "red 1px solid"
            }}
          >
            <Col lg="12">
              <div>
                <Badge
                  color="info"
                  pill
                  className="mr-4"
                  style={{ fontSize: "1.2em" }}
                >
                  <i className="ni ni-single-02 text-primary" />
                  {" " + name}
                </Badge>
              </div>
              <Row className="row-grid">
                {certs.map(certificate => {
                  return (
                    <>
                      <Row lg="3" style={{ display: "block" }}>
                        <Col>
                          <Badge>
                            <Modal
                              className="mt-3"
                              color="info"
                              certificateUrl={`https://bulmag.bg/cert/${certificate.certNumber}.pdf`}
                              description={certificate.description}
                            />
                          </Badge>
                        </Col>
                      </Row>
                    </>
                  );
                })}
              </Row>
            </Col>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default CertificateCard;
