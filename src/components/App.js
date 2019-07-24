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
                <button
                    className="ui button"
                    onClick={() => this.props.changeAuth(false)}
                >
                    Sign Out
                </button>
            );
        } else {
            return (
                <button
                    className="ui secondary button"
                    onClick={() => this.props.changeAuth(true)}
                >
                    Click to Sign In
                </button>
            );
        }
    };

    renderHeader = () => {
        return (
            <React.Fragment>
                <div className="ui secondary menu">
                    <Link className="item" to="/">
                        Home
                    </Link>
                    <Link className="item" to="/post">
                        Post
                    </Link>
                    {this.renderButton()}
                </div>
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
