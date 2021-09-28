import { UserActionTypes } from "../constants/userActionTypes";

const initialState = {
  id: null,
  auth: false,
  token: null,
  username: null,
  name: null,
  isLoading: false,
  errMsg: ""
};

const persistedState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : initialState;

export const userReducer = (state = persistedState, { type, payload }) => {
  switch (type) {
    case UserActionTypes.USER_LOADING:
      return {
        ...state,
        isLoading: true,
        errMsg: ""
      };
    case UserActionTypes.USER_LOADED:
      return {
        ...state,
        isLoading: false,
        errMsg: ""
      };
    case UserActionTypes.LOGIN_SUCCESS:
    case UserActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false,
        errMsg: ""
      };
    case UserActionTypes.REGISTER_FAIL:
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        id: null,
        auth: false,
        username: null,
        name: null,
        token: null,
        isLoading: false
      };
    case UserActionTypes.USER_LOADING_FAIL:
      return { ...initialState, errMsg: payload };
    case UserActionTypes.LOGIN_FAIL:
      return { ...state, errMsg: payload.msg };
    case UserActionTypes.CLEAR_ERR_MSG:
      return { ...state, errMsg: "" };
    default:
      return state;
  }
};
