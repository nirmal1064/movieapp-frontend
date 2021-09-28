import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterWatchlistMovies,
  getWatchList
} from "../../redux/actions/movieActions";
import LoadingSpinner from "../LoadingSpinner";
import PaginationTab from "../PaginationTab";
import SearchBar from "../SearchBar";
import Toaster from "../Toaster";
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

  const pageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const submitSearch = (searchTerm) => {
    setCurrentPage(1);
    if (searchTerm.length > 2) {
      dispatch(filterWatchlistMovies(searchTerm));
    } else if (searchTerm.length === 0) {
      dispatch(getWatchList());
    }
  };

  useEffect(() => {
    dispatch(getWatchList());
  }, [dispatch]);

  const renderWatchlist = () => {
    if (watchList.length > 0) {
      return (
        <>
          <SearchBar submitSearch={submitSearch} type="watchlist" />
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

  return (
    <div className="text-center mt-2">
      {renderWatchlist()}
      {movie.movieMsg && <Toaster msg={movie.movieMsg} />}
    </div>
  );
};

export default WatchList;
