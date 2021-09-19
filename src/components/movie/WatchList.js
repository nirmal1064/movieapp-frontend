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
      {watchListMovies.length > 0 ? (
        <MovieList movies={watchListMovies} type="watchlist" />
      ) : (
        <h2 className="text-center mt-5">
          You Have Not Added any movies to your watchlist
        </h2>
      )}
    </div>
  );
};

export default WatchList;
