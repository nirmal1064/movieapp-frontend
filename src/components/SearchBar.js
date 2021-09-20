import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchForMovies } from "../redux/actions/movieActions";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const cSearch = useSelector((state) => state.movie.search.searchValue) || "";

  const submitSearch = () => {
    if (searchValue.length > 2 && searchValue !== cSearch) {
      dispatch(searchForMovies({ s: searchValue, p: 1 }));
    }
  };

  const checkEnterKey = (e) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };

  return (
    <div className="searchbar input-group">
      <input
        className="form-control border-end-0 border rounded-pill"
        type="text"
        value={searchValue}
        id="movie-search-input"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={checkEnterKey}
      />
      <span className="input-group-append">
        <button className="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3">
          <i className="fas fa-search" onClick={() => submitSearch()}></i>
        </button>
      </span>
    </div>
  );
};

export default SearchBar;
