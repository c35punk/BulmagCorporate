import React from "react";

import axios from "axios";
import { UserConsumer } from "../../contexts/user-context";
import { dbConstants } from "../../constants/constants";
import ContractModal from "../IndexSections/ContractsModal";
import TicketModal from "../IndexSections/TicketsModal";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup
} from "reactstrap";

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      machines: [],
      tickets: [],
      contracts: []
    };
  }

  componentDidMount() {
    axios
      .get(dbConstants.machinesUrl)
      .then(res => {
        console.log(res);
        this.setState({ machines: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(dbConstants.getUsersUrl)
      .then(res => {
        console.log(res);
        this.setState({ contracts: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });

    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    console.log("Hello from ADMIN DASHBOARD");
    console.log("this.state");
    console.log(this.state);
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
                            {this.state.contracts.map(contract => {
                              number++;
                              return (
                                <>
                                  <tr>
                                    <td>{number}</td>
                                    <td>{contract.companyName}</td>
                                    <td>{contract.username}</td>
                                    <td>{contract.email}</td>
                                    <td>{contract.contactPerson}</td>
                                    <td>{contract.address}</td>
                                    <td>{contract.vatNumber}</td>
                                    <td>
                                      {" "}
                                      <ContractModal
                                        machines={this.state.machines}
                                      />
                                    </td>
                                    <td>
                                      {" "}
                                      <TicketModal
                                        machinesWithTickets={
                                          this.state.machines
                                        }
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
