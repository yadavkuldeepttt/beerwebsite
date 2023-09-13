// src/components/SearchBar.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../Store/searchSlice"; // Adjust the import path based on your project structure

const SearchBar = () => {
  const searchQuery = useSelector((state) => state.searchSlice.searchQuery); // Use the correct slice name
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="navbar-search">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
