import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { Parallax } from "react-parallax";
import { isMobile } from "react-device-detect";

class PrivacyPolicy extends React.Component {
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
              strength={!isMobile ? 950 : 350}
            >
              <div className="shape shape-style-1 shape-default "></div>
              <section className="section section-md section-shaped mb--200">
                <Container className="py-lg-md d-flex">
                  <div className="col px-2 mb--200">
                    <Row>
                      <Col lg="6">
                        <h1
                          className={
                            isMobile
                              ? "display-4 text-white"
                              : "display-3 text-white"
                          }
                        >
                          PRIVACY POLICY
                        </h1>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <div style={{ height: !isMobile ? "350px" : "150px" }} />
              </section>
              {/* <a
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textDecoration: "none",
                  padding: "4px 6px",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif",
                  fontSize: "12px",
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  display: "inline-block",
                  borderRadius: "3px"
                }}
                href="https://unsplash.com/@ev?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                target="_blank"
                rel="noopener noreferrer"
                title="Download free do whatever you want high-resolution photos from ev"
              >
                <span style={{ display: "inline-block", padding: "2px 3px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      height: "12px",
                      width: "auto",
                      position: "relative",
                      verticalAlign: "middle",
                      top: "-2px",
                      fill: "white"
                    }}
                    viewBox="0 0 32 32"
                  >
                    <title>unsplash-logo</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                  </svg>
                </span>
                <span style={{ display: "inline-block", padding: "2px 3px" }}>
                  ev
                </span>
              </a> */}
            </Parallax>
            <Container className="py-lg-md d-flex">
              <div className="col px-2">
                <Col>
                  <h4 className="text-primary"> Cookies</h4>
                  <p>
                    <b> Information stored on your device. </b>
                    Cookies are small text files containing letters and numbers
                    that are created and stored on your computer, tablet, mobile
                    phone, or other device using the Internet. We can associate
                    this information with your account. Most browsers have a
                    cookie ban option, but if you have disabled them, some of
                    the <b> Bulmag AD services</b>
                    will not work. Some third-party services we use, such as
                    Google Analytics, can create their own cookies. This policy
                    applies only to our use of cookies and not to the use of
                    cookies from third parties. You can at any time delete the
                    cookies stored on your device. Check how this is done in
                    your browser's user guide.
                  </p>

                  <h4 className="text-primary">The information we collect</h4>
                  <p>
                    <b>User information.</b> When you receive an email regarding{" "}
                    <b>Commercial Campaign organized by Bulmag</b>, and you
                    decide to contact us we ask you for your e-mail address,
                    names, mobile phone number, city and country. This data is
                    necessary to be able to recognize you successfully when you
                    want to get back to you with further information.{" "}
                  </p>
                  <p>
                    <b>
                      Information about your use of <b>Bulmag AD</b>
                    </b>{" "}
                    We receive certain information when using the{" "}
                    <b> Bulmag AD</b>
                    portal . It includes data about your device, software, and
                    operating system when you access our service, your Internet
                    Protocol address and the date and time of each request to{" "}
                    <b>the current campaign</b> .
                  </p>
                  <p>
                    <b>Information provided when interacting with us.</b> You
                    can provide personal data in a phone call, e-mail, respond
                    to a poll, or interact with us through other services such
                    as Facebook.
                  </p>
                  <p>
                    <b>Information from other sources. </b>We may collect
                    additional information about you from third parties to find
                    out how to deliver a better service.
                  </p>

                  <h4 className="text-primary">
                    How we use information for you
                  </h4>
                  <p>
                    <b>Improving services. </b>We use your information to in
                    order to deliver better service and understand how you use
                    it, customize your expectations, prevent abuse, provide
                    support, sell and market our products. We use your
                    information only internally and if necessary to meet these
                    goals.
                  </p>
                  <h4 className="text-primary">
                    How do we reveal the information to you?
                  </h4>
                  <p>
                    We share the information about you that identifies you only
                    in the limited circumstances outlined below.{" "}
                    <b> Bulmag AD</b> does not sell information about you, nor
                    does it share with advertisers.
                  </p>
                  <p>
                    <b>With your consent. </b>We may only share your information
                    with your explicit consent.
                  </p>
                  <p>
                    <b>By Law.</b>We may disclose the information to you if we
                    believe that it is required to comply with the law. If we
                    will disclose information about you, it is our policy to
                    notify you in advance, unless a law or court order prohibits
                    us from doing so. We may disclose the information to you and
                    without giving you prior notice if we believe this is
                    necessary to prevent the commission of a crime. Nothing in
                    this Statement is intended to limit any legal objections or
                    protections you may have against requests to make disclosure
                    of information to you, including requests from the State.
                  </p>
                  <p>
                    <b>Sale or merger. </b>If in the future part or all of the
                    company is sold, merged or otherwise transferred to another
                    company, your information may be transferred as part of that
                    transaction. If this happens, Bulmag AD will take steps to
                    ensure that your information is treated in accordance with
                    this Statement.
                  </p>

                  <h4 className="text-primary">Data protection</h4>
                  <p>
                    <b>Bulmag AD</b> designed number of layers of protection for
                    its services.
                  </p>
                  <p>
                    <b>SSL /TLS</b> We use Secure Sockets Layer (SSL) /
                    Transport Layer Security (TLS) to create a security tunnel
                    to protect the data when they are transferred between the
                    browser you are using and the servers of <b> Bulmag AD</b> .
                  </p>
                  <p>
                    <b>SSL certificate. </b>We use the SSL certificate
                    registered with Bulmag AD. As you see a green padlock at the
                    top left corner of the browser, you can be sure that you are
                    in <b> Bulmag AD</b> , not on a page that represents us.
                  </p>
                  <p>
                    <b>Physical security. </b>The portal <b> Bulmag AD</b> is
                    physically located on servers owned by Bulmag AD, located in
                    a datacenter owned by Bulmag AD.
                  </p>
                  <p>
                    <b>Encrypt passwords. </b>We do not store the actual
                    password for your account, but apply the hash and salt
                    action to it to help protect your password from possible
                    threats.
                  </p>
                  <p>
                    <b>Restricted access to information. </b>We limit the number
                    of employees who have access to user data through internal
                    control and established access policies.
                  </p>
                  <p>
                    <b>
                      We are always very cautious against vulnerabilities in{" "}
                      <b> our sites and/or hosted services.</b>
                    </b>{" "}
                    If you find a vulnerability in our service, we would be
                    grateful to let us know and encourage you to do so
                    immediately. If you allow us to respond to you in reasonable
                    time before disclosing any information, and if you make
                    efforts to avoid a breach of security, damage to data and
                    interruption or degradation of our service in your
                    investigation, we will not: to initiate any legal action
                    against you or to require law enforcement to be investigated
                    and to investigate your actions.{" "}
                    <i> To report a vulnerability, please contact us.</i>
                  </p>
                  <h4 className="text-primary">
                    Provide the data you have stored
                  </h4>
                  <p>
                    <b>
                      You can always require us to send you all of your data
                      stored with us.{" "}
                    </b>{" "}
                    This can be by contacting our GDPR Department at
                    bulmag@bulmag.bg
                  </p>
                  <p>
                    <h4 className="text-primary">
                      {" "}
                      Changes to the Privacy Policy{" "}
                    </h4>
                    <p>
                      <b>
                        {" "}
                        We may revise the Privacy Policy anytime without prior
                        notice.
                      </b>
                    </p>

                    <h4 className="text-primary"> Contact </h4>
                    <p>
                      <b> We will be happy to contact you. </b> Bulmag AD
                      welcomes issues, concerns and feedback on this policy. If
                      you have any recommendations we ask you to share.{" "}
                    </p>
                    <p>
                      <b>
                        {" "}
                        As data subjects who have the right to complain to the
                        supervisor:{" "}
                      </b>
                      Commission for Personal Data Protection, Sofia, 1592, 2
                      Prof. Tsvetan Lazarov Blvd. E-mail: kzld@cpdp.bg Website:{" "}
                      <strong>www.cpdp.bg</strong>
                    </p>
                  </p>
                </Col>
              </div>
            </Container>
          </div>
        </main>
      </>
    );
  }
}

export default PrivacyPolicy;
