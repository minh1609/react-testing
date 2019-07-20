import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "reducers";
import reduxThunk from "redux-thunk";

class Root extends React.Component {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    store = createStore(
        reducers,
        this.props.initialState, //for testing
        this.composeEnhancers(applyMiddleware(reduxThunk))
    );

    render() {
        return <Provider store={this.store}>{this.props.children}</Provider>;
    }
}

export default Root;

//Root component is built for reusable Provider tag, (useful for testing)
