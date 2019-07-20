import ReactDOM from "react-dom";
import React from "react";

import App from "./components/App";

import Root from "Root";

//implement redux-dev-tool, redux thunk

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.querySelector("#root")
);
