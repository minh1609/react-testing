import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
    renderComment = () => {
        return this.props.comments.map(comment => {
            return <li key={comment}>{comment}</li>;
        });
    };

    render() {
        return <div>{this.renderComment()}</div>;
    }
}

const mapStateToProps = state => ({
    comments: state.comments
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList);
