import React, { Link } from "react";
import axios from "axios";
import { UserConsumer } from "../../contexts/user-context";
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
  Container,
  Row,
  Col
} from "reactstrap";

class AddMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturer: "Lenovo",
      machineName: "",
      productNumber: "",
      serialNumber: "",
      type: "Server",
      startDate: Date,
      endDate: Date,
      agree: false
    };

    this.handleManufacturer = this.handleManufacturer.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleProductNumber = this.handleProductNumber.bind(this);
    this.handleSerialNumber = this.handleSerialNumber.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleAgree = this.handleAgree.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleManufacturer(event) {
    this.setState({ manufacturer: event.target.value });
  }
  handleName(event) {
    this.setState({ machineName: event.target.value });
  }
  handleProductNumber(event) {
    this.setState({ productNumber: event.target.value });
  }
  handleSerialNumber(event) {
    this.setState({ serialNumber: event.target.value });
  }
  handleType(event) {
    this.setState({ type: event.target.value });
  }
  handleStartDate(event) {
    this.setState({ startDate: event.target.value });
  }
  handleEndDate(event) {
    this.setState({ endDate: event.target.value });
  }
  handleAgree(event) {
    this.setState({ agree: event.target.checked });
  }

  handleSubmit(event) {
    const machineToBeAdded = {
      manufacturer: this.state.manufacturer,
      machineName: this.state.machineName,
      productNumber: this.state.productNumber,
      serialNumber: this.state.serialNumber,
      type: this.state.type,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      agree: this.state.agree,
      creatorID: this.props.id
    };

    console.log(machineToBeAdded);

    axios
      .post(dbConstants.machineCreateUrl, machineToBeAdded)
      .then(res => console.log(res.data));

    event.preventDefault();
    // window.location = "/dashboard";
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-md">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-center text-muted mb-4">
                        <large>Add Machine to Maintenance Contract</large>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Details</small>
                      </div>
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
                              placeholder="Type (Server, Storage, Switch, etc.)"
                              name="manufacturer"
                              value={this.state.manufacturer}
                              onChange={this.handleManufacturer}
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
                              value={this.state.machineName}
                              onChange={this.handleName}
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
                              placeholder="Product Number"
                              type="text"
                              name="productNumber"
                              value={this.state.productNumber}
                              onChange={this.handleProductNumber}
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
                              placeholder="Serial Number"
                              type="text"
                              name="serialNumber"
                              value={this.state.serialNumber}
                              onChange={this.handleSerialNumber}
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
                              value={this.state.type}
                              onChange={this.handleType}
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
                              value={this.state.startDate}
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
                              value={this.state.endDate}
                              onChange={this.handleEndDate}
                            />
                          </InputGroup>
                        </FormGroup>

                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckAddSystem"
                                type="checkbox"
                                name="agree"
                                checked={this.state.agree}
                                onChange={this.handleAgree}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckAddSystem"
                              >
                                <span>
                                  Agree with maintenance contract terms
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="default"
                            type="submit"
                            to="/dashboard"
                            tag={Link}
                          >
                            Add Machine
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

const AddSystemContext = props => {
  return (
    <UserConsumer>
      {({ isLoggedIn, isAdmin, username, id }) => (
        <AddMachine
          {...props}
          isAdmin={isAdmin}
          isLoggedIn={isLoggedIn}
          username={username}
          id={id}
        />
      )}
    </UserConsumer>
  );
};

export default AddSystemContext;
