import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
} from "../actions/types";

const INITIAL_STATE = {
  users: [],
  loading: false,
};

const State = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER_START: {
      return { ...state, loading: true };
    }
    case CREATE_USER_SUCCESS: {
      const refUsers = [...state.users];
      refUsers.push(action.payload);
      return { ...state, loading: false, users: refUsers };
    }
    case CREATE_USER_FAILED: {
      return { ...state, loading: false };
    }
    case GET_USERS_START: {
      return { ...state, loading: true };
    }
    case GET_USERS_SUCCESS: {
      return { ...state, loading: false, users: action.payload };
    }
    case GET_USERS_FAILED: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};
export default State;
