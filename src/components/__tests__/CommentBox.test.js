import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
    //.mount: fullDOM render
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

it("has text area and a button", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1);
});

describe("Enter commemt in text area", () => {
    beforeEach(() => {
        wrapped.find("textarea").simulate("change", {
            target: { value: "new comment" }
        });
        wrapped.update();
    });

    it("has a text area can be type", () => {
        //.prop: get prop from this component
        expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    });

    it("form submitted, textarea gets emptied", () => {
        wrapped.find("form").simulate("submit");
        wrapped.update();

        expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
});
