import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from "./Modals"

import {
    Card,
    CardBody,
    Badge,
    Button,
    Col

} from 'reactstrap';

class Service extends React.Component {
    render() {
        return (
            <Col lg="4" >
                <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary">
                            {this.props.product.name}
                        </h6>
                        <p className="description mt-3">
                            {this.props.product.description}
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
                        <Modal className="mt-3"
                            color="primary"
                            to="/profile" tag={Link} />
                    </CardBody>
                </Card>
            </Col>
        )
    }
}
export default Service;