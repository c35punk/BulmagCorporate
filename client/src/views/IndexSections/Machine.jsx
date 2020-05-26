import React from "react";
import { Link } from "react-router-dom";
import Modal from "./MachineModals";
import ExpiredModal from "./MachineModalsExpired";
import { functions } from "../../constants/constants";

import { Card, CardBody, Badge, Col } from "reactstrap";
import Machine3DModal from "./Machine3DModal";

class Machine extends React.Component {
  render() {
    let {
      manufacturer,
      machineName,
      productNumber,
      serialNumber,
      type,
      startDate,
      endDate,
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

    let show3D =
      manufacturer === "Lenovo" && (type === "Server" || type === "Storage") ? (
        <Machine3DModal machine={this.props.machine} />
      ) : null;

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

    return (
      <Col lg="3">
        <Card className="card-lift--hover shadow">
          <CardBody className="py-4">
            {status}
            <h5 className="text-dark">
              <strong>{manufacturer}</strong>
            </h5>
            <img src={image} alt="" style={{ width: "150px" }} />
            <div className="text-dark">
              {machineName} {show3D}
              <br />
              PN: {productNumber}
              <br />
              SN: {serialNumber}
            </div>

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
