import React, { Link } from "react";

// reactstrap components
import { Container,Button } from "reactstrap";

class Presentation extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons pb-250">
          <Container>
            <div className="blur--hover">
              <div className="icons-container blur-item mt-5 on-screen">
                <i className="icon ni ni-diamond" />
                <i className="icon icon-sm ni ni-album-2" />
                <i className="icon icon-sm ni ni-app" />
                <i className="icon icon-sm ni ni-atom" />
                <i className="icon ni ni-bag-17" />
                <i className="icon ni ni-bell-55" />
                <i className="icon ni ni-credit-card" />
                <i className="icon icon-sm ni ni-briefcase-24" />
                <i className="icon icon-sm ni ni-building" />
                <i className="icon icon-sm ni ni-button-play" />
                <i className="icon ni ni-calendar-grid-58" />
                <i className="icon ni ni-camera-compact" />
                <i className="icon ni ni-chart-bar-32" />
              </div>
              <Button
                className="blur-hidden h5 text-success"
                to="/about"
                tag={Link}
              >
                Explore our story
              </Button>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Presentation;
