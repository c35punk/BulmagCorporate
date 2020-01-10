import React from "react";

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

class TicketsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      machinesWithTickets: []
    };
  }

  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state],
      myMachines: this.props.machines,
      machinesWithTickets: this.props.machines.filter(
        x => x.tickets.length != 0
      )
    });
  };

  componentDidMount() {
    let temp = 0;
    let machines = this.props.machines.filter(
      machine => machine.tickets.length !== 0
    );

    console.log(machines);
    machines.map(x => (temp += x.tickets.length));
    this.setState({ numberOfTickets: temp });
  }

  render() {
    console.log("Hello from Tickets Modal");
    console.log(this.state);

    let numberOfTickets = 0;

    for (let x = 0; x < this.state.machinesWithTickets.length; x++) {
      numberOfTickets += this.state.machinesWithTickets[x].tickets.length;
    }

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
              You currently have {numberOfTickets} open{" "}
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
              <Col lg="12">
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
                                      {machine.tickets.length > 1
                                        ? "Larger than 1"
                                        : "N/A"}
                                    </td>
                                    <td>
                                      {machine.tickets[0].repairDate.substr(
                                        0,
                                        10
                                      )}
                                    </td>
                                    <td>{machine.tickets[0].failureText}</td>
                                    <td>{machine.tickets[0].component}</td>
                                  </tr>
                                </>
                              );
                            })}
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

export default TicketsModal;
