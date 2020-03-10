import React from "react";

import { Link } from "react-router-dom";
import { UserConsumer } from "../../contexts/user-context";
import { dbConstants } from "../../constants/constants";
import { isMobile } from "react-device-detect";

// reactstrap components
import { Button, Badge, Card, Container, Row, Col } from "reactstrap";
import axios from "axios";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      machines: [],
      servers: Number,
      storages: Number,
      switches: Number
    };
  }

  componentDidMount() {
    axios
      .get(dbConstants.machinesUrl)
      .then(res => {
        const userMachines = res.data.filter(
          x => x.creatorID === this.props.user.id
        );
        this.setState({
          machines: userMachines
        });
        this.setState({
          servers: this.state.machines.filter(x => x.type === "Server")
        });
        this.setState({
          storages: this.state.machines.filter(x => x.type === "Storage")
        });
        this.setState({
          switches: this.state.machines.filter(x => x.type === "Switch")
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    console.log("Hello from Profile");
    console.log(this.props);
    console.log(this.state.machines);
    return (
      <>
        <main className="profile-page" ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1
                        className={
                          isMobile
                            ? "display-4 text-white"
                            : "display-3 text-white"
                        }
                      >
                        PROFILE
                      </h1>
                      <p className="lead text-white">Manage your account</p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
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
                    points="1962 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>

          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="4">
                    <div className="card-profile-image">
                      <Link to="/dashboard">
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={this.props.user.companyImage}
                        />
                      </Link>
                    </div>
                  </Col>

                  <Col
                    className="order-lg-3 text-lg-right align-self-lg-center"
                    lg="4"
                  >
                    <div className="card-profile-actions py-4 mt-lg-0">
                      <Button
                        className="mr-4"
                        color="info"
                        href="tel:+35928179060"
                        size="sm"
                      >
                        Call Us
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        href="mailto:service@bulmag.bg"
                        size="sm"
                      >
                        Message
                      </Button>
                    </div>
                  </Col>

                  <Col className="order-lg-1" lg="4">
                    <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <span className="heading">
                          {this.state.servers.length}
                        </span>
                        <span className="description">Servers</span>
                      </div>
                      <div>
                        <span className="heading">
                          {this.state.storages.length}
                        </span>
                        <span className="description">Storages</span>
                      </div>
                      <div>
                        <span className="heading">
                          {this.state.switches.length}
                        </span>
                        <span className="description">Switches</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-5">
                  <Row className="align-items-center justify-content-center">
                    {isMobile ? (
                      <p>Nothing to view on a mobile device</p>
                    ) : (
                      <iframe
                        src="https://www.kaldata.com/it-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8"
                        width="900"
                        height="450"
                        frameborder="0"
                        allow
                        title="Relevant News"
                      ></iframe>
                    )}
                  </Row>
                </div>
                <div className="mt-5 py-5 border-top text-center">
                  <Row className="justify-content-center">
                    <Col lg="9">
                      <Badge color="info" className="mr-3">
                        {this.props.user.companyName}
                      </Badge>
                      <Badge color="info" className="mr-3">
                        Address: {this.props.user.address}
                      </Badge>
                      <Badge color="info" className="mr-3">
                        VAT Nr.: {this.props.user.vatNumber}
                      </Badge>
                      <Badge color="info" className="mr-3">
                        Contact Person: {this.props.user.contactPerson}
                      </Badge>
                      <Badge color="info" className="mr-3">
                        @mail: {this.props.user.email}
                      </Badge>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

const ProfileContext = props => {
  return (
    <UserConsumer>
      {({ isLoggedIn, isAdmin }) => (
        <Profile {...props} isAdmin={isAdmin} isLoggedIn={isLoggedIn} />
      )}
    </UserConsumer>
  );
};

export default ProfileContext;
