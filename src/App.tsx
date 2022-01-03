import classNames from "classnames";
import React from "react";
import { Header } from "./Header";
import { isMobile } from "react-device-detect";
import { HashRouter, Redirect, Route } from "react-router-dom";
import "./App.scss";
import { Lab } from "./lab/Lab";

function App() {
  return (
    <div className="App">
      <div className={classNames(isMobile ? "mobile-container" : "container")}>
        <Header />
        <HashRouter>
          <Route path="/" exact>
            <Redirect to="/lab" />
          </Route>
          <Route path="/lab" component={Lab} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
