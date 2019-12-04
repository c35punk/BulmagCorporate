import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "../IndexSections/Modals";

import { Card, CardBody, Badge, Col } from "reactstrap";

class Product extends React.Component {
  render() {
    return (
      <Col lg="4">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4"></div>
            <img
              src={this.props.product.image}
              alt=""
              style={{ width: "150px"}}
            />

            <h6 className="text-primary">{this.props.product.description}</h6>
            <p className="description mt-3">{this.props.product.name}</p>
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
            <Modal
              className="mt-3"
              color="primary"
              to="/profile"
              tag={Link}
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
