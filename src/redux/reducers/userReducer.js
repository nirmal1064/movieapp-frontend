import { UserActionTypes } from "../constants/userActionTypes";

export const userReducer = (state = {}, { type, payload }) => {
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
        id: null,
        auth: false,
        username: null,
        token: null,
        isLoading: false
      };
    default:
      return state;
  }
};
