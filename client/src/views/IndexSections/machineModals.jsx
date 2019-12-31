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
          SUBMIT SERVICE TICKET
        </Button>
        <Modal
          className="modal-dialog-centered modal-primary modal-lg"
          contentClassName="bg-gradient-default"
          isOpen={this.state.notificationModal}
          toggle={() => this.toggleModal("notificationModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification">
              SOMETHING
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
                      <Jumbotron>New Service Ticket</Jumbotron>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form">
                      <FormGroup>
                        <Label for="ticketBody">Details</Label>
                        <Input type="textarea" name="text" id="ticketBody" />
                      </FormGroup>

                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="default"
                          type="submit"
                          onClick={this.handleEdit}
                        >
                          Edit Machine
                        </Button>
                      </div>
                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="default"
                          type="submit"
                          onClick={this.handleDelete}
                        >
                          Delete Machine
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
