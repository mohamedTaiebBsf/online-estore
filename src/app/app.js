import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "../config/routes";
import "./app.css";

class App extends Component {
  render() {
    return (
      <>
        {/* <h1>Welcome to Scandiweb Junior React Developer Assignment</h1> */}
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </>
    );
  }
}

export default App;
