import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modals";

import { Card, CardBody, Badge, Col } from "reactstrap";

class Machine extends React.Component {
  render() {
    return (
      <Col lg="4">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4"></div>
            <img
              src={this.props.machine.image}
              alt=""
              style={{ width: "150px" }}
            />

            <h6 className="text-primary">{this.props.machine.description}</h6>
            <div>
              <Badge color="primary" pill className="mr-1">
                <i className="ni ni-watch-time"/>
                {this.props.machine.name}
              </Badge>
            </div>
            <Modal
              className="mt-3"
              color="primary"
              to="/dashboard"
              tag={Link}
              machineUrl={this.props.machine.machineUrl}
              description={this.props.machine.description}
            />
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default Machine;
