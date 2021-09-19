import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {props.movies.map((movie) => (
        <MovieCard
          key={movie._id || movie.imdbID}
          movie={movie}
          type={props.type}
        />
      ))}
    </div>
  );
};

export default MovieList;
