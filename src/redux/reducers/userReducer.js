import { UserActionTypes } from "../constants/userActionTypes";

const initialState = {
  id: null,
  auth: false,
  token: null,
  username: null,
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
        isLoading: true
      };
    case UserActionTypes.USER_LOADED:
      return {
        ...state,
        isLoading: false
      };
    case UserActionTypes.LOGIN_SUCCESS:
    case UserActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false
      };
    case UserActionTypes.REGISTER_FAIL:
    case UserActionTypes.LOGOUT:
    case UserActionTypes.USER_LOADING_FAIL:
      return {
        ...state,
        id: null,
        auth: false,
        username: null,
        token: null,
        isLoading: false
      };
    case UserActionTypes.LOGIN_FAIL:
      return {
        ...state,
        id: null,
        auth: false,
        username: null,
        token: null,
        isLoading: false,
        errMsg: payload.msg
      };
    default:
      return state;
  }
};
