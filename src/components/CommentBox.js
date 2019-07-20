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

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea
                        value={this.state.comment}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>

                <button onClick={this.props.fetchComments}>
                    Fetch Comments
                </button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { saveComment, fetchComments };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentBox);
