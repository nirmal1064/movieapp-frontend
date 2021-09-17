import { useDispatch } from "react-redux";
import { Button, Card } from "react-bootstrap";
import {
  addMovieToWatched,
  addMovieToWatchList,
  removeMovieFromWatched,
  removeMovieFromWatchList
} from "../../redux/actions/movieActions";

const MovieList = (props) => {
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

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {props.movies.map((movie) => (
        <Card key={movie._id || movie.imdbID} style={{ width: "16rem" }}>
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
              onClick={
                props.type === "watched"
                  ? () => removeFromWatched(movie._id || movie.imdbID)
                  : () => addToWatched(movie._id || movie.imdbID)
              }>
              {props.type === "watched" ? "Remove" : "Watched?"}
            </Button>{" "}
            <Button
              className="btn btn-theme float-right"
              variant="outline-success"
              onClick={
                props.type === "watchlist"
                  ? () => removeFromWatchList(movie._id || movie.imdbID)
                  : () => addToWatchList(movie._id || movie.imdbID)
              }>
              {props.type === "watchlist" ? "Remove" : "Watchlist"}
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;
