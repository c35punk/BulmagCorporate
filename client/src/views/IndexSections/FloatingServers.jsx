import React from 'react'

import {Container, Row, Col} from 'reactstrap'

const FloatingServers = props => {
    return (
        <section className="section section-lg">
        <Container>
          <Row className="row-grid align-items-center">
            <Col className="order-md-6" md="6">
              <img
                alt="..."
                className="img-fluid floating"
                src="https://www.jvzoohost.com/img/jvZoo-images/solutions-server.png"
              />
            </Col>
            <Col className="order-md-6" md="6">
              <img
                alt="..."
                className="img-fluid floating"
                src="https://www.freepngimg.com/thumb/graphic_design/51153-6-home-server-picture-free-png-hq.png"
              />
            </Col>
          </Row>
        </Container>
      </section>
 
    )
}

export default FloatingServers