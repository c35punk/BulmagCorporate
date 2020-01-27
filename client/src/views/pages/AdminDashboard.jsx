import React from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import Machine from "../IndexSections/Machine";
import { UserConsumer } from "../../contexts/user-context";
import { dbConstants } from "../../constants/constants";
import ContractModal from "../IndexSections/ContractsModal";
import TicketModal from "../IndexSections/TicketsModal";

// reactstrap components
import { Button, Container, Row, Col, Collapse } from "reactstrap";

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

    // axios.get(dbConstants.getUsersUrl).then(res => {
    //   console.log(res);
    //   this.setState({
    //     contracts: res.data
    //   }).catch(function(error) {
    //     console.log(error);
    //   });
    // });

    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    console.log("Hello from ADMIN DASHBOARD");
    console.log(this.props);
    console.log(this.state);

    let myMachines = this.state.machines.filter(
      s => s.creatorID === this.props.id
    );

    let machinesWithTickets = myMachines.filter(
      machine => machine.tickets.length !== 0
    );

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
            <Container>
              <Row className="justify-content-center">
                <Button
                  className="btn-icon mb-2 mb-lg-0"
                  color="primary"
                  id="Contracts"
                >
                  <span className="btn-inner--text">Contracts</span>
                </Button>
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
