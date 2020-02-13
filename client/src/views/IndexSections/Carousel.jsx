import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src:
      "https://www.abb-conversations.com/wp-content/uploads/2015/11/new-york-540807_1920-1920x800.jpg",

    caption: (
      <Button className="btn-white mt-4" to="/products#HW" tag={Link}>
        Learn more
      </Button>
    ),
    header: (
      <div
        style={{
          textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
          backgroundColor: "rgba(79, 79, 79, 0.65)"
        }}
      >
        System Integration Services
      </div>
    )
  },
  {
    src:
      "https://damassets.autodesk.net/content/dam/autodesk/www/solutions/bim/images/stories/the-david-miller-story-story-page-header-1920x800.jpg",

    caption: (
      <Button
        className="btn-white mt-4 text-info"
        to="/products#Banking"
        tag={Link}
      >
        Learn more
      </Button>
    ),
    header: (
      <div
        style={{
          textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
          backgroundColor: "rgba(79, 79, 79, 0.65)"
        }}
      >
        Payment Solutions
      </div>
    )
  },
  {
    src:
      "https://atfip-formations.fr/wp-content/uploads/2018/10/technicien-datacenter-1920x800.jpg",
    caption: (
      <Button className="btn-white mt-4" to="/services#Maintenance" tag={Link}>
        Learn more
      </Button>
    ),
    header: (
      <div
        style={{
          textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
          backgroundColor: "rgba(79, 79, 79, 0.65)"
        }}
      >
        Post Warranty Enterprise Maintenance
      </div>
    )
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <Container className="col-12">
          <Row className="justify-content-between align-items-center justify-content-center">
            <div className="rounded shadow-lg overflow-hidden transform-perspective-center">
              <UncontrolledCarousel items={items} />
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Carousel;
