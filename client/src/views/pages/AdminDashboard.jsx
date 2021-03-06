import React, { Link } from "react";

import axios from "axios";
import { UserConsumer } from "../../contexts/user-context";
import { dbConstants } from "../../constants/constants";
import ContractModal from "../IndexSections/ContractsModal";
import TicketModal from "../IndexSections/TicketsModal";
import { functions } from "../../constants/constants";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Button,
} from "reactstrap";
import ConfirmExtension from "views/IndexSections/ConfirmExtension";

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      machines: [],
      tickets: [],
      contracts: [],
    };
  }

  componentDidMount() {
    if (this.props.isAdmin) {
      axios
        .get(dbConstants.machinesUrl)
        .then((res) => {
          this.setState({ machines: res.data });
        })
        .catch(function (error) {
          console.log(error);
        });

      axios
        .get(dbConstants.getUsersUrl)
        .then((res) => {
          this.setState({ contracts: res.data });
        })
        .catch(function (error) {
          console.log(error);
        });

      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
    } else {
      window.location = "/not-found";
    }
  }
  render() {
    let number = 0;
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
                    <Col lg="12">
                      <h1 className="display-3 text-white">ADMIN DASHBOARD</h1>
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
                    points="1280 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Row className="justify-content-center">
              <Button
                className="btn-icon mb-12 mb-lg-0 "
                color="primary"
                id="INFO"
              >
                <span className="btn-inner--text">ACCOUNTS INFO</span>
              </Button>
              <Col lg="12">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-9 py-lg-9">
                    <Form role="form">
                      <FormGroup>
                        <table
                          id="mytable"
                          className="table table-bordered exportable"
                        >
                          <thead key="thead">
                            <tr>
                              <th>Nr</th>
                              <th>Company Name</th>
                              <th>Contact Name</th>
                              <th>Contact Email</th>
                              <th>CEO/GM</th>
                              <th>Address</th>
                              <th>VAT Number</th>
                              <th>Machines in Maintenance</th>
                              <th>Tickets</th>
                            </tr>
                          </thead>
                          <tbody key="tbody">
                            {this.state.contracts.map((contract) => {
                              number++;
                              return (
                                <>
                                  <tr>
                                    <td>{number}</td>
                                    <td>{contract.companyName}</td>
                                    <td>{contract.username}</td>
                                    <td>
                                      {" "}
                                      <Button
                                        className="float-center"
                                        color="info"
                                        href={"mailto:" + contract.email}
                                        size="sm"
                                      >
                                        {contract.email}
                                      </Button>
                                    </td>
                                    <td>{contract.contactPerson}</td>
                                    <td>{contract.address}</td>
                                    <td>{contract.vatNumber}</td>
                                    <td>
                                      {" "}
                                      <ContractModal
                                        machines={this.state.machines.filter(
                                          (x) => x.creatorID === contract._id
                                        )}
                                        company={contract.companyName}
                                        isAdmin={this.props.isAdmin}
                                      />
                                    </td>
                                    <td>
                                      {" "}
                                      <TicketModal
                                        machinesWithTickets={this.state.machines
                                          .filter(
                                            (x) => x.creatorID === contract._id
                                          )
                                          .filter(
                                            (x) => x.tickets.length !== 0
                                          )}
                                        company={contract.companyName}
                                      />
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Button
                className="btn-icon mb-12 mb-lg-0 "
                color="primary"
                id="INFO"
              >
                <span className="btn-inner--text">EXTENSION REQUESTS</span>
              </Button>
              <Col lg="12">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-9 py-lg-9">
                    <Form role="form">
                      <FormGroup>
                        <table
                          id="mytable"
                          className="table table-bordered exportable"
                        >
                          <thead key="thead">
                            <tr>
                              <th>Company Name</th>
                              <th>Contact Name</th>
                              <th>Contact Email</th>
                              <th>Machine Serial Number</th>
                              <th>Extenstion Date Review</th>
                            </tr>
                          </thead>
                          <tbody key="tbody">
                            {this.state.contracts.map((contract) => {
                              number++;
                              return (
                                <>
                                  <tr>
                                    <td>{contract.companyName}</td>
                                    <td>{contract.username}</td>
                                    <td>
                                      {" "}
                                      <Button
                                        className="float-center"
                                        color="info"
                                        href={"mailto:" + contract.email}
                                        size="sm"
                                      >
                                        {contract.email}
                                      </Button>
                                    </td>

                                    <td>
                                      {this.state.machines
                                        .filter(
                                          (x) => x.creatorID === contract._id
                                        )
                                        .map((machine) => {
                                          return (
                                            <>
                                              <Button
                                                className="float-center"
                                                color="info"
                                                size="sm"
                                                disabled
                                              >
                                                {machine.serialNumber}
                                              </Button>

                                              <br></br>
                                            </>
                                          );
                                        })}
                                    </td>
                                    <td>
                                      {this.state.machines
                                        .filter(
                                          (x) => x.creatorID === contract._id
                                        )
                                        .map((machine) => {
                                          return machine.proposedDate >
                                            machine.endDate ? (
                                            <>
                                              <Button
                                                className="float-center"
                                                color="primary"
                                                size="sm"
                                                disabled
                                              >
                                                {machine.proposedDate.substr(
                                                  0,
                                                  10
                                                )}
                                              </Button>
                                              <ConfirmExtension
                                                tag={Link}
                                                machine={machine}
                                                endDate={machine.proposedDate}
                                              />

                                              <br></br>
                                            </>
                                          ) : !functions.isDateBeforeToday(
                                              new Date(machine.endDate)
                                            ) ? (
                                            <>
                                              <Button
                                                className="float-center"
                                                color="primary"
                                                size="sm"
                                                disabled
                                              >
                                                {"Contract expired on " +
                                                  machine.endDate.substr(0, 10)}
                                              </Button>

                                              <br></br>
                                            </>
                                          ) : (
                                            <>
                                              <Button
                                                className="float-center"
                                                color="info"
                                                size="sm"
                                                disabled
                                              >
                                                {"Active contract until " +
                                                  machine.endDate.substr(0, 10)}
                                              </Button>

                                              <br></br>
                                            </>
                                          );
                                        })}
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </section>
        </main>
      </>
    );
  }
}

const DashboardContext = (props) => {
  return (
    <UserConsumer>
      {({ isLoggedIn, isAdmin, username, id }) => (
        <AdminDashboard
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
