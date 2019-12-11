import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/bulmag-design-system-react.scss";
import Index from 'views/Index'

ReactDOM.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  document.getElementById("root")
);
