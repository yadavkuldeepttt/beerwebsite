import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    searchSlice: searchReducer,
  },
});
export default store;
