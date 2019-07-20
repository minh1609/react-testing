import { SAVE_COMMENT, FETCH_COMMENTS } from "../actions/type";

export default (state = [], action = { type: "", payload: "" }) => {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload];
        case FETCH_COMMENTS:
            const additionalComments = action.payload.map(
                comment => comment.name
            );
            return [...state, ...additionalComments];

        default:
            return state;
    }
};
