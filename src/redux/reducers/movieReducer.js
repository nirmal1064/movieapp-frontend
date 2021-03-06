import { UserActionTypes } from "../constants/userActionTypes";

const initialState = {
  watched: [],
  watchList: [],
  loading: false,
  search: {},
  movieMsg: ""
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UserActionTypes.GET_WATCHED:
    case UserActionTypes.FILTER_WATCHED:
      return { ...state, watched: payload, loading: false };
    case UserActionTypes.GET_WATCHLIST:
    case UserActionTypes.FILTER_WATCHLIST:
      return { ...state, watchList: payload, loading: false };
    case UserActionTypes.GET_WATCHED_FAIL:
      return { ...state, watched: [], loading: false };
    case UserActionTypes.GET_WATCHLIST_FAIL:
      return { ...state, watchList: [], loading: false };
    case UserActionTypes.REMOVE_WATCHED:
      return {
        ...state,
        watched: state.watched.filter((movie) => movie._id !== payload.data),
        movieMsg: payload.msg
      };
    case UserActionTypes.REMOVE_WATCHLIST:
      return {
        ...state,
        watchList: state.watchList.filter((m) => m._id !== payload.data),
        movieMsg: payload.msg
      };
    case UserActionTypes.ADD_WATCHED:
      return {
        ...state,
        watched: [...state.watched, payload.data],
        movieMsg: payload.msg
      };
    case UserActionTypes.ADD_WATCHLIST:
      return {
        ...state,
        watchList: [...state.watchList, payload.data],
        movieMsg: payload.msg
      };
    case UserActionTypes.REMOVE_WATCHED_FAIL:
    case UserActionTypes.REMOVE_WATCHLIST_FAIL:
    case UserActionTypes.ADD_WATCHED_FAIL:
    case UserActionTypes.ADD_WATCHLIST_FAIL:
      return { ...state, loading: false };
    case UserActionTypes.SEARCHING_MOVIES:
      return { ...state, search: { ...state.search } };
    case UserActionTypes.SET_SEARCH_MOVIES:
      return { ...state, search: payload, loading: false };
    case UserActionTypes.CLEAR_MOVIES:
      return initialState;
    case UserActionTypes.CLEAR_SEARCH:
    case UserActionTypes.SET_SEARCH_MOVIES_FAIL:
      return { ...state, search: {}, loading: false };
    case UserActionTypes.MOVIE_LOADING:
      return { ...state, loading: true };
    case UserActionTypes.CLEAR_MOVIE_MSG:
      return { ...state, movieMsg: "" };
    default:
      return state;
  }
};
