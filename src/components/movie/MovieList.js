import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const MovieList = (props) => {
  const [watched, setWatched] = useState(false);
  const [watchlist, setwatchlist] = useState(false);
  const handleWatched = (e) => {
    e.preventDefault();
    setWatched(!watched);
  };
  const handleWatchList = (e) => {
    e.preventDefault();
    setwatchlist(!watchlist);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {"\n"}
      {props.movies.map((movie) => (
        <>
          <Card key={movie.imdbID} style={{ width: "16rem" }}>
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
                variant={watched ? "success" : "outline-success"}
                onClick={handleWatched}>
                Watched
              </Button>{" "}
              <Button
                className="btn btn-theme float-right"
                variant={watchlist ? "success" : "outline-success"}
                onClick={handleWatchList}>
                WatchList
              </Button>
            </Card.Footer>
          </Card>
        </>
      ))}
    </div>
  );
};

export default MovieList;
