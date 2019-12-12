import React from "react";

// reactstrap components
import { Jumbotron } from "reactstrap";

class NotFound extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <Jumbotron>
            <h1 className="display-3">NOT AUTHORIZED TO VIEW THIS PAGE</h1>
          </Jumbotron>
        </main>
      </>
    );
  }
}

export default NotFound;
