import API from "../../api";
import { UserActionTypes } from "../constants/userActionTypes";

export const searchForMovies =
  ({ s, p }) =>
  async (dispatch, getState) => {
    const { token, auth } = getState().user;
    const userId = getState().user.id;
    try {
      if (p === 1) {
        dispatch({ type: UserActionTypes.CLEAR_SEARCH });
      }
      dispatch({ type: UserActionTypes.MOVIE_LOADING });
      if (userId && token && auth) {
        const response = await API.get(`/movie/search/`, { params: { s, p } });
        let data = response.data;
        if (Object.keys(data).length !== 0) {
          const totalPages = Math.ceil(data.totalResults / 10);
          data = {
            ...data,
            totalPages,
            currentPage: p,
            searchValue: s,
            searching: false
          };
        } else {
          data = { ...data, searchValue: s };
        }
        dispatch({
          type: UserActionTypes.SET_SEARCH_MOVIES,
          payload: data
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
        const data = await (await API.post(`/movie/watched/remove`, body)).data;
        dispatch({
          type: UserActionTypes.REMOVE_WATCHED,
          payload: { data, msg: `Removed from collection` }
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
        const data = await (
          await API.post(`/movie/watchlist/remove`, body)
        ).data;
        dispatch({
          type: UserActionTypes.REMOVE_WATCHLIST,
          payload: { data, msg: `Removed from watchlist` }
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
        const data = await (await API.post(`/movie/watched/add`, body)).data;
        dispatch({
          type: UserActionTypes.ADD_WATCHED,
          payload: { data, msg: `${data.Type} added to collection` }
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
        const data = await (await API.post(`/movie/watchlist/add`, body)).data;
        dispatch({
          type: UserActionTypes.ADD_WATCHLIST,
          payload: { data, msg: `${data.Type} added to watchlist` }
        });
      }
    } catch (error) {
      dispatch({ type: UserActionTypes.ADD_WATCHLIST_FAIL });
    }
  };

export const filterWatchedMovies = (searchTerm) => (dispatch, getState) => {
  const watchedMovies = getState().movie.watched;
  const filteredMovies = watchedMovies.filter((movie) => {
    return movie.Title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  dispatch({ type: UserActionTypes.FILTER_WATCHED, payload: filteredMovies });
};

export const filterWatchlistMovies = (searchTerm) => (dispatch, getState) => {
  const watchListMovies = getState().movie.watchList;
  const filteredMovies = watchListMovies.filter((movie) => {
    return movie.Title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  dispatch({ type: UserActionTypes.FILTER_WATCHLIST, payload: filteredMovies });
};

export const clearMovieMsg = () => (dispatch) => {
  dispatch({ type: UserActionTypes.CLEAR_MOVIE_MSG });
};
