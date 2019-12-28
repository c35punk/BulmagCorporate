import React from "react";
import { Link } from "react-router-dom";
import Modal from "./MachineModals";

import { Card, CardBody, Badge, Col } from "reactstrap";

class Machine extends React.Component {
  render() {
    console.log("Machine's this.props");
    console.log(this.props);

    let {
      manufacturer,
      machineName,
      productNumber,
      serialNumber,
      type,
      startDate,
      endDate
    } = this.props.machine;

    let { image } = this.props;

    return (
      <Col lg="4">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <div className="icon icon-shape icon-shape- rounded-circle mb-4"></div>
            <h5 className="text-primary">Vendor: {manufacturer}</h5>
            <img src={image} alt="" style={{ width: "150px" }} />
            <h6 className="text-primary">Machine: {machineName}</h6>
            <h6 className="text-primary">PN: {productNumber}</h6>
            <h6 className="text-primary">SN: {serialNumber}</h6>
            <div>
              <Badge color="primary" pill className="mr-1">
                <i className="ni ni-watch-time" />
                Starts: {startDate.substring(0, 10)}
              </Badge>
              <Badge color="primary" pill className="mr-1">
                <i className="ni ni-watch-time" />
                Ends: {endDate.substring(0, 10)}
              </Badge>
              <Badge color="primary" pill className="mr-1">
                <i className="ni ni-settings-gear-65" />
                Type: {type}
              </Badge>
            </div>
            <Modal
              className="mt-3"
              color="primary"
              tag={Link}
              machine={this.props.machine}
            />
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default Machine;
