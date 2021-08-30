import { UserActionTypes } from "../constants/userActionTypes";

const initialState = {
  id: null,
  username: null,
  token: null,
  auth: false,
  isLoading: false
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
        ...payload,
        isLoading: false
      };
    case UserActionTypes.LOGIN_SUCCESS:
    case UserActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false
      };
    case UserActionTypes.LOGIN_FAIL:
    case UserActionTypes.REGISTER_FAIL:
    case UserActionTypes.LOGOUT:
    case UserActionTypes.USER_LOADING_FAIL:
      return {
        ...state,
        token: null,
        username: null,
        id: null,
        auth: false
      };
    default:
      return state;
  }
};
