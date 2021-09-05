import API from "../../api";
import { UserActionTypes } from "../constants/userActionTypes";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: UserActionTypes.USER_LOADING });
  API.get("/api/home")
    .then((response) => {
      dispatch({ type: UserActionTypes.USER_LOADED });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: UserActionTypes.USER_LOADING_FAIL });
    });
};

export const loginUser =
  ({ username, password }) =>
  (dispatch) => {
    const body = JSON.stringify({ username, password });
    API.post("/api/login", body)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({
          type: UserActionTypes.LOGIN_SUCCESS,
          payload: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
