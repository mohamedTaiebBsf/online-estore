import React, { Component } from "react";
import routes from "../config/routes";
import { Routes, Route } from "react-router-dom";
import { HttpProvider } from "../services/http-service";
import { StoreProvider } from "../store";
import "./app.css";

class App extends Component {
  render() {
    return (
      <StoreProvider>
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
      </StoreProvider>
    );
  }
}

export default App;
