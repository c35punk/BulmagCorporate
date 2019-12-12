import React from "react";

import { Link } from "react-router-dom";
import { UserConsumer } from "../../contexts/user-context";

// reactstrap components
import { Button, Badge, Card, Container, Row, Col } from "reactstrap";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
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
                            src={this.props.companyImage}
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
                          <span className="heading">22</span>
                          <span className="description">
                            Machines in Maintenance
                          </span>
                        </div>
                        
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <Row className="align-items-center justify-content-center">
                      <iframe
                        src={"https://www." + this.props.companyName + ".bg"}
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
                          {this.props.companyName}
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          Address: {this.props.address}
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          VAT Nr.: {this.props.vatNumber}
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          Contact Person.: {this.props.contactPerson}
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          @mail: {this.props.email}
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
      {({
        isLoggedIn,
        isAdmin,
        username,
        address,
        email,
        vatNumber,
        companyImage,
        companyName,
        contactPerson,
        id
      }) => (
        <Profile
          {...props}
          isAdmin={isAdmin}
          isLoggedIn={isLoggedIn}
          username={username}
          email={email}
          address={address}
          companyName={companyName}
          companyImage={companyImage}
          vatNumber={vatNumber}
          contactPerson={contactPerson}
          id={id}
        />
      )}
    </UserConsumer>
  );
};

export default ProfileContext;
