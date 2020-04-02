import React from "react";

import { Button, Modal } from "reactstrap";
import Loading from "./Loading";
import { isMobile } from "react-device-detect";

class Machine3DModal extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
    let {
      manufacturer,
      machineName,
      productNumber,
      serialNumber,
      type
    } = this.props.machine;
    console.log(this.props);

    return (
      <>
        <Button
          className="mb-2"
          color="primary"
          type="button"
          onClick={() =>
            !isMobile
              ? this.toggleModal("notificationModal")
              : window.open(
                  `https://www.lenovofiles.com/3dtours/products/superblaze/${machineName}/index.html`,
                  "_self"
                )
          }
        >
          3D
        </Button>
        <Modal
          className="modal-dialog-centered modal-primary modal-lg"
          contentClassName="bg-gradient-default"
          isOpen={this.state.notificationModal}
          toggle={() => this.toggleModal("notificationModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification">
              {manufacturer +
                " " +
                machineName +
                " PN: " +
                productNumber +
                " SN: " +
                serialNumber}
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
                  src={`https://www.lenovofiles.com/3dtours/products/superblaze/${machineName}/index.html`}
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

export default Machine3DModal;
