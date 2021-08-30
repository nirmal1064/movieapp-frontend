import API from "../../api";
import { UserActionTypes } from "../constants/userActionTypes";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: UserActionTypes.USER_LOADING });
  const { auth, token } = getState().user;
  let config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  if (token && auth) {
    config.headers["x-access-token"] = token;
  }
  API.post("/api/home", config)
    .then((response) => {
      dispatch({
        type: UserActionTypes.USER_LOADED,
        payload: response
      });
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
      dispatch({
        type: UserActionTypes.USER_LOADING_FAIL
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
        dispatch({
          type: UserActionTypes.LOGIN_SUCCESS,
          payload: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
