import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "../config/routes";
import "./app.css";

class App extends Component {
  render() {
    return (
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    );
  }
}

export default App;
