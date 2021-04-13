import axios from "axios";
import { API_URL } from "../constants";
import {
  CREATE_USER_START,
  CREATE_USER_FAILED,
  CREATE_USER_SUCCESS,
} from "./types";

export const createUser = (params) => {
  console.log("params", params);
  return (dispatch) => {
    dispatch({
      type: CREATE_USER_START,
    });
    console.log("start");
    axios
      .request({
        method: "POST",
        url: ` ${API_URL}/user`,
        responseType: "json",
        data: params,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: CREATE_USER_SUCCESS,
          payload: params,
        });
      })
      .catch((e) => {
        console.log("err post", e.message);

        dispatch({
          type: CREATE_USER_FAILED,
        });
      });
  };
};
