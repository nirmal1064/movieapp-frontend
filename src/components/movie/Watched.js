import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatched } from "../../redux/actions/movieActions";
import MovieList from "./MovieList";

const Watched = () => {
  const movie = useSelector((state) => state.movie);
  const { watched, loading } = movie;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatched());
  }, [dispatch]);

  const renderWatched = () => {
    if (watched.length > 0) {
      return <MovieList movies={watched} type="watched" />;
    } else if (loading) {
      return <h4 className="text-center mt-5">Loading... Please wait</h4>;
    } else {
      return (
        <h4 className="text-center mt-5">You have not watched any movies</h4>
      );
    }
  };

  return <div className="container">{renderWatched()}</div>;
};

export default Watched;
