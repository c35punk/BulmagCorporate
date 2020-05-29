import React from "react";

// reactstrap components
import { UncontrolledAlert } from "reactstrap";

class Alerts extends React.Component {
  render() {
    return (
      <>
        <UncontrolledAlert color="danger" fade={true}>
          <span className="alert-inner--text ml-1">{this.props.children}</span>
        </UncontrolledAlert>
      </>
    );
  }
}

export default Alerts;
