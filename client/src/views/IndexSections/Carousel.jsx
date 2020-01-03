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
          <Container className="py-lg mb-lg-cover col-lg-9">
            <Row className="justify-content-between align-items-center justify-content-center">
              <Col className="mb-lg-cover" lg="12">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
              {/* <Col className="mb-5 mb-lg-0" lg="12">
                <h1 className="display-6 text-secondary justify-content-center">
                  Over 25 Years of Experience in System Integration
                </h1>

                <Button
                  className="btn-white mt-4 justify-content-center"
                  lg="12"
                  color="default"
                  to="/projects"
                  tag={Link}
                >
                  See all Projects
                </Button>
              </Col> */}
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
