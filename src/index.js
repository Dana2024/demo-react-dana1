import React, { StrictMode } from "react";
import { ReactDOM } from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
import 'macro-css'

import Home from "./Components/Home";
import {App} from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

