import React, { Component } from "react";
import routes from "../config/routes";
import { Routes, Route } from "react-router-dom";
import { HttpProvider } from "../services/http-service";
import "./app.css";

class App extends Component {
  render() {
    return (
      <HttpProvider>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </HttpProvider>
    );
  }
}

export default App;
