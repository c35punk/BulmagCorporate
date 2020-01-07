import React from "react";

import axios from "axios";
import { dbConstants } from "../../constants/constants";
// reactstrap components
import {
  Button,
  Card,
  Badge,
  CardBody,
  FormGroup,
  Form,
  Row,
  Modal,
  Col
} from "reactstrap";

class MachineModals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myMachines: [],
      numberOfTickets: Number
    };
  }

  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  componentDidMount() {
    this.state.myMachines.forEach(machine => {
      this.setState({
        numberOfTickets: this.state.numberOfTickets + machine.tickets.length,
        myMachines: this.props.machines
      });
    });

    console.log(this.state.machine);
  }

  render() {
    console.log("Hello from Tickets Modal");
    console.log(this.props);
    console.log(this.state);

    return (
      <>
        <Button
          className="btn-icon mb-3 mb-sm-0"
          color="info"
          type="button"
          onClick={() => this.toggleModal("notificationModal")}
        >
          <span className="btn-inner--icon mr-1">
            <i className="fa fa-wrench" />
          </span>{" "}
          SERVICES TICKETS
        </Button>
        <Modal
          className="modal-dialog-centered modal-primary modal-lg"
          contentClassName="bg-gradient-default"
          isOpen={this.state.notificationModal}
          toggle={() => this.toggleModal("notificationModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification">
              You currently have {this.state.numberOfTickets} open{" "}
              {this.state.numberOfTickets === 1 ? "ticket" : "tickets"}
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("notificationModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <Badge color="default" pill>
                    {/* <Badge color="dark" className="mr-1">
                      <h5 className="text-dark">
                        Vendor: <strong>{manufacturer}</strong>
                      </h5>
                    </Badge>

                    <Badge color="dark" className="mr-1">
                      <h6 className="text-dark">Machine: {machineName}</h6>
                    </Badge>
                    <Badge color="dark" className="mr-1">
                      <h6 className="text-dark">PN: {productNumber}</h6>
                    </Badge>
                    <Badge color="dark" className="mr-1">
                      <h6 className="text-dark">SN: {serialNumber}</h6>
                    </Badge> */}
                  </Badge>
                  <CardBody className="px-lg-6 py-lg-5">
                    <Form role="form">
                      <FormGroup>
                        <table
                          id="mytable"
                          class="table table-bordered exportable"
                        >
                          <thead>
                            <tr>
                              <th>Ticket Date</th>
                              <th>Lastname</th>
                              <th>Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>John</td>
                              <td>Doe</td>
                              <td>john@example.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </FormGroup>

                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="default"
                          type="submit"
                          onClick={this.handleDelete}
                        >
                          Export .xlsx file
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Modal>
      </>
    );
  }
}

export default MachineModals;
