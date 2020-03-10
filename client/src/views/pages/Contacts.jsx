import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import axios from "axios";

import { dbConstants } from "../../constants/constants";
import { loadReCaptcha, ReCaptcha } from "react-recaptcha-google";
import { Parallax } from "react-parallax";
import { isMobile } from "react-device-detect";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  UncontrolledAlert,
  Row,
  Col,
  Form
} from "reactstrap";

// index page sections

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senderName: "",
      senderEmail: "",
      message: "",
      captchaCheck: false,
      error: ""
    };
    this.handleSenderName = this.handleSenderName.bind(this);
    this.handleSenderEmail = this.handleSenderEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  handleSenderName(event) {
    this.setState({ senderName: event.target.value });
  }
  handleSenderEmail(event) {
    this.setState({ senderEmail: event.target.value });
  }
  handleMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let data = {
      name: this.state.senderName,
      email: this.state.senderEmail,
      message: this.state.message
    };

    console.log(data);
    console.log(this.state.captchaCheck);

    if (this.state.captchaCheck) {
      axios.post(dbConstants.mailsUrl, data).then(response => {
        if (!response.data.success) {
          this.setState({ error: response.data.errors });
          console.log(this.state.error);
          return;
        }
        console.log(response.data);

        if (response.data.msg === "success") {
          console.log("Message Sent.");
          window.location = "/contacts";
        } else if (response.data.msg === "fail") {
          console.log(response);
          console.log("Message failed to send.");
          window.location = "/contacts";
        }
      });
    } else {
      console.log("No CAPTCHA TOKEN FOUND");
    }
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    if (this.captchaDemo) {
      console.log("CAPTCHA started...");
      this.captchaDemo.reset();
    }
    loadReCaptcha();
  }

  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }
  verifyCallback(recaptchaToken) {
    if (recaptchaToken) {
      this.setState({ captchaCheck: true });
    }
    console.log(recaptchaToken, "<= your recaptcha token");
  }

  render() {
    let alertToShow = this.state.error ? (
      !isMobile ? (
        <UncontrolledAlert color="danger" fade={true}>
          <span className="alert-inner--text ml-1">
            {this.state.error.message}
          </span>
        </UncontrolledAlert>
      ) : null
    ) : null;
    return (
      <>
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-450 justify-content-center ">
              <div className="shape shape-default"></div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0 ">
                  <Row className="justify-content-left mb--200">
                    <Col lg="6">
                      <h1
                        className={
                          isMobile
                            ? "display-4 text-white"
                            : "display-3 text-white"
                        }
                      >
                        CONTACTS
                      </h1>
                    </Col>
                    <div className="justify-content-center ">
                      <Col>
                        <h4 className="justify-content-center">Phones</h4>
                        <h6>Sales Department</h6>
                        <a href="tel:+35928179040">+359 2 817 90 40</a>
                        <br />
                        <a href="mailto:office@bulmag.bg">office@bulmag.bg</a>
                      </Col>
                      <Col>
                        <h6>Service Center</h6>
                        <a href="tel:+35928179060">+359 2 817 90 60</a>
                        <br />

                        <a href="mailto:service@bulmag.bg">service@bulmag.bg</a>
                      </Col>
                      <Col>
                        <h6>Online Shop</h6>
                        <a href="tel:+35928179010">+359 2 817 90 10</a>
                        <br />
                        <a href="mailto:store@e-bulmag.bg">store@e-bulmag.bg</a>
                        <br /> <br />
                        <br />
                      </Col>
                    </div>
                    <div className="justify-content-center ">
                      <Col>
                        <h4 className="justify-content-center">Address</h4>
                        <h6>Bulmag HQ</h6>
                        <a href="#">1784</a> <br />
                        <a href="map:">Sofia, 7 Grigorii Gorbatenko str.</a>
                      </Col>
                    </div>
                    <Col
                      lg="12"
                      style={{
                        overflow: "hidden",
                        paddingTop: " 56.25%",
                        position: "relative"
                      }}
                    >
                      <iframe
                        src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Bulmag+AD,+Sofia,+Bulgaria&amp;aq=0&amp;oq=bulmag+ad+sofia&amp;sll=37.0625,-95.677068&amp;sspn=57.292148,135.263672&amp;t=m&amp;ie=UTF8&amp;hq=Bulmag+AD,&amp;hnear=Sofia,+Sofia-city,+Bulgaria&amp;ll=42.654856,23.372898&amp;spn=0.018937,0.025749&amp;z=14&amp;iwloc=A&amp;output=embed&amp;iwloc=near"
                        title="Location"
                        style={{
                          border: "solid 1px #aa2727",
                          height: "100%",
                          left: "0",
                          position: "absolute",
                          top: "0",
                          width: "100%",
                          borderRadius: "5px"
                        }}
                      ></iframe>
                    </Col>
                  </Row>
                </div>
              </Container>

              {/* SVG separator */}
              {/* <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="2 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="962 0 2560 100 0 100"
                  />
                </svg>
              </div> */}
            </section>
            <Parallax
              bgImage={require("../../assets/img/pics-vte5/business card.jpg")}
              bgImageAlt="Business Card"
              strength={900}
            >
              <div style={{ height: isMobile ? "170px" : "450px" }} />
            </Parallax>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--100 section-contact-us">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <Form
                        role="form"
                        onSubmit={this.handleSubmit}
                        encType="multipart/form-data"
                      >
                        <FormGroup
                          className={classnames("mt-5", {
                            focused: this.state.nameFocused
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-user-run" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Your name"
                              type="text"
                              id="name"
                              value={this.state.senderName}
                              onChange={this.handleSenderName}
                              onFocus={e =>
                                this.setState({ nameFocused: true })
                              }
                              onBlur={e =>
                                this.setState({ nameFocused: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                          className={classnames({
                            focused: this.state.emailFocused
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email address"
                              type="email"
                              id="email"
                              value={this.state.senderEmail}
                              onChange={this.handleSenderEmail}
                              onFocus={e =>
                                this.setState({ emailFocused: true })
                              }
                              onBlur={e =>
                                this.setState({ emailFocused: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup className="mb-4">
                          <Input
                            className="form-control-alternative"
                            cols="80"
                            name="name"
                            placeholder="Type a message..."
                            rows="4"
                            type="textarea"
                            id="message"
                            value={this.state.message}
                            onChange={this.handleMessage}
                          />
                        </FormGroup>

                        <ReCaptcha
                          ref={el => {
                            this.captchaDemo = el;
                          }}
                          render="explicit"
                          sitekey="6LfindYUAAAAAEkTz9Xo_LYQSIApdN586bDSsZny"
                          onloadCallback={this.onLoadRecaptcha}
                          verifyCallback={this.verifyCallback}
                        />
                        <br />
                        <div>
                          <Button
                            block
                            className="btn-round"
                            color="default"
                            size="lg"
                            type="submit"
                          >
                            Send Message
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

export default Contacts;
