import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Landing";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/main" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
