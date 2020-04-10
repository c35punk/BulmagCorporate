import React from "react";

import { Button, Modal } from "reactstrap";
import Loading from "./Loading";
import { isMobile } from "react-device-detect";

class Modals extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
    let url = this.props.productUrl || this.props.serviceUrl;
    console.log(this.props);

    let certStyles = {
      float: "left",
      display: "inline",
      width: "20em",
      wordWrap: "break-word",
      fontSize: "1em"
    };
    let { description, lenovothreedtours } = this.props;

    let buttonText = !!lenovothreedtours ? "Lenovo DCG 3D Tour" : "Details";

    let pdfImage = (
      <img
        src="https://www.pikpng.com/pngl/b/585-5853219_511e-medical-information-form-transparent-background-pdf-icon.png"
        alt=""
        style={{
          width: "auto",
          height: "2.5em",
          wordWrap: "break-word",
          objectFit: "scale-down"
        }}
      />
    );
    return (
      <>
        <br />
        <Button
          className="mb-2"
          color="dark"
          style={this.props.certificateUrl ? certStyles : null}
          type="button"
          onClick={() =>
            !isMobile
              ? this.toggleModal("notificationModal")
              : window.open(url, "_self")
          }
        >
          {this.props.certificateUrl ? pdfImage : null}

          {this.props.certificateUrl
            ? description.slice(0, 14) + "..."
            : buttonText}
        </Button>
        <Modal
          className="modal-dialog-centered modal-primary modal-lg"
          contentClassName="bg-gradient-default"
          isOpen={this.state.notificationModal}
          toggle={() => this.toggleModal("notificationModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification">
              {description}
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("notificationModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="py-6 text-center">
              <div class="embed-responsive embed-responsive-16by9">
                <Loading />
                <iframe
                  class="embed-responsive-item"
                  src={
                    this.props.productUrl ||
                    this.props.serviceUrl ||
                    this.props.lenovothreedtours
                  }
                  allowfullscreen
                  title="Product URL"
                ></iframe>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default Modals;
