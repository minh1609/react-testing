import commentsReducer from "reducers/commentReducer";
import { SAVE_COMMENT } from "actions/type";

it("handle action type SAVE_COMMENT", () => {
    const action = {
        type: SAVE_COMMENT,
        payload: "new comment"
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual(["new comment"]);
});

it("handle action with no type (default case)", () => {
    const action = {
        type: "",
        payload: "new comment"
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual([]);
});
