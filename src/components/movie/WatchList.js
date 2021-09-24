import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchList } from "../../redux/actions/movieActions";
import LoadingSpinner from "../LoadingSpinner";
import PaginationTab from "../PaginationTab";
import MovieList from "./MovieList";

const WatchList = () => {
  const movie = useSelector((state) => state.movie);
  const { watchList, loading } = movie;
  const dispatch = useDispatch();
  const [moviesPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages =
    watchList.length > 0 ? Math.ceil(watchList.length / moviesPerPage) : 0;
  const lastIndex = currentPage * moviesPerPage;
  const firstIndex = lastIndex - moviesPerPage;
  const movies = watchList.slice(firstIndex, lastIndex);

  const pageChange = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    console.log("useEffect");
    dispatch(getWatchList());
  }, [dispatch]);

  const renderWatchlist = () => {
    if (watchList.length > 0) {
      return (
        <>
          <MovieList movies={movies} type="watchlist" />
          <PaginationTab
            currentPage={currentPage}
            totalPages={totalPages}
            pageChange={pageChange}
          />
        </>
      );
    } else if (loading) {
      return <LoadingSpinner />;
    } else {
      return (
        <h4 className="text-center mt-5">
          You Have Not Added any movies to your watchlist
        </h4>
      );
    }
  };

  return <div className="text-center mt-2">{renderWatchlist()}</div>;
};

export default WatchList;
