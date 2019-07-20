import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";

let wrapped;

beforeEach(() => {
    moxios.install();

    //intercept request from axios
    moxios.stubRequest(
        "http://jsonplaceholder.typicode.com/comments",
        //replace actual result by this object
        {
            status: 200,
            response: [{ name: "FETCH1" }, { name: "FETCH2" }]
        }
    );
    wrapped = mount(
        <Root>
            <App />
        </Root>
    );
});

afterEach(() => {
    moxios.uninstall();
    wrapped.unmount();
});

//done: do not auto finish unless if done() hasnt kick off
it("fetch a list of comments and display them", done => {
    wrapped.find(".blue").simulate("click");

    //wait for network request
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find(".message").length).toEqual(2);
        done();
    });
});
