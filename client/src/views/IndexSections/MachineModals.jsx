import React from "react";

import axios from "axios";
import { dbConstants } from "../../constants/constants";
// reactstrap components
import {
  Button,
  Badge,
  Card,
  FormText,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Label,
  Row,
  Jumbotron,
  Modal,
  Col
} from "reactstrap";

class MachineModals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repairDate: Date,
      component: "SAS/SATA Disk",
      failureText: "",
      uploadedFile: {},
      uploadedFileName: "",
      ticketStatus: true,
      creatorID: this.props.machine.creatorID
    };
    this.handleComponent = this.handleComponent.bind(this);
    this.handleFailureText = this.handleFailureText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state],
      repairDate: Date(Date.now())
    });
  };

  handleComponent(event) {
    this.setState({ component: event.target.value });
  }
  handleFailureText(event) {
    this.setState({ failureText: event.target.value });
  }
  onFileChange(event) {
    this.setState({
      uploadedFile: event.target.files[0],
      uploadedFileName: event.target.files[0].name
    });
  }

  handleSubmit(event) {
    const ticketToBeAdded = {
      repairDate: this.state.repairDate,
      component: this.state.component,
      failureText: this.state.failureText,
      fileLocation: this.state.fileLocation,
      uploadedFile: this.state.uploadedFile,
      fileName: this.state.uploadedFileName,
      creatorID: this.state.creatorID,
      machineID: this.props.machine._id,
      ticketStatus: this.state.ticketStatus
    };

    console.log(ticketToBeAdded);

    axios
      .post(dbConstants.addTicketsUrl, ticketToBeAdded)
      .then(res => console.log(res.data));

    event.preventDefault();
    window.location = "/dashboard";
  }

  render() {
    let {
      manufacturer,
      machineName,
      productNumber,
      serialNumber
    } = this.props.machine;
    return (
      <>
        <br />
        <Button
          className="mb-2"
          color="default"
          type="button"
          onClick={() => this.toggleModal("notificationModal")}
        >
          SUBMIT SERVICE Ticket
        </Button>
        <Modal
          className="modal-dialog-centered modal-primary modal-lg"
          contentClassName="bg-gradient-default"
          isOpen={this.state.notificationModal}
          toggle={() => this.toggleModal("notificationModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification">
              {manufacturer} {machineName}
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
                    <div className="text-default">
                      <Jumbotron>New Service Ticket</Jumbotron>
                    </div>
                  </Badge>
                  <Badge color="dark" className="mr-1">
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
                  </Badge>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form
                      role="form"
                      onSubmit={this.handleSubmit}
                      encType="multipart/form-data"
                    >
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-watch-time" /> Repair Date
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="Repair Date"
                            name="type"
                            value={this.state.repairDate
                              .toString()
                              .substr(4, 11)}
                              disabled
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-settings" /> Failed Component
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="select"
                            placeholder="Failed Component"
                            name="manufacturer"
                            value={this.state.component}
                            onChange={this.handleComponent}
                          >
                            <option>SAS/SATA Disk</option>
                            <option>Memory</option>
                            <option>RAID Controller</option>
                            <option>Planar/Motherboard</option>
                            <option>ETH Port</option>
                            <option>PSU</option>
                            <option>PDU</option>
                            <option>Front Panel</option>
                            <option>BIOS Battery</option>
                            <option>RAID Battery</option>
                            <option>SSD Disk</option>
                            <option>SFP Module</option>
                            <option>Riser Card</option>
                            <option>Expansion Card</option>
                            <option>CPU</option>
                            <option>Other</option>
                          </Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <Label for="ticketBody">Failure Text</Label>
                        <Input
                          type="textarea"
                          name="text"
                          id="ticketBody"
                          value={this.state.failureText}
                          onChange={this.handleFailureText}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="upload">Upload Log File/Screenshot</Label>
                        <Input
                          type="file"
                          name="file"
                          id="upload"
                          onChange={this.onFileChange}
                        />
                        <FormText color="muted">
                          Allowed file size ~3MB
                        </FormText>
                      </FormGroup>
                      <div className="text-center">
                        <Button className="mt-4" color="default" type="submit">
                          Submit Ticket
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
