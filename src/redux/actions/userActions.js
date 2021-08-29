import API from "../../api";
import { UserActionTypes } from "../constants/userActionTypes";

export const checkUser = () => (dispatch, getState) => {
  dispatch({ type: UserActionTypes.USER_LOADING });
  const token = getState().user.token;
  console.log(`token ${token}`);
  let config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  if (token) {
    config.headers["x-access-token"] = token;
  }
  API.post("/api/home", config)
    .then((response) => {
      console.log("response");
      console.log(response);
      dispatch({
        type: UserActionTypes.USER_LOADED,
        payload: response
      });
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
      dispatch({
        type: UserActionTypes.LOGIN_FAIL
      });
    });
};

export const loginUser =
  ({ username, password }) =>
  (dispatch) => {
    console.log("Loggin in");
    let config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    const body = JSON.stringify({ username, password });
    API.post("/api/login", body, config)
      .then((response) => {
        console.log("response");
        console.log(response);
        dispatch({
          type: UserActionTypes.LOGIN_SUCCESS
        });
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  };
