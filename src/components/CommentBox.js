import React, { Component } from "react";
import { connect } from "react-redux";

import { saveComment, fetchComments } from "actions";

class CommentBox extends Component {
    state = { comment: "" };

    handleChange = e => {
        this.setState({ comment: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.saveComment(this.state.comment);

        this.setState({ comment: "" });
    };

    componentDidMount() {
        this.navigateAway();
    }

    componentDidUpdate() {
        this.navigateAway();
    }

    navigateAway = () => {
        if (!this.props.auth) {
            this.props.history.push("/");
        }
    };

    render() {
        return (
            <div className="ui container">
                <form onSubmit={this.handleSubmit} className="ui form field">
                    <label>Add a comment</label>
                    <div className="field">
                        <textarea
                            value={this.state.comment}
                            onChange={this.handleChange}
                            rows="3"
                        />
                    </div>

                    <button className="ui teal button">Submit Comment</button>
                </form>

                <button
                    onClick={this.props.fetchComments}
                    className="ui blue button"
                    style={{ marginTop: "10px" }}
                >
                    Fetch Comments
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = { saveComment, fetchComments };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentBox);
