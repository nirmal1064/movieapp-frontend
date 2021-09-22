import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {props.movies.map((movie, idx) => (
        <MovieCard
          key={movie._id + idx || movie.imdbID + idx}
          movie={movie}
          type={props.type}
        />
      ))}
    </div>
  );
};

export default MovieList;
