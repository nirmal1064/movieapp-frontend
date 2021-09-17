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
    case UserActionTypes.REMOVE_WATCHED:
      return {
        ...state,
        watched: state.watched.filter((movie) => movie._id !== payload)
      };
    case UserActionTypes.REMOVE_WATCHLIST:
      return {
        ...state,
        watchList: state.watchList.filter((movie) => movie._id !== payload)
      };
    case UserActionTypes.ADD_WATCHED:
      return {
        ...state,
        watched: [...state.watched, payload]
      };
    case UserActionTypes.ADD_WATCHLIST:
      return {
        ...state,
        watchList: [...state.watchList, payload]
      };
    case UserActionTypes.REMOVE_WATCHED_FAIL:
    case UserActionTypes.REMOVE_WATCHLIST_FAIL:
    case UserActionTypes.ADD_WATCHED_FAIL:
    case UserActionTypes.ADD_WATCHLIST_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
};
