import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Projects extends React.Component {
  state = {};
  componentDidMount() {
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
              <div className="shape shape-style-1 shape-default"></div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">PROJECTS</h1>
                    </Col>
                    <p>
                      <img
                        className="alignleft"
                        src="https://katina.bg/wp-content/uploads/2018/04/bl-euro.jpg"
                        alt="..."
                      />
                      <img
                        className="alignright"
                        src="http://hemusconsult.com/wp-content/uploads/2015/04/flag-e1424683963972-s.jpg"
                        alt="..."
                      />
                    </p>
                    <hr />
                    &nbsp;
                    <p>
                      On 29/03/2016, the <strong>Bulmag AD</strong> signed a
                      contract for grants under the{" "}
                      <strong>
                        Operational Programme "Innovation and Competitiveness"
                        2014-2020 procedure "Improving the production capacity
                        of SMEs"
                      </strong>
                      .
                    </p>
                    <p>
                      The total cost of the project is
                      <strong>1 088 520.00 BGN</strong>, of which
                      637 491.73 BGN, european funding, 112 498.55 BGN. national
                      funding and 338 529.72 BGN, self-financing by the
                      beneficiary.
                    </p>
                    <p>
                      The main objective of the project proposal is to create
                      conditions for implementation of export activity and thus
                      increase the production capacity of the enterprise in the
                      form of increasing the volume of services provided. This
                      will be achieved through the introduction of new high-tech
                      web-based software platform for automated storage of user
                      information (Backup and Restore) to a remote server.
                      Web-based version of the platform will provide access to
                      the service from anywhere in the world, which will enable
                      the export of that particular service. Delivering the
                      service is not related with the physical presence of
                      employee of the company or installation on customer’s
                      laptop, which will optimize the manufacturing process by
                      reducing the committed labor time and also will improve
                      the efficiency of resource costs.
                    </p>
                    <param />
                    During the execution of the project proposal along with the
                    main objective several other accompanying specific
                    objectives will be met:
                    <p>
                      1. Increase sales; 2. Expand market share; 3.
                      International market obtained revenue. 6-10% of the net
                      income of the company to be derived from international
                      markets as a short-term goal; 4. Increase labor
                      productivity; 5. Improve resource efficiency.
                    </p>
                    <p>
                      The successful project implementation and achievement of
                      goals are a prerequisite of achieving a strong development
                      at Bulmag AD. All this will increase significantly the
                      competitiveness of the company and will allow the seizure
                      of solid international market positions.
                    </p>
                    <p>
                      Achieving these objectives directly corresponds with the
                      objectives of this procedure "to increase the production
                      capacity and enhance export potential." Implementation of
                      project goals and optimize production processes and expand
                      the potential of the company to a wider range of services.
                      This corresponds to the other end of the OP "Innovation
                      and Competitiveness" 2014-2020, namely "sustainable growth
                      by fostering a more competitive economy with more
                      efficient use of resources".
                    </p>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-secondary"
                    points="560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default Projects;
