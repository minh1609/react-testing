import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
    renderComment = () => {
        return this.props.comments.map(comment => {
            return (
                <div key={comment} className="ui message">
                    {comment}
                </div>
            );
        });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "20px" }}>
                {this.renderComment()}
            </div>
        );
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
