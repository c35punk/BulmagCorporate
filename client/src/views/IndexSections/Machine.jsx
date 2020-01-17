import React from "react";
import { Link } from "react-router-dom";
import Modal from "./MachineModals";
import ExpiredModal from "./MachineModalsExpired";
import { functions } from "../../constants/constants";

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

    let currentDate = new Date(endDate);

    let maintenanceChecker = functions.isDateBeforeToday(currentDate) ? (
      <Modal
        className="mt-3"
        color="dark"
        tag={Link}
        machine={this.props.machine}
      />
    ) : (
      <ExpiredModal
        className="mt-3"
        color="dark"
        tag={Link}
        machine={this.props.machine}
      />
    );

   
    console.log(functions.isDateBeforeToday(currentDate));

    let status = functions.isDateBeforeToday(currentDate) ? (
      <Badge color="success" pill className="mr-3">
        In Maintenance
      </Badge>
    ) : (
      <Badge color="primary" pill className="mr-3">
        Maintenance Expired
      </Badge>
    );

    console.log("Machine.JSX");
    console.log(this.props);

    return (
      <Col lg="4">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            {status}
            <h5 className="text-dark">
              Vendor: <strong>{manufacturer}</strong>
            </h5>
            <img src={image} alt="" style={{ width: "150px" }} />
            <h6 className="text-dark">Machine: {machineName}</h6>
            <h6 className="text-dark">PN: {productNumber}</h6>
            <h6 className="text-dark">SN: {serialNumber}</h6>
            <div>
              <Badge color="dark" pill className="mr-1">
                <i className="ni ni-watch-time" /> Starts:{" "}
                {startDate.substring(0, 10)}
              </Badge>
              <Badge color="dark" pill className="mr-1">
                <i className="ni ni-watch-time" /> Ends:{" "}
                {endDate.substring(0, 10)}
              </Badge>
              <Badge color="dark" pill className="mr-1">
                <i className="ni ni-settings-gear-65" /> Type: {type}
              </Badge>
            </div>
            {maintenanceChecker}
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default Machine;
