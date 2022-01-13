import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./IndexApp";

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
}
