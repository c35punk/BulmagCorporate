import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { Parallax } from "react-parallax";
import { isMobile } from "react-device-detect";

class Disclaimer extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main" className="text-darker">
          <div className="position-relative">
            <Parallax
              blur={{ min: -1, max: 1 }}
              bgImage={require("../../assets/img/pics-vte5/ev-gpjvRZyavZc-unsplash.jpg")}
              bgImageAlt="the dog"
              strength={950}
            >
              <div className="shape shape-style-1 shape-default "></div>
              <section className="section section-md section-shaped mb--200">
                <Container className="py-lg-md d-flex">
                  <div className="col px-2 mb--200">
                    <Row>
                      <Col lg="6">
                        <h1 className="display-3 text-white">DISCLAIMER</h1>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <div style={{ height: !isMobile ? "350px" : "150px" }} />
              </section>
            </Parallax>
            <Container className="py-lg-md d-flex">
              <div className="col px-2">
                <Col>
                  <h4 className="text-primary">Statement</h4>
                  All the information on this website -{" "}
                  <strong>https://www.bulmag.bg</strong> - is published in good
                  faith and for general information purpose only.{" "}
                  <strong>Bulmag AD</strong> does not make any warranties about
                  the completeness, reliability and accuracy of this
                  information. Any action you take upon the information you find
                  on this website (Bulmag AD), is strictly at your own risk.
                  Bulmag AD will not be liable for any losses and/or damages in
                  connection with the use of our website. From our website, you can visit other
                  websites by following hyperlinks to such external sites. While
                  we strive to provide only quality links to useful and ethical
                  websites, we have no control over the content and nature of
                  these sites. These links to other websites do not imply a
                  recommendation for all the content found on these sites. Site
                  owners and content may change without notice and may occur
                  before we have the opportunity to remove a link which may have
                  gone 'bad'. Please be also aware that when you leave our
                  website, other sites may have different privacy policies and
                  terms which are beyond our control. Please be sure to check
                  the Privacy Policies of these sites as well as their "Terms of
                  Service" before engaging in any business or uploading any
                  information.
                  <h4 className="text-primary">Consent</h4>
                  By using our website, you hereby consent to our disclaimer and
                  agree to its terms.
                  <h4 className="text-primary">Update</h4>
                  Should we update, amend or make any changes to this document,
                  those changes will be prominently posted here.
                </Col>
              </div>
            </Container>
          </div>
        </main>
      </>
    );
  }
}

export default Disclaimer;
