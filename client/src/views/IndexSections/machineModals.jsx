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
      systemType: "Server",
      component: "SAS/SATA Disk",
      failureDescription: "",
      creatorID: this.props.machine.creatorID
    };
    this.handleComponent = this.handleComponent.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleFailureDescription = this.handleFailureDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  handleComponent(event) {
    this.setState({ component: event.target.value });
  }

  handleType(event) {
    this.setState({ systemType: event.target.value });
  }
  handleFailureDescription(event) {
    this.setState({ failureDescription: event.target.value });
  }

  handleSubmit(event) {
    const ticketToBeAdded = {
      systemType: this.state.systemType,
      component: this.state.component,
      failureDescription: this.state.failureDescription,
      creatorID: this.state.creatorID
    };

    axios
      .post(dbConstants.addTicketsUrl, ticketToBeAdded)
      .then(res => console.log(res.data));
    console.log("ticket");
    console.log(ticketToBeAdded);
    console.log(this.props);

    event.preventDefault();
    // window.location = "/dashboard";
  }

  componentDidMount() {
    // axios
    //   .get(dbConstants.machinesUrl)
    //   .then(res => {
    //     this.setState({ machines: res.data });
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }

  render() {
    console.log(this.state);
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
          block
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
              <Col lg="5">
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
                    <Form role="form" onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-settings" /> System Type
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="select"
                            name="select"
                            placeholder="Type (Server, Storage, Switch, etc.)"
                            name="type"
                            value={this.state.systemType}
                            onChange={this.handleType}
                          >
                            <option>Server</option>
                            <option>Storage</option>
                            <option>Switch</option>
                          </Input>
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
                            name="select"
                            placeholder="Type (Server, Storage, Switch, etc.)"
                            name="manufacturer"
                            value={this.state.component}
                            onChange={this.handleComponent}
                          >
                            <option>SAS/SATA Disk</option>
                            <option>Memory</option>
                            <option>RAID Controller</option>
                            <option>Planar/Motherboard</option>
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
                        <Label for="ticketBody">Failure Description</Label>
                        <Input
                          type="textarea"
                          name="text"
                          id="ticketBody"
                          value={this.state.failureDescription}
                          onChange={this.handleFailureDescription}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="upload">Upload Log File/Screenshot</Label>
                        <Input type="file" name="file" id="upload" />
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
