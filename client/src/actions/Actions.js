import axios from "axios";
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

    axios
      .request({
        method: "POST",
        url: requestMethod,
        responseType: "json",
        data: requestParams,
      })
      .then((response) => {
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
