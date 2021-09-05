import API from "../../api";
import { UserActionTypes } from "../constants/userActionTypes";

export const getWatched = () => async (dispatch, getState) => {
  dispatch({ type: UserActionTypes.MOVIE_LOADING });
  const { token } = getState().user;
  const userId = getState().user.id;
  try {
    if (userId && token) {
      const response = await API.get(`/movie/watched/${userId}`);
      dispatch({
        type: UserActionTypes.GET_WATCHED,
        payload: response.data.movies
      });
    }
  } catch (error) {
    dispatch({ type: UserActionTypes.MOVIE_LOADING_FAIL });
  }
};

export const getWatchList = () => async (dispatch, getState) => {
  dispatch({ type: UserActionTypes.MOVIE_LOADING });
  const { userId, token } = getState().user;
  try {
    if (userId && token) {
      const response = await API.get(`/movie/watchlist/${userId}`);
      dispatch({
        type: UserActionTypes.GET_WATCHED,
        payload: response.data.movies
      });
    }
  } catch (error) {
    dispatch({ type: UserActionTypes.MOVIE_LOADING_FAIL });
  }
};
