import React from "react";

import { Link } from "react-router-dom";
import { UserConsumer } from "../../contexts/user-context";

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
      .get("http://localhost:9949/machines/")
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
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />

              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>

          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
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
                      <iframe
                        src="https://www.oreilly.com/"
                        width="800"
                        height="450"
                        frameborder="0"
                        allow
                      ></iframe>
                    </Row>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <Badge color="default" pill className="mr-2">
                          {this.props.user.companyName}
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          Address: {this.props.user.address}
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          VAT Nr.: {this.props.user.vatNumber}
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          Contact Person: {this.props.user.contactPerson}
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          @mail: {this.props.user.email}
                        </Badge>
                      </Col>
                    </Row>
                  </div>
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
