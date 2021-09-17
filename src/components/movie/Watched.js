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
      <MovieList movies={watchedMovies} type="watched" />
    </div>
  );
};

export default Watched;
