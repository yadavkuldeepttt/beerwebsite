import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    apiData: [],
  },
  reducers: {
    setData(state, action) {
      state.apiData = action.payload.items;
    },
  },
});
export const apiActions = dataSlice.actions;
export default dataSlice;
