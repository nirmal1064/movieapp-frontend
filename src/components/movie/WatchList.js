import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchList } from "../../redux/actions/movieActions";
import MovieList from "./MovieList";

const WatchList = () => {
  const watchListMovies = useSelector((state) => state.movie.watchList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatchList());
  }, [dispatch]);

  return (
    <div>
      <MovieList movies={watchListMovies} watchlist="true" />
    </div>
  );
};

export default WatchList;
