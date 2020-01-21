import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src:
      "https://blog.bookaway.com/blog/wp-content/uploads/2019/08/Downtown-Hong-Kong-and-technology.jpg",

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
      "https://wordatom.com/wp-content/uploads/2017/12/data-center-of-a-web-hosting-company.jpg",
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
