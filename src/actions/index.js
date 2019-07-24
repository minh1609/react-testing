import { SAVE_COMMENT, CHANGE_AUTH, FETCH_COMMENTS } from "./type";
import axios from "axios";

export const saveComment = comment => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};

export const fetchComments = () => async (dispatch, getState) => {
    const res = await axios.get("http://jsonplaceholder.typicode.com/comments");

    dispatch({ type: FETCH_COMMENTS, payload: res.data });
};

export const changeAuth = isLoggedIn => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
};
