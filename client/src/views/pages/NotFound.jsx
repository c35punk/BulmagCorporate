import React from "react";

// reactstrap components
import { Jumbotron, Row, Container } from "reactstrap";

class NotFound extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>
          <section className="section section-lg pt-lg-0 mt--200">
            <Row className="row-grid justify-content-center">
              <Jumbotron>
                <h1 className="display-3">NOT AUTHORIZED TO VIEW THIS PAGE</h1>
              </Jumbotron>
            </Row>
          </section>
        </main>
      </>
    );
  }
}

export default NotFound;
