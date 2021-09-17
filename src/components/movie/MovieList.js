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
        <Card key={movie._id} style={{ width: "16rem" }}>
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
                props.watched
                  ? () => removeFromWatched(movie._id)
                  : () => addToWatched(movie._id)
              }>
              {props.watched ? "Remove" : "Watched?"}
            </Button>{" "}
            <Button
              className="btn btn-theme float-right"
              variant="outline-success"
              onClick={
                props.watchlist
                  ? () => removeFromWatchList(movie._id)
                  : () => addToWatchList(movie._id)
              }>
              {props.watchlist ? "Remove" : "Watchlist"}
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;
