import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

//"it" is App component
it("show a comment box", () => {
    //return length of an array of comment box
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("show a comment list", () => {
    //return length of an array of comment box
    expect(wrapped.find(CommentList).length).toEqual(1);
});
