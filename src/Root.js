import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "reducers";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

class Root extends React.Component {
    render() {
        return <Provider store={store}>{this.props.children}</Provider>;
    }
}

export default Root;

//Root component is built for reusable Provider tag, (useful for testing)
