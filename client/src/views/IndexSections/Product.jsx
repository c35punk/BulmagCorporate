import React from "react";
import Modal from "./Modals";

import { Card, CardBody, Badge, Col } from "reactstrap";

class Product extends React.Component {
  render() {
    let { name, description, image, type, productUrl } = this.props.product;

    let size = type === "Banking" ? 2 : 3;

    let styles =
      type === "Banking"
        ? {
            width: "90px",
            height: "105px",
            objectFit: "scale-down"
          }
        : {
            width: "130px",
            height: "155px",
            objectFit: "scale-down"
          };
    return (
      <Col lg={size}>
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <img src={image} alt="" style={styles} />

            <h6 className="text-primary">{description}</h6>
            <div>
              <Badge color="info" pill className="mr-1">
                {name}
              </Badge>
            </div>
            <Modal
              className="mt-3"
              color="info"
              productUrl={productUrl}
              description={description}
            />
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default Product;
