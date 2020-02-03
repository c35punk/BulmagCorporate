import React from "react";

import axios from "axios";
import { dbConstants } from "../../constants/constants";

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
  Label,
  Modal,
  Col
} from "reactstrap";

class ConfirmExtension extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: this.props.endDate
    };
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state],
      machine: this.props.machine
    });
  };

  handleConfirm(event) {
    event.preventDefault();
    const newEndDate = this.props.endDate;

    console.log(newEndDate);
    let machineId = this.props.machine._id;

    axios
      .put(`${dbConstants.machinesUrl}/editByAdmin/${machineId}`, {
        machineId,
        newEndDate
      })
      .then(res => {
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

      window.location = "/admin-dashboard";
    })();
  }

  render() {
    console.log("Welcome from Confirm Extension");

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
        <Button
          className="float-center"
          color="primary"
          size="sm"
          onClick={() => this.toggleModal("notificationModal")}
        >
          Confirm Extension
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
              <Col lg="12">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-5">
                    <div className="text-center text-muted mb-4">
                      <>Confirm new end date</>
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
                        <InputGroup className="input-group-alternative ">
                          <InputGroupAddon addonType="prepend">
                            <Label className="text-primary">
                              Confirm End Date
                            </Label>
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
                            disabled
                          />
                        </InputGroup>
                      </FormGroup>

                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="default"
                          type="submit"
                          onClick={this.handleConfirm}
                        >
                          Confirm Extension
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

export default ConfirmExtension;
