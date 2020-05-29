import React from "react";

import { Button, Modal } from "reactstrap";
import Loading from "./Loading";
import { isMobile } from "react-device-detect";

class Machine3DModal extends React.Component {
  state = {};
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  render() {
    let {
      manufacturer,
      machineName,
      productNumber,
      serialNumber,
    } = this.props.machine;
    let url = `https://lenovopress.com/#term=${machineName}&sort=last_update`;
    return (
      <>
        <Button
          className="mb-2"
          color="primary"
          type="button"
          onClick={() =>
            !isMobile
              ? this.toggleModal("notificationModal")
              : window.open(url, "_self")
          }
        >
          &#8505;
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
                  src={`https://lenovopress.com/servers/thinksystem/${machineName}#sort=relevance`}
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
