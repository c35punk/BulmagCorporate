import React from "react";

// reactstrap components
import { Container, Row, Col, Input, Label } from "reactstrap";
import { Parallax } from "react-parallax";
import { isMobile } from "react-device-detect";
import EuropeanProjectInfo from "views/IndexSections/EuropeanProject";

class Projects extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    let image = isMobile ? (
      <Col>
        <img
          src="https://katina.bg/wp-content/uploads/2018/04/bl-euro.jpg"
          alt="..."
          style={{
            width: "330px",
            height: "455px",
            objectFit: "contain"
          }}
        />
      </Col>
    ) : (
      <Col>
        <img
          src="https://katina.bg/wp-content/uploads/2018/04/bl-euro.jpg"
          alt="..."
        />
      </Col>
    );

    return (
      <>
        <main ref="main" className="text-darker">
          <div className="position-relative">
            <Parallax
              blur={{ min: -1, max: 1 }}
              bgImage={require("../../assets/img/pics-vte5/IMG_0854.jpg")}
              bgImageAlt="the dog"
              strength={150}
            >
              <div className="shape shape-style-1 shape-default "></div>
              <section className="section section-md section-shaped mb--200">
                <Container className="py-lg-md d-flex">
                  <div className="col px-2 mb--200">
                    <Row>
                      <Col lg="6">
                        <h1 className="display-3 text-white">PROJECTS</h1>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <div style={{ height: !isMobile ? "350px" : "150px" }} />
              </section>
            </Parallax>
            <EuropeanProjectInfo />
          </div>
        </main>
      </>
    );
  }
}

export default Projects;
