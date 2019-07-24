import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";

import Root from "Root";

//implement redux-dev-tool, redux thunk

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Root>,
    document.querySelector("#root")
);
