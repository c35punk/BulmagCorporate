import React from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import Machine from "../IndexSections/Machine";
import { UserConsumer } from "../../contexts/user-context";
import { dbConstants } from "../../constants/constants";
import ContractModal from "../IndexSections/ContractsModal";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      machines: []
    };
  }

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
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    console.log("Hello from DASHBOARD");
    console.log(this.props);
    console.log(this.state);
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

                        <ContractModal
                          className="mt-3"
                          color="dark"
                          tag={Link}
                          machine={this.props.machine}
                        />
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
                      .filter(s => s.creatorID === this.props.id)
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
                      .filter(s => s.creatorID === this.props.id)
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
                      .filter(s => s.creatorID === this.props.id)
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
        </main>
      </>
    );
  }
}

const DashboardContext = props => {
  return (
    <UserConsumer>
      {({ isLoggedIn, isAdmin, username, id }) => (
        <Dashboard
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

export default DashboardContext;
