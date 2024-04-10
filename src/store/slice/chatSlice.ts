import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  } as any,
  reducers: {
    addChat: (state, action) => {
      const messages = state?.message;
      messages?.splice(20, 1);
      messages?.unshift(action.payload);
      state.message = messages;
    },
  },
});

export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;
