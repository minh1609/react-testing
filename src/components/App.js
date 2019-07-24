import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import { changeAuth } from "actions";

class App extends Component {
    renderButton = () => {
        if (this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)}>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={() => this.props.changeAuth(true)}>
                    Sign In
                </button>
            );
        }
    };

    renderHeader = () => {
        return (
            <React.Fragment>
                <Link to="/">Home</Link>
                <Link to="/post">Post</Link>
                {this.renderButton()}
            </React.Fragment>
        );
    };

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route path="/" component={CommentList} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = { changeAuth };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
