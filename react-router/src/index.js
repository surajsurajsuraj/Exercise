import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Navbar from "./Navbar";
import Person from "./Person";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:id" children={<Person />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<ReactRouterSetup />, document.getElementById("root"));
