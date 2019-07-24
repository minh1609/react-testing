//this is higher order component, a functon wrap component

import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
    //ComposedComponent = ChildComponent + reusable logic
    class ComposedCompnent extends Component {
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
            //pass all props
            return <ChildComponent {...this.props} />;
        }
    }

    const mapStateToProps = state => ({
        auth: state.auth
    });

    return connect(mapStateToProps)(ComposedCompnent);
};
