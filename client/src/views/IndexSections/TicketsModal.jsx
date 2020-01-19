import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Row,
  Modal,
  Col
} from "reactstrap";
import { ExportXLSX } from "./ExportXLSX";

class TicketsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      machinesWithTickets: [],
      numberOfTickets: 0
    };
  }

  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state],
      machinesWithTickets: this.props.machinesWithTickets
    });
  };

  render() {
    console.log("Hello from Tickets Modal");
    console.log(this.state);

    let numberOfTickets = 0;

    let arr = this.state.machinesWithTickets;

    for (let x = 0; x < arr.length; x++) {
      for (let i = 0; i < arr[x].tickets.length; i++) {
        if (arr[x].tickets[i].ticketStatus) {
          numberOfTickets++;
        }
      }
    }

    let ticketsArray = [];

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
          SERVICE TICKETS
        </Button>
        <Modal
          className="modal-dialog-centered modal-primary modal-lg"
          contentClassName="bg-gradient-default"
          isOpen={this.state.notificationModal}
          toggle={() => this.toggleModal("notificationModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification">
              You currently have {numberOfTickets} open{" "}
              {numberOfTickets === 1 ? "ticket" : "tickets"}
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
              <Col lg="12">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-12 py-lg-12">
                    <Form role="form">
                      <FormGroup>
                        <table
                          id="mytable"
                          className="table table-bordered exportable"
                        >
                          <thead>
                            <tr>
                              <th>Machine Name</th>
                              <th>Machine SN</th>
                              <th>Ticket Number</th>
                              <th>Ticket Date</th>
                              <th>Description</th>
                              <th>Failed Component</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.machinesWithTickets.map(machine => {
                              return (
                                <>
                                  <tr>
                                    <td>
                                      {machine.manufacturer +
                                        " " +
                                        machine.machineName}
                                    </td>

                                    <td>{machine.serialNumber}</td>
                                    <td>
                                      {machine.tickets.map(x => {
                                        x["Serial Number"] =
                                          machine.serialNumber;
                                        x["Ticket Number"] = x.ticketNumber;
                                        x["Repair Date"] = x.repairDate;
                                        x["Component"] = x.component;
                                        x["Description"] = x.failureText;
                                        x["Status"] = x.ticketStatus || false;

                                        ticketsArray.push(x);
                                        return (
                                          "\r\n" + x["Ticket Number"] + "\r\n"
                                        );
                                      })}
                                    </td>
                                    <td>
                                      {machine.tickets.map(x => {
                                        return (
                                          "\r\n" +
                                          (x["Repair Date"]
                                            ? x["Repair Date"].substr(0, 10)
                                            : false)
                                        );
                                      })}
                                    </td>
                                    <td>
                                      {machine.tickets.map(x => {
                                        return (
                                          "\r\n" + x["Description"] + "\r\n"
                                        );
                                      })}
                                    </td>
                                    <td>
                                      {machine.tickets.map(x => {
                                        return "\r\n" + x["Component"] + "\r\n";
                                      })}
                                    </td>
                                    <td>
                                      {machine.tickets.map(x => {
                                        return (
                                          "\r\n" +
                                          (x["Status"] ? "Open" : "Closed") +
                                          "\r\n"
                                        );
                                      })}
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </FormGroup>
                      <div className="text-center">
                        <ExportXLSX
                          csvData={ticketsArray}
                          fileName={"repairs-report"}
                        />
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

export default TicketsModal;
