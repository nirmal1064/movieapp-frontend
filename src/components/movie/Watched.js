import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatched } from "../../redux/actions/movieActions";

const Watched = () => {
  const watchedMovies = useSelector((state) => state.movie.watched);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatched());
  }, [dispatch]);

  return <div>{watchedMovies.length}</div>;
};

export default Watched;
