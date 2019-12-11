import React from "react";

import { Button, Modal } from "reactstrap";
import Loading from "./Loading";

class Modals extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
        <br />
        <Button
          block
          className="mb-2"
          color="default"
          type="button"
          onClick={() => this.toggleModal("notificationModal")}
        >
          Details
        </Button>
        <Modal
          className="modal-dialog-centered modal-primary modal-lg"
          contentClassName="bg-gradient-default"
          isOpen={this.state.notificationModal}
          toggle={() => this.toggleModal("notificationModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification">
              {this.props.description}
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
                  src={this.props.productUrl || this.props.machineUrl}
                  allowfullscreen
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
