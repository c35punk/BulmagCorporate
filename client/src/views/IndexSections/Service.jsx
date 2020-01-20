import React from "react";
import Modal from "./Modals";

import { Card, CardBody, Badge, Col } from "reactstrap";

class Service extends React.Component {
  render() {
    return (
      <Col lg="4">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <img
              src={this.props.service.image}
              alt=""
              style={{ width: "150px" }}
            />

            <h6 className="text-primary">{this.props.service.description}</h6>
            <div>
              <Badge
                color="info"
                pill
                className="mr-1"
              >
                {this.props.service.name}
              </Badge>
            </div>
            <Modal
              className="mt-3"
              color="dark"
              serviceUrl={this.props.service.serviceUrl}
              description={this.props.service.description}
            />
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default Service;
