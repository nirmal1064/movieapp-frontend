import React from "react";
import { Button, Card } from "react-bootstrap";

const MovieList = (props) => {
  const addToWatched = (movieId) => {
    console.log("addToWatched");
    console.log(movieId);
  };
  const addToWatchList = (movieId) => {
    console.log("addToWatchList");
    console.log(movieId);
  };
  const removeFromWatched = (movieId) => {
    console.log("removeFromWatched");
    console.log(movieId);
  };
  const removeFromWatchList = (movieId) => {
    console.log("removeFromWatchList");
    console.log(movieId);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {"\n"}
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
