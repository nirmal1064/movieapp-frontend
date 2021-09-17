import API from "../../api";
import { UserActionTypes } from "../constants/userActionTypes";

export const loadMovies = () => async (dispatch) => {
  dispatch(getWatched());
  dispatch(getWatchList());
};

export const getWatched = () => async (dispatch, getState) => {
  dispatch({ type: UserActionTypes.MOVIE_LOADING });
  const { token, auth } = getState().user;
  const userId = getState().user.id;
  try {
    if (userId && token && auth) {
      const response = await API.get(`/movie/watched/${userId}`);
      dispatch({
        type: UserActionTypes.GET_WATCHED,
        payload: response.data.movies
      });
    }
  } catch (error) {
    dispatch({ type: UserActionTypes.GET_WATCHED_FAIL });
  }
};

export const getWatchList = () => async (dispatch, getState) => {
  dispatch({ type: UserActionTypes.MOVIE_LOADING });
  const { token, auth } = getState().user;
  const userId = getState().user.id;
  try {
    if (userId && token && auth) {
      const response = await API.get(`/movie/watchlist/${userId}`);
      dispatch({
        type: UserActionTypes.GET_WATCHLIST,
        payload: response.data.movies
      });
    }
  } catch (error) {
    dispatch({ type: UserActionTypes.GET_WATCHLIST_FAIL });
  }
};

export const removeFromWatched =
  ({ movieId }) =>
  async (dispatch, getState) => {
    const { token, auth } = getState().user;
    const userId = getState().user.id;
    try {
      const body = JSON.stringify({ userId, movieId });
      if (userId && token && auth) {
        const response = await API.post(`/watched/remove`, body);
        dispatch({
          type: UserActionTypes.REMOVE_WATCHED,
          payload: response.data
        });
      }
    } catch (error) {
      dispatch({ type: UserActionTypes.REMOVE_WATCHED_FAIL });
    }
  };

export const removeFromWatchList =
  ({ movieId }) =>
  async (dispatch, getState) => {
    const { token, auth } = getState().user;
    const userId = getState().user.id;
    try {
      const body = JSON.stringify({ userId, movieId });
      if (userId && token && auth) {
        const response = await API.post(`/watchlist/remove`, body);
        dispatch({
          type: UserActionTypes.REMOVE_WATCHLIST,
          payload: response.data
        });
      }
    } catch (error) {
      dispatch({ type: UserActionTypes.REMOVE_WATCHLIST_FAIL });
    }
  };
