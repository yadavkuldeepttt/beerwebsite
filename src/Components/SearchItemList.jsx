import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBeers } from "../Store/searchSlice"; // Use the action from the slice
import axios from "axios";

const SearchItemList = () => {
  const searchQuery = useSelector((state) => state.searchSlice.searchQuery); // Correct the slice name
  const beers = useSelector((state) => state.searchSlice.beers); // Correct the slice name
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery) {
        try {
          const response = await axios.get(
            `https://api.punkapi.com/v2/beers?beer_name=${searchQuery}`
          );
          const data = response.data;
          dispatch(setBeers(data));
          console.log(data);
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle the error here, e.g., dispatch an action to set an error state.
        }
      }
    };

    fetchData();
  }, [searchQuery, dispatch]);

  return (
    <div className="beer-list">
      {searchQuery &&
        beers.map((beer) => (
          <div key={beer.id} className="beer-item">
            <h2>{beer.name}</h2>
            <p>{beer.description}</p>
            {/* You can display other beer information here */}
          </div>
        ))}
    </div>
  );
};

export default SearchItemList;
