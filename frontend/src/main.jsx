import React from "react";
import ReactDOM from "react-dom/client";
import ContentGenerationApp from "./ContentGenerationApp";
import "./styles.css";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContentGenerationApp />
    </Provider>
  </React.StrictMode>
);
