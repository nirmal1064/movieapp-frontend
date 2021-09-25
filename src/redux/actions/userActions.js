import { batch } from "react-redux";
import API from "../../api";
import { UserActionTypes } from "../constants/userActionTypes";

export const loadUser = () => (dispatch) => {
  dispatch({ type: UserActionTypes.USER_LOADING });
  API.get("/api/home")
    .then(() => {
      dispatch({ type: UserActionTypes.USER_LOADED });
    })
    .catch(() => {
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
        dispatch({
          type: UserActionTypes.LOGIN_FAIL,
          payload: err.response.data
        });
      });
  };

export const clearErrMsg = () => (dispatch) => {
  dispatch({ type: UserActionTypes.CLEAR_ERR_MSG });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  batch(() => {
    dispatch({ type: UserActionTypes.CLEAR_MOVIES });
    dispatch({ type: UserActionTypes.LOGOUT });
  });
};
