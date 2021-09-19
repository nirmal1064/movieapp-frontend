import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatched } from "../../redux/actions/movieActions";
import MovieList from "./MovieList";

const Watched = () => {
  const watchedMovies = useSelector((state) => state.movie.watched);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatched());
  }, [dispatch]);

  return (
    <div className="container">
      {watchedMovies.length > 0 ? (
        <MovieList movies={watchedMovies} type="watched" />
      ) : (
        <h2 className="text-center mt-5">You have not watched any movies</h2>
      )}
    </div>
  );
};

export default Watched;
