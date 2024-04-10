import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  } as any,
  reducers: {
    addChat: (state, action) => {
      state.message.splice(20, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;
