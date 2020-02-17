import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "../IndexSections/Alerts";
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

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
      formSubmitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    const { email, password } = this.state;
    const { updateUser } = this.props;

    console.log("updateUser");
    console.log(this.props);

    const credentials = {
      email,
      password
    };

    this.setState({ formSubmitted: true }, () => {
      try {
        axios.post(dbConstants.loginUrl, credentials).then(res => {
          // this.setState({ token: res.data.token });
          console.log("Success@@:");
          console.log(res.data);

          if (!res.data.success) {
            this.setState({ error: res.data.message, formSubmitted: false });
            return;
          }

          const isAdmin = res.data.user.roles
            .map(role => role.toLowerCase())
            .some(role => role === "admin");

          window.localStorage.setItem("auth_token", res.data.token);
          window.localStorage.setItem(
            "user",
            JSON.stringify({
              ...res.data.user,
              isAdmin: isAdmin,
              isLoggedIn: true
            })
          );
          updateUser({
            isAdmin,
            isLoggedIn: true,
            updateUser,
            ...res.data.user
          });

          isAdmin
            ? (window.location = "/admin-dashboard")
            : (window.location = "/profile");
        });
      } catch (e) {
        console.log(e);
      }
    });
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    const { email, password, error, formSubmitted } = this.state;

    console.log("this.props");
    console.log(this.props);
    console.log(this.state);

    return (
      <>
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />

              <span />
            </div>
            <Container className="pt-lg-md">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign in with</small>
                      </div>
                      {error.length ? (
                        <Alert dismissible className="alert" variant="danger">
                          {error}
                        </Alert>
                      ) : null}

                      <div className="btn-wrapper text-center">
                        <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href="#"
                          onClick={e => e.preventDefault()}
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
                          href="#"
                          onClick={e => e.preventDefault()}
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
                        <small>Or sign in with credentials</small>
                      </div>
                      <Form role="form" onSubmit={this.handleSubmit}>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="email"
                              name="email"
                              value={email}
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
                              value={password}
                              onChange={this.handlePassword}
                            />
                          </InputGroup>
                        </FormGroup>
                        <Button className="my-4" color="primary" type="submit">
                          Sign in
                        </Button>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <Link className="text-light" to="/login">
                        <small>Forgot password?</small>
                      </Link>
                    </Col>
                    <Col className="text-right" xs="6">
                      <Link className="text-light" to="/register">
                        <small>Create new account</small>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

const LoginContext = props => {
  return (
    <UserConsumer>
      {({ isLoggedIn, updateUser, isAdmin }) => (
        <Login
          {...props}
          isAdmin={isAdmin}
          isLoggedIn={isLoggedIn}
          updateUser={updateUser}
        />
      )}
    </UserConsumer>
  );
};

export default LoginContext;
