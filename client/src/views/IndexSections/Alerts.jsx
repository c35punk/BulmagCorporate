import React from "react";

// reactstrap components
import { UncontrolledAlert } from "reactstrap";

class Alerts extends React.Component {
  render() {
    return (
      <>
        <UncontrolledAlert color="danger" fade={true}>
          <span className="alert-inner--icon">
            <i className="ni ni-support-16" />
          </span>
          <span className="alert-inner--text ml-1">
            <strong>Error!</strong> This is an error alert—check it out!
          </span>
        </UncontrolledAlert>
      </>
    );
  }
}

export default Alerts;
