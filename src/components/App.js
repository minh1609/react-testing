import React, { Component } from "react";

import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

class App extends Component {
    render() {
        return (
            <div>
                <CommentList />
                <CommentBox />
            </div>
        );
    }
}

export default App;
