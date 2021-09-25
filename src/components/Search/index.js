import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../actions";
import "./style.css";

const Search = ({ allUsersArray }) => {
  const dispatch = useDispatch();

  const searchRef = useRef();
  const handleSearch = () => {
    let currentValue = searchRef.current.value;

    dispatch(
      filter({
        search: currentValue,
        array: allUsersArray,
      })
    );
  };

  return (
    <ul id="growing-search-freebie">
      <li>
        <div className="growing-search">
          <div className="input">
            <input
              ref={searchRef}
              type="text"
              name="search"
              onChange={handleSearch}
              placeholder="Search"
            />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Search;
