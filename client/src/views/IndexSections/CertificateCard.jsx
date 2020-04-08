import React from "react";
import Modal from "../../views/IndexSections/Modals";

import { Card, CardBody, Badge, Col, Row } from "reactstrap";

class CertificateCard extends React.Component {
  render() {
    let { name, certs } = this.props.person;

    return (
      <Col lg="6">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <Col lg="12">
              <Row className="row-grid">
                {certs.map(person => {
                  return (
                    <>
                      <h2 lg="6">{person.name}</h2>
                      <img
                        src="https://i7.pngguru.com/preview/510/904/930/pdf-adobe-acrobat-computer-icons-pdf-icon.jpg"
                        alt=""
                        styles={{
                          width: "90px",
                          height: "105px",
                          objectFit: "scale-down"
                        }}
                      />
                      <br />
                      {/* {person.certs.forEach(certificate => {
                        <Modal
                          className="mt-3"
                          color="info"
                          productUrl={`https://bulmag.bg/cert/${certificate.certNumber}.pdf`}
                          description={certificate.description}
                        />;
                      })} */ console.log(
                        person.certs
                      )}
                      }
                    </>
                  );
                })}
              </Row>
            </Col>
            <div>
              <Badge color="info" pill className="mr-1">
                {name}
              </Badge>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default CertificateCard;
