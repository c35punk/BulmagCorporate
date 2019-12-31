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
      machines: []
    };
  }
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state],
      machine: this.props.machine
    });
  };

  componentDidMount() {
    axios
      .get(dbConstants.machinesUrl)
      .then(res => {
        this.setState({ machines: res.data });
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    let {
      manufacturer,
      machineName,
      productNumber,
      serialNumber,
      type,
      startDate,
      endDate
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
                  <Badge color="default" pill className="mr-1">
                    <div className="text-center text-muted mb-4">
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
                    <Form role="form">
                      <FormGroup>
                        <Label for="ticketBody">Details</Label>
                        <Input type="textarea" name="text" id="ticketBody" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleFile">Upload File</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                        Allowed file size ~3MB
                        </FormText>
                      </FormGroup>

                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="default"
                          type="submit"
                          onClick={this.handleEdit}
                        >
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
