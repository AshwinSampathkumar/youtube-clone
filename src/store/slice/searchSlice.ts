import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {} as any,
  reducers: {
    cacheSuggestions: (state, action) => Object.assign(state, action.payload),
  },
});

export const { cacheSuggestions } = searchSlice.actions;

export default searchSlice.reducer;
