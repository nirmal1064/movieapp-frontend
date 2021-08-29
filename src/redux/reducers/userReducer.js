import { UserActionTypes } from "../constants/userActionTypes";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")),
  isLoading: false
};

export const userReducer = (state = initialState, { type, payload }) => {
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
      localStorage.setItem(payload);
      return {
        ...state,
        ...payload,
        isLoading: false
      };
    case UserActionTypes.LOGIN_FAIL:
    case UserActionTypes.REGISTER_FAIL:
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        username: null,
        id: null
      };
    default:
      return state;
  }
};
