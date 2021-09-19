import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
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

  return (
    <div className="searchbar">
      <InputGroup className="mb-3">
        <Form.Control
          aria-describedby="search-icon"
          type="text"
          value={searchValue}
          placeholder="Search Movie or Series"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Search
          style={{ fontSize: "2rem", color: "blue" }}
          id="search-icon"
          onClick={() => submitSearch()}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
