import React, { Component } from "react";
import routes from "../config/routes";
import ToastContainer from "../components/toastify/toastContainer";
import { Switch, Route } from "react-router-dom";
import { HttpProvider } from "../services/http-service";
import { StoreProvider } from "../store";
import "./app.css";

class App extends Component {
  render() {
    return (
      <StoreProvider>
        <HttpProvider>
          <Switch>
            {routes.map((route, index) => (
              <Route
                exact
                key={index}
                path={route.path}
                render={(props) => <route.component {...props} />}
              />
            ))}
          </Switch>
          <ToastContainer />
        </HttpProvider>
      </StoreProvider>
    );
  }
}

export default App;
