import API from "../../api";
import { UserActionTypes } from "../constants/userActionTypes";

export const searchForMovies =
  ({ s }) =>
  async (dispatch, getState) => {
    console.log(`Search value ${s}`);
    const { token, auth } = getState().user;
    const userId = getState().user.id;
    try {
      if (userId && token && auth) {
        const response = await API.get(`/movie/search/`, { params: { s } });
        dispatch({
          type: UserActionTypes.SET_SEARCH_MOVIES,
          payload: response.data
        });
      }
    } catch (error) {
      dispatch({ type: UserActionTypes.SET_SEARCH_MOVIES_FAIL });
    }
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

export const removeMovieFromWatched =
  ({ movieId }) =>
  async (dispatch, getState) => {
    const { token, auth } = getState().user;
    const userId = getState().user.id;
    try {
      const body = JSON.stringify({ userId, movieId });
      if (userId && token && auth) {
        const response = await API.post(`/movie/watched/remove`, body);
        dispatch({
          type: UserActionTypes.REMOVE_WATCHED,
          payload: response.data
        });
      }
    } catch (error) {
      dispatch({ type: UserActionTypes.REMOVE_WATCHED_FAIL });
    }
  };

export const removeMovieFromWatchList =
  ({ movieId }) =>
  async (dispatch, getState) => {
    const { token, auth } = getState().user;
    const userId = getState().user.id;
    try {
      const body = JSON.stringify({ userId, movieId });
      if (userId && token && auth) {
        const response = await API.post(`/movie/watchlist/remove`, body);
        dispatch({
          type: UserActionTypes.REMOVE_WATCHLIST,
          payload: response.data
        });
      }
    } catch (error) {
      dispatch({ type: UserActionTypes.REMOVE_WATCHLIST_FAIL });
    }
  };

export const addMovieToWatched =
  ({ movieId }) =>
  async (dispatch, getState) => {
    const { token, auth } = getState().user;
    const userId = getState().user.id;
    try {
      const body = JSON.stringify({ userId, movieId });
      if (userId && token && auth) {
        const response = await API.post(`/movie/watched/add`, body);
        dispatch({
          type: UserActionTypes.ADD_WATCHED,
          payload: response.data
        });
      }
    } catch (error) {
      dispatch({ type: UserActionTypes.ADD_WATCHED_FAIL });
    }
  };

export const addMovieToWatchList =
  ({ movieId }) =>
  async (dispatch, getState) => {
    const { token, auth } = getState().user;
    const userId = getState().user.id;
    try {
      const body = JSON.stringify({ userId, movieId });
      if (userId && token && auth) {
        const response = await API.post(`/movie/watchlist/add`, body);
        dispatch({
          type: UserActionTypes.ADD_WATCHLIST,
          payload: response.data
        });
      }
    } catch (error) {
      dispatch({ type: UserActionTypes.ADD_WATCHLIST_FAIL });
    }
  };
