import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchList } from "../../redux/actions/movieActions";

const WatchList = () => {
  const watchListMovies = useSelector((state) => state.movie.watchlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatchList());
  }, [dispatch]);

  return <div>{watchListMovies.length}</div>;
};

export default WatchList;
