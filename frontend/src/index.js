import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { createBrowserHistory } from "history";


export const history = createBrowserHistory();

ReactDOM.render(<App />, document.getElementById("root"));