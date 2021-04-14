import axios from "axios";
import { API_URL } from "../constants";
import {
  CREATE_USER_START,
  CREATE_USER_FAILED,
  CREATE_USER_SUCCESS,
  GET_USERS_START,
  GET_USERS_FAILED,
  GET_USERS_SUCCESS,
} from "./types";

export const createUser = (params) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_USER_START,
    });
    axios
      .request({
        method: "POST",
        url: ` ${API_URL}/user`,
        responseType: "json",
        data: params,
      })
      .then((response) => {
        dispatch({
          type: CREATE_USER_SUCCESS,
          payload: params,
        });
      })

      .catch((e) => {
        dispatch({
          type: CREATE_USER_FAILED,
          payload: { create: e.response.data.message },
        });
      });
  };
};

export const getUsers = (params) => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_START,
    });
    axios
      .request({
        method: "GET",
        url: ` ${API_URL}/user`,
        responseType: "json",
      })
      .then((response) => {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((e) => {
        dispatch({
          type: GET_USERS_FAILED,
          payload: { get: e.response.data.message },
        });
      });
  };
};
