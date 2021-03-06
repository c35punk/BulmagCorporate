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
    this.state = { myMachines: [] };
  }

  state = {};
  toggleModal = state => {
    if (this.state.notificationModal) {
      !this.props.isAdmin
        ? (window.location = "/dashboard")
        : (window.location = "/admin-dashboard");
    }
    this.setState({
      [state]: !this.state[state],
      myMachines: this.props.machines
    });
  };

  render() {
    let numberOfMachine = this.state.myMachines.length;

    let machinesToExport = [];

    return (
      <>
        <Button
          className="btn-icon mb-3 mb-sm-0"
          color="info"
          type="button"
          onClick={() => this.toggleModal("notificationModal")}
        >
          <span className="btn-inner--icon mr-1">
            <i className="fa fa-file-text" />
          </span>{" "}
          MAINTENANCE CONTRACTS
        </Button>
        <Modal
          className="modal-dialog-centered modal-primary modal-lg"
          contentClassName="bg-gradient-default"
          isOpen={this.state.notificationModal}
          toggle={() => this.toggleModal("notificationModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification">
              {this.props.company ? this.props.company : "You "} currently have{" "}
              {numberOfMachine} active{" "}
              {numberOfMachine === 1 ? "contract" : "contracts"}
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
                              <th>Machine PN</th>
                              <th>Machine SN</th>
                              <th>Type</th>
                              <th>Start Date</th>
                              <th>End Date</th>
                              <th>Active</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.myMachines.map(machine => {
                              delete machine.tickets;
                              delete machine._id;
                              delete machine.agree;
                              delete machine.creatorID;
                              delete machine.__v;
                              machinesToExport.push(machine);

                              return (
                                <>
                                  <tr>
                                    <td>
                                      {machine.manufacturer +
                                        " " +
                                        machine.machineName}
                                    </td>
                                    <td>{machine.productNumber}</td>
                                    <td>{machine.serialNumber}</td>
                                    <td>{machine.type}</td>
                                    <td>{machine.startDate.substr(0, 10)}</td>
                                    <td>{machine.endDate.substr(0, 10)}</td>
                                    <td>
                                      {Date.parse(Date()) <
                                      Date.parse(machine.endDate)
                                        ? "Yes"
                                        : "No"}
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
                          csvData={machinesToExport}
                          fileName={this.props.company + "-contracts-report"}
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
