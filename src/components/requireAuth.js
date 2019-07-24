//this is higher order component, a functon wrap component

import React, { Component } from "react";

export default ChildComponent => {
    //ComposedComponent = ChildComponent + reusable logic
    class ComposedCompnent extends Component {
        render() {
            return <ChildComponent />;
        }
    }

    return ComposedCompnent;
};
