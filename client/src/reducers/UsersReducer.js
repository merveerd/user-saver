import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
} from "../actions/types";

const INITIAL_STATE = {
  users: [],
  loading: false,
};

const State = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER_START: {
      console.log("start jkk");
      return { ...state, loading: true };
    }
    case CREATE_USER_SUCCESS: {
      return { ...state, loading: false, users: action.payload };
    }
    case CREATE_USER_FAILED: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};
export default State;
