import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addMovieToWatched,
  addMovieToWatchList,
  removeMovieFromWatched,
  removeMovieFromWatchList
} from "../../redux/actions/movieActions";

const MovieCard = ({ movie, type }) => {
  const dispatch = useDispatch();

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

  const isWatched = () => {
    if (type === "watched") {
      removeFromWatched(movie._id || movie.imdbID);
    } else {
      addToWatched(movie._id || movie.imdbID);
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
          onClick={isWatched}>
          {type === "watched" ? "Remove" : "Watched?"}
        </Button>{" "}
        <Button
          className="btn btn-theme float-right"
          variant="outline-success"
          onClick={
            type === "watchlist"
              ? () => removeFromWatchList(movie._id || movie.imdbID)
              : () => addToWatchList(movie._id || movie.imdbID)
          }>
          {type === "watchlist" ? "Remove" : "Watchlist"}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;
