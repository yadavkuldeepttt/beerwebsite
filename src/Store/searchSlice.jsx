import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  beers: [],
};

const searchSlice = createSlice({
  name: "beer",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setBeers: (state, action) => {
      state.beers = action.payload;
    },
  },
});

export const { setSearchQuery, setBeers } = searchSlice.actions;
export default searchSlice.reducer;
