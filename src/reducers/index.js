import { combineReducers } from "redux";

import commentReducer from "./commentReducer";
import authReducer from "reducers/auth";

export default combineReducers({
    comments: commentReducer,
    auth: authReducer
});
