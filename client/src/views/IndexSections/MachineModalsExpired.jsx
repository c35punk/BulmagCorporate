import React from "react";

import machineService from "../../services/machine-service";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Modal,
  Col
} from "reactstrap";

class MachineModals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: ""
    };
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state],
      machine: this.props.machine
    });
  };

  handleEndDate(event) {
    this.setState({
      startDate: this.props.machine.startDate,
      endDate: event.target.value + "T00:00:00.000Z"
    });
  }

  handleEdit(event) {
    event.preventDefault();
    const editedTokens = {
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };

    console.log(editedTokens);

    let machineId = this.props.machine._id;
    machineService.editMachineById(machineId, editedTokens).then(res => {
      if (res.status === 200) {
        res.json().then(data => {
          this.props.history.push(`/edit/${machineId}`);
        });
      } else {
        res.json().then(err => {
          console.log(err.message);
        });
      }
    });
    (() => {
      this.toggleModal("notificationModal");

      window.location = "/dashboard";
    })();
  }

  handleDelete(event) {
    event.preventDefault();
    const editedTokens = {
      endDate: this.state.endDate
    };

    console.log(editedTokens);

    let machineId = this.props.machine._id;
    machineService.deleteMachine(machineId).then(res => {
      if (res.status === 200) {
        res.json().then(data => {
          this.props.history.push(`/delete/${machineId}`);
        });
      } else {
        res.json().then(err => {
          console.log(err.message);
        });
      }
    });
    // (() => {
    //   this.toggleModal("notificationModal");

    //   window.location = "/dashboard";
    // })();
  }

  render() {
    let {
      machineName,
      manufacturer,
      serialNumber,
      productNumber,
      startDate,
      type
    } = this.props.machine;
    console.log(this.state);
    return (
      <>
        <br />
        <Button
          block
          className="mb-2"
          color="default"
          type="button"
          onClick={() => this.toggleModal("notificationModal")}
        >
          Extension Request
        </Button>
        <Modal
          className="modal-dialog-centered modal-primary modal-lg"
          contentClassName="bg-gradient-default"
          isOpen={this.state.notificationModal}
          toggle={() => this.toggleModal("notificationModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification">
              {manufacturer + " "}
              {machineName}
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
                  <CardHeader className="bg-white pb-5">
                    <div className="text-center text-muted mb-4">
                      <>Request a new end date of your subscription</>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-copy-04" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="select"
                            name="select"
                            placeholder="Type (Server, Storage, Switch, etc.)"
                            name="manufacturer"
                            value={manufacturer}
                            disabled
                          >
                            <option>Lenovo</option>
                            <option>Dell</option>
                            <option>INFINIDAT</option>
                            <option>HPE</option>
                            <option>CISCO</option>
                            <option>Other</option>
                          </Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-copy-04" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Machine Model"
                            type="text"
                            name="machineName"
                            value={machineName}
                            disabled
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-copy-04" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder={productNumber}
                            type="text"
                            name="productNumber"
                            value={productNumber}
                            disabled
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-copy-04" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder={serialNumber}
                            type="text"
                            name="serialNumber"
                            value={serialNumber}
                            disabled
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-align-left-2" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="select"
                            name="select"
                            placeholder="Type (Server, Storage, Switch, etc.)"
                            name="type"
                            value={type}
                            disabled
                          >
                            <option>Server</option>
                            <option>Storage</option>
                            <option>Switch</option>
                          </Input>
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-watch-time" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Start Date"
                            type="text"
                            autoComplete="off"
                            name="startDate"
                            value={startDate.substr(0, 10)}
                            disabled
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-watch-time" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="End Date"
                            type="date"
                            name="endDate"
                            autoComplete="off"
                            onChange={this.handleEndDate}
                          />
                        </InputGroup>
                      </FormGroup>

                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="default"
                          type="submit"
                          onClick={this.handleEdit}
                        >
                          Request Extension
                        </Button>
                      </div>
                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="default"
                          type="submit"
                          onClick={this.handleDelete}
                        >
                          Cancel Contract
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
