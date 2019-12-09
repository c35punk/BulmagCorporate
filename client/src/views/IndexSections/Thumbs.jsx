import React from 'react'

import {
    Card,
    CardBody,
    Badge,
    Button,
    Col

} from 'reactstrap';

const Thumbs = () => {
        return (
            <
            <Card className="row">
            <div className="col-lg-4">
                <div className="c_box_item">
                    <a href="#"><h4><i className="fa fa-server" aria-hidden="true"></i>Enterprise Class <br>Vendors
                        and Solutions</h4></a>
                    <p>
                    <p style="text-align: justify;">Bulmag AD offer full range of Lenovo®, NetApp®, INFINIDAT®,
                        VMware®, RedHat®,
                        Microsoft®, Cisco®, TransactionSystems®, PAX®, and Datecs® products.</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="c_box_item">
                    <a href="#"><h4><i className="fa fa-clock-o" aria-hidden="true"></i>25+ Years Experience <br>in
                        System Integration</h4></a>
                    <p>
                    <p style="text-align: justify;"><!--more--></p>
                    <p style="text-align: justify;">With more than 100+ successful projects,<br>
                        Bulmag AD is surely your trusted companion on the path to digital transformation. </p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="c_box_item">
                    <a href="#"><h4><i className="fa fa-thumbs-up" aria-hidden="true"></i>Continual Commitment <br>to
                        Professional Excellence
                    </h4></a>
                    <p>
                    <p style="text-align: justify;">We are maintaining the tools and resources needed to deliver our
                        services
                        more effectively yielding great returns, more efficient work cycles, while achieving
                        positive impact at the end of the day.</p>
                </div>
                </div>
            </Card>
        
        )
}

export default Thumbs;