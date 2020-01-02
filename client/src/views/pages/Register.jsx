import React from "react";
import { Link } from "react-router-dom";
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
  Container,
  Row,
  Col
} from "reactstrap";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
      agree: false,
      passwordMatch: false,
      companyName: "",
      vatNumber: "",
      contactPerson: "",
      companyImage: "",
      address: ""
    };

    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRepeatPassword = this.handleRepeatPassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAgree = this.handleAgree.bind(this);
    this.handleCompanyName = this.handleCompanyName.bind(this);
    this.handleCompanyImage = this.handleCompanyImage.bind(this);
    this.handleVatNumber = this.handleVatNumber.bind(this);
    this.handleContactPerson = this.handleContactPerson.bind(this);
    this.handleAddress = this.handleAddress.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({ username: event.target.value });
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }
  handleRepeatPassword(event) {
    this.setState({
      repeatPassword: event.target.value
    });
  }
  handleAgree(event) {
    this.setState({ agree: event.target.checked });
  }
  handleCompanyName(event) {
    this.setState({ companyName: event.target.value });
  }
  handleVatNumber(event) {
    this.setState({ vatNumber: event.target.value });
  }
  handleContactPerson(event) {
    this.setState({ contactPerson: event.target.value });
  }
  handleAddress(event) {
    this.setState({ address: event.target.value });
  }
  handleCompanyImage(event) {
    this.setState({ companyImage: event.target.value });
  }

  handleSubmit(event) {
    this.state.passwordMatch =
      this.state.password === this.state.repeatPassword ? true : false;

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      passwordMatch: this.state.passwordMatch,
      companyName: this.state.companyName,
      vatNumber: this.state.vatNumber,
      contactPerson: this.state.contactPerson,
      companyImage: this.state.companyImage,
      address: this.state.address
    };

    axios
      .post(dbConstants.registerUrl, newUser)
      .then(res => console.log(res.data));
    console.log("newUser");
    console.log(newUser);
    console.log(this.state);

    event.preventDefault();

    window.location = "/login";
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
            </div>
            <Container className="pt-lg-md">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign up with</small>
                      </div>
                      <div className="text-center">
                        <Button
                          className="btn-neutral btn-icon mr-4"
                          color="default"
                          to="/login"
                          tag={Link}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/github.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          to="/login"
                          tag={Link}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/google.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Or sign up with credentials</small>
                      </div>
                      <Form role="form" onSubmit={this.handleSubmit}>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Username"
                              type="text"
                              name="name"
                              value={this.state.name}
                              onChange={this.handleName}
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
                              placeholder="Email"
                              type="email"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleEmail}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              name="password"
                              value={this.state.password}
                              onChange={this.handlePassword}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Repeat Password"
                              type="password"
                              name="repeatPassword"
                              autoComplete="off"
                              value={this.state.repeatPassword}
                              onChange={this.handleRepeatPassword}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-building" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Company Name"
                              type="text"
                              name="companyName"
                              value={this.state.companyName}
                              onChange={this.handleCompanyName}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-pin-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Company Address"
                              type="text"
                              name="address"
                              autoComplete="off"
                              value={this.state.address}
                              onChange={this.handleAddress}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Contact Person"
                              type="text"
                              name="contactPerson"
                              autoComplete="off"
                              value={this.state.contactPerson}
                              onChange={this.handleContactPerson}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-collection" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="VAT Number"
                              type="text"
                              name="vatNumber"
                              autoComplete="off"
                              value={this.state.vatNumber}
                              onChange={this.handleVatNumber}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Link to Company Logo Image"
                              type="text"
                              name="companyImage"
                              autoComplete="off"
                              value={this.state.companyImage}
                              onChange={this.handleCompanyImage}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-muted font-italic">
                          <small>
                            password strength:{" "}
                            <span className="text-success font-weight-700">
                              strong
                            </span>
                          </small>
                        </div>
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
                                  I agree with the{" "}
                                  <a to="/login" tag={Link}>
                                    Privacy Policy
                                  </a>
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
                            // onClick={this.submitHandler}
                          >
                            Create account
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

export default Register;
