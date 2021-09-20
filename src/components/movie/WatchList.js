import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchList } from "../../redux/actions/movieActions";
import MovieList from "./MovieList";

const WatchList = () => {
  const movie = useSelector((state) => state.movie);
  const { watchList, loading } = movie;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatchList());
  }, [dispatch]);

  const renderWatchlist = () => {
    if (watchList.length > 0) {
      return <MovieList movies={watchList} type="watchlist" />;
    } else if (loading) {
      return <h4 className="text-center mt-5">Loading... Please wait</h4>;
    } else {
      return (
        <h4 className="text-center mt-5">
          You Have Not Added any movies to your watchlist
        </h4>
      );
    }
  };

  return <div>{renderWatchlist()}</div>;
};

export default WatchList;
