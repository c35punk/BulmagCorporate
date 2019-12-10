import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "https://wallpaperaccess.com/full/1398628.jpg",
    caption: (
      <Button
        className="btn-white mt-4"
        color="default"
        to="/products#HW"
        tag={Link}
      >
        Learn more
      </Button>
    ),
    header: "System Integration Services"
  },
  {
    src:
      "https://i.pinimg.com/originals/bd/16/c5/bd16c57405f3142d4cc740e0ee44d536.jpg",

    caption: (
      <Button
        className="btn-white mt-4"
        color="default"
        to="/products#Banking"
        tag={Link}
      >
        Learn more
      </Button>
    ),
    header: "Payment Solutions"
  },
  {
    src:
      "https://www.larutadelsorigens.cat/wallpic/full/31-316749_sql-server-wallpaper-data-center-wallpaper-4k.jpg",
    caption: (
      <Button
        className="btn-white mt-4"
        color="default"
        to="/services#Maintenance"
        tag={Link}
      >
        Learn more
      </Button>
    ),
    header: "Post Warranty Enterprise Maintenance"
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center justify-content-center">
              <Col className="mb-lg-cover" lg="12">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
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
