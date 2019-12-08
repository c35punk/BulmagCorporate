import React from "react";
import axios from "axios";

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

// core components
import DemoNavbar from "components/Navbars/Navigation.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import { checkPropTypes } from "prop-types";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturer: "",
      machineName: "",
      productNumber: "",
      serialNumber: "",
      type: "",
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
    console.log(this.state);
    const machineToBeAdded = {
      manufacturer: this.state.manufacturer,
      machineName: this.state.machineName,
      productNumber: this.state.productNumber,
      serialNumber: this.state.serialNumber,
      type: this.state.type,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      agree: this.state.agree
    };

    axios
      .post("http://localhost:9949/machines/add-system", machineToBeAdded)
      .then(res => console.log(res.data));
    console.log(machineToBeAdded);
    console.log(this.state);

    event.preventDefault();
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
        <DemoNavbar />
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
            </div>
            <Container className="pt-lg-md">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-center text-muted mb-4">
                        <large>Add System to Maintenance Contract</large>
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
                              placeholder="Manufacturer"
                              type="text"
                              name="manufacturer"
                              value={this.state.manufacturer}
                              onChange={this.handleManufacturer}
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
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Type (Server, Storage, Switch, etc.)"
                              type="type"
                              name="type"
                              value={this.state.type}
                              onChange={this.handleType}
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
                                id="customCheckRegister"
                                type="checkbox"
                                name="agree"
                                checked={this.state.agree}
                                onChange={this.handleAgree}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
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
                            // to="/dashboard" tag={Link}
                          >
                            Add system
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
        <SimpleFooter />
      </>
    );
  }
}

export default Register;
