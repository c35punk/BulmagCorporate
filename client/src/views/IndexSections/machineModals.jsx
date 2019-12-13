import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
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
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state],
      machine: this.props.machine
    });
  };

  handleStartDate(event) {
    this.setState({ startDate: event.target.value });
  }
  handleEndDate(event) {
    this.setState({ endDate: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    const editedTokens = {
      productNumber: this.state.productNumber,
      serialNumber: this.state.serialNumber
    };

    let machineId = this.props.machine._id;

    fetch(`localhost:9949/edit/${machineId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedTokens)
    });
  }

  render() {
    let {
      machineName,
      manufacturer,
      serialNumber,
      productNumber,
      startDate,
      endDate,
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
          Edit
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
                      <large>Edit Subscription Period</large>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form" onSubmit={this.handleSubmit}>
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
                            name="type"
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
                            type="date"
                            autoComplete="off"
                            name="startDate"
                            value={this.state.startDate.substr(0, 10)}
                            onChange={this.handleStartDate}
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
                            value={this.state.endDate.substr(0, 10)}
                            onChange={this.handleEndDate}
                          />
                        </InputGroup>
                      </FormGroup>

                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="default"
                          type="submit"
                          to="/dashboard"
                          tag={Link}
                        >
                          Edit Machine
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
