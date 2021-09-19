import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToWatched,
  addMovieToWatchList,
  removeMovieFromWatched,
  removeMovieFromWatchList
} from "../../redux/actions/movieActions";

const MovieCard = ({ movie, type }) => {
  const dispatch = useDispatch();
  const watchListMovies = useSelector((state) => state.movie.watchList);
  const watchedMovies = useSelector((state) => state.movie.watched);

  const addToWatched = (movieId) => {
    dispatch(addMovieToWatched({ movieId }));
  };

  const addToWatchList = (movieId) => {
    dispatch(addMovieToWatchList({ movieId }));
  };

  const removeFromWatched = (movieId) => {
    dispatch(removeMovieFromWatched({ movieId }));
  };

  const removeFromWatchList = (movieId) => {
    dispatch(removeMovieFromWatchList({ movieId }));
  };

  const isMovieWatched = () => {
    return watchedMovies.some(
      (watchedMovie) => watchedMovie._id === movie.imdbID
    );
  };

  const isMovieWatchlist = () => {
    watchListMovies.some(
      (watchListMovie) => watchListMovie._id === movie.imdbID
    );
  };

  const isWatchedButton = () => {
    if (type === "watched" || (type === "search" && isMovieWatched())) {
      removeFromWatched(movie._id || movie.imdbID);
    } else {
      addToWatched(movie._id || movie.imdbID);
    }
  };

  const isWatchListButton = () => {
    if (type === "watchlist" || (type === "search" && isMovieWatchlist())) {
      removeFromWatchList(movie._id || movie.imdbID);
    } else {
      addToWatchList(movie._id || movie.imdbID);
    }
  };

  const getWatchedButtonText = () => {
    if (type === "watched" || (type === "search" && isMovieWatched())) {
      return "Remove";
    } else {
      return "Watched?";
    }
  };

  const getWatchListButtonText = () => {
    if (type === "watchlist" || (type === "search" && isMovieWatchlist())) {
      return "Remove";
    } else {
      return "Watchlist";
    }
  };

  return (
    <Card key={movie._id || movie.imdbID} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title className="text-center">
          {movie.Title}
          {movie.Year ? ` (${movie.Year})` : ""}
        </Card.Title>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button
          className="btn btn-theme float-left m-auto"
          variant="outline-success"
          onClick={isWatchedButton}>
          {getWatchedButtonText()}
        </Button>{" "}
        <Button
          className="btn btn-theme float-right"
          variant="outline-success"
          onClick={isWatchListButton}>
          {getWatchListButtonText()}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;
