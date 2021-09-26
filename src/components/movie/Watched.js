import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterWatchedMovies,
  getWatched
} from "../../redux/actions/movieActions";
import LoadingSpinner from "../LoadingSpinner";
import PaginationTab from "../PaginationTab";
import SearchBar from "../SearchBar";
import Toaster from "../Toaster";
import MovieList from "./MovieList";

const Watched = () => {
  const movie = useSelector((state) => state.movie);
  const { watched, loading } = movie;
  const dispatch = useDispatch();
  const [moviesPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages =
    watched.length > 0 ? Math.ceil(watched.length / moviesPerPage) : 0;

  const lastIndex = currentPage * moviesPerPage;
  const firstIndex = lastIndex - moviesPerPage;
  const movies = watched.slice(firstIndex, lastIndex);

  const pageChange = (pageNumber) => setCurrentPage(pageNumber);

  const submitSearch = (searchTerm) => {
    setCurrentPage(1);
    if (searchTerm.length > 2) {
      dispatch(filterWatchedMovies(searchTerm));
    } else if (searchTerm.length === 0) {
      dispatch(getWatched());
    }
  };

  useEffect(() => {
    dispatch(getWatched());
  }, [dispatch]);

  const renderWatched = () => {
    if (watched.length > 0) {
      return (
        <>
          <SearchBar submitSearch={submitSearch} type="watched" />
          <MovieList movies={movies} type="watched" />
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
        <h4 className="text-center mt-5">You have not watched any movies</h4>
      );
    }
  };

  return (
    <div className="text-center mt-2">
      {renderWatched()}
      {movie.movieMsg && <Toaster msg={movie.movieMsg} />}
    </div>
  );
};

export default Watched;
