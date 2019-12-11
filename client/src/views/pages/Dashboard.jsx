import React from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import Machine from "../IndexSections/Machine";
import { UserConsumer } from "../../contexts/user-context";

// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      machines: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9949/machines/")
      .then(res => {
        this.setState({ machines: res.data });
        console.log(res.data);
        console.log("Username: ");
      })
      .catch(function(error) {
        console.log(error);
      });
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
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
                      <h1 className="display-3 text-white">DASHBOARD</h1>
                      <p className="lead text-white">Systems in maintenance</p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          to="/add-machine"
                          tag={Link}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-server" />
                          </span>
                          <span className="btn-inner--text">Add system</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          to="/#"
                          tag={Link}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            View active contracts
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Button
                  className="btn-icon mb-2 mb-lg-0"
                  color="primary"
                  id="Server"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-server" />
                  </span>
                  <span className="btn-inner--text">Servers</span>
                </Button>
                <Col lg="12">
                  <Row className="row-grid">
                    {this.state.machines
                      .filter(x => x.type === "Server")
                      .filter(s => s.creatorUsername === this.props.username)
                      .map(machine => {
                        return (
                          <>
                            <Machine
                              machine={machine}
                              image="https://www.lenovo.com/medias/lenovo-data-center-rack-server-thinksystem-sr590-subseries-hero.png?context=bWFzdGVyfHJvb3R8Njk2NTV8aW1hZ2UvcG5nfGg1Zi9oZjYvOTU4NjA5MjgzNDg0Ni5wbmd8NDFmMzhmNWYyOGIwZWJhZWZhYWIxNzVjZGEyYmM0YjY5MzdiNDg3MDg1Y2NmOWZmMmJjNTBlNWI1YzYzZGI2ZQ"
                            />
                          </>
                        );
                      })}
                  </Row>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row className="justify-content-center">
                <Button
                  className="btn-icon mb-12 mb-lg-0"
                  color="primary"
                  id="Switch"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-server" />
                  </span>
                  <span className="btn-inner--text">Switches</span>
                </Button>
                <Col lg="12">
                  <Row className="row-grid">
                    {this.state.machines
                      .filter(x => x.type === "Switch")
                      .filter(s => s.creatorUsername === this.props.username)
                      .map(machine => {
                        return (
                          <>
                            <Machine
                              machine={machine}
                              image="https://www.lenovo.com/medias/lenovo-networking-ethernet-rackswitch-g8124e-main.png?context=bWFzdGVyfHJvb3R8MzU1OTl8aW1hZ2UvcG5nfGg2NS9oZDUvOTI4NzkzNDM3ODAxNC5wbmd8NDg4MmRiZjU4MjY2Yzc2MGQzOTI5NTI0MDlkZTY4YTY0YjVmNWZjYzRhZmY2MTRkYTZkMmVlNWYxZWY1ZmI5ZA"
                            />
                          </>
                        );
                      })}
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="justify-content-center">
                <Button
                  className="btn-icon mb-2 mb-lg-0"
                  color="primary"
                  id="Storage"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-server" />
                  </span>
                  <span className="btn-inner--text">Storage</span>
                </Button>
                <Col lg="12">
                  <Row className="row-grid">
                    {this.state.machines
                      .filter(x => x.type === "Storage")
                      .filter(s => s.creatorUsername === this.props.username)
                      .map(machine => {
                        return (
                          <Machine
                            machine={machine}
                            image="https://www.lenovo.com/medias/lenovo-storage-das-d3284-subseries-hero.png?context=bWFzdGVyfHJvb3R8NDk2Mzl8aW1hZ2UvcG5nfGhhMi9oMzMvOTM0NDM2MDU3OTEwMi5wbmd8NjA3ZTFlOTY5YTg0NjdlMTAzMTI3NTE2ZDFkZmJhOWM5MTZlZjgwM2ExOWIyMGRhZTdjYzdmZjlmMzk0YzZlMQ"
                          />
                        );
                      })}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <Row className="row-grid align-items-center">
            <Col className="order-lg-2 ml-lg-auto" md="6">
              <div className="position-relative pl-md-5">
                <img
                  alt="..."
                  className="img-center img-fluid"
                  src={require("assets/img/ill/ill-2.svg")}
                />
              </div>
            </Col>
            <Col className="order-lg-1" lg="6">
              <Card className="shadow shadow-lg--hover mt-5">
                <CardBody>
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                        <i className="ni ni-satisfied" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h5 className="title text-success">Awesome Support</h5>
                      <p>
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                      <a
                        className="text-success"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="shadow shadow-lg--hover mt-5">
                <CardBody>
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                        <i className="ni ni-active-40" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h5 className="title text-warning">Modular Components</h5>
                      <p>
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                      <a
                        className="text-warning"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </main>
      </>
    );
  }
}

const DashboardContext = props => {
  return (
    <UserConsumer>
      {({ isLoggedIn, isAdmin, username }) => (
        <Dashboard
          {...props}
          isAdmin={isAdmin}
          isLoggedIn={isLoggedIn}
          username={username}
        />
      )}
    </UserConsumer>
  );
};

export default DashboardContext;
