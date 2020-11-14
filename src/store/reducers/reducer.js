import { LOADING } from "../actions/types";
import initialState from "../initialState";

function loadReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, value: action.payload };

    default:
      return state;
  }
}

export default loadReducer;
