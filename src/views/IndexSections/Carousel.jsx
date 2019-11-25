import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/1809Tdj/videoblocks-data-center-technician-walking-through-server-rack-corridor-visually-inspecting-working-server-cabinets-shot-on-red-epic-w-8k-helium-cinema-camera_rzdiis6ol_thumbnail-full01.png",
    altText: "ALT TEXT",
    caption: "CAPTION",
    header: "Part 1"
  },
  {
    src: "https://wallpaperaccess.com/full/398348.jpg",
    altText: "",
    caption: "",
    header: "Part 2"
  },
  {
    src: "https://images.pond5.com/servers-close-modern-data-center-footage-084168764_prevstill.jpeg",
    altText: "",
    caption: "",
    header: "Part 3"
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-0 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center justify-content-center">
              <Col className="mb-lg-cover" lg="12">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-center">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-blue font-weight-light">
                  Bootstrap carousel
                </h1>
                <p className="lead text-white mt-4">
                  Argon Design System comes with four pre-built pages to help
                  you get started faster. You can change the text and images and
                  you're good to go.
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                  See all components
                </Button>
              </Col>

            </Row>
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
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
