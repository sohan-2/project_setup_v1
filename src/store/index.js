// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import exampleReducer from "./exampleSlice";

// Example slice
// const exampleSlice = createSlice({
//   name: "example",
//   initialState: {},
//   reducers: {
//     // Define your reducers here
//   },
// });

// export const { actions } = exampleSlice;

const store = configureStore({
  reducer: {
    example: exampleReducer,
    // example: exampleSlice.reducer,
  },
});

export default store;
