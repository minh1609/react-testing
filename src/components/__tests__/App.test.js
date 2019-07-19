import React from "react";
import ReactDOM from "react-dom";

import App from "../App";
import { exportAllDeclaration } from "@babel/types";

it("show a comment box", () => {
    //create a fake div inside a terminal
    const div = document.createElement("div");

    ReactDOM.render(<App />, div);
    console.log(div.innerText);

    expect(div.innerHTML).toContain("CommentBox");

    //clean up
    ReactDOM.unmountComponentAtNode(div);
});
