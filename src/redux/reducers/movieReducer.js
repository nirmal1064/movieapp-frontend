import { UserActionTypes } from "../constants/userActionTypes";

const initialState = {
  watched: [],
  watchList: []
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UserActionTypes.GET_WATCHED:
      return {
        ...state,
        watched: payload
      };
    case UserActionTypes.GET_WATCHLIST:
      return {
        ...state,
        watchList: payload
      };
    case UserActionTypes.GET_WATCHED_FAIL:
      return {
        ...state,
        watched: []
      };
    case UserActionTypes.GET_WATCHLIST_FAIL:
      return {
        ...state,
        watchList: []
      };
    default:
      return state;
  }
};
