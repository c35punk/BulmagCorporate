import React from "react";

// reactstrap components
import { Badge, Button, Card, CardBody, Container } from "reactstrap";

class CardExample extends React.Component {
  render() {
    return (
      <Container>
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <div className="c_box_item">
              <a href="#">
                <h4>
                  <i className="fa fa-server" aria-hidden="true"></i>
                  Enterprise Class <br />
                  Vendors and Solutions
                </h4>
              </a>

              <p>
                Bulmag AD offer full range of Lenovo®, NetApp®, INFINIDAT®,
                VMware®, RedHat®, Microsoft®, Cisco®, TransactionSystems®, PAX®,
                and Datecs® products.
              </p>
            </div>
            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
              <i className="ni ni-check-bold" />
            </div>
            <h6 className="text-primary text-uppercase">Download bulmag</h6>
            <p className="description mt-3">
              bulmag is a great free UI package based on Bootstrap 4 that
              includes the most important components and features.
            </p>
            <div>
              <Badge color="primary" pill className="mr-1">
                design
              </Badge>
              <Badge color="primary" pill className="mr-1">
                system
              </Badge>
              <Badge color="primary" pill className="mr-1">
                creative
              </Badge>
            </div>
            <Button
              className="mt-4"
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Learn more
            </Button>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default CardExample;
