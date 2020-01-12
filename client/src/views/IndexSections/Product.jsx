import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modals";

import { Card, CardBody, Badge, Col } from "reactstrap";

class Product extends React.Component {
  render() {
    return (
      <Col lg="4">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <img
              src={this.props.product.image}
              alt=""
              style={{ width: "150px" }}
            />

            <h6 className="text-primary">{this.props.product.description}</h6>
            <div>
              <Badge color="primary" pill className="mr-1">
                {this.props.product.name}
              </Badge>
            </div>
            <Modal
              className="mt-3"
              color="primary"
              productUrl={this.props.product.productUrl}
              description={this.props.product.description}
            />
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default Product;
