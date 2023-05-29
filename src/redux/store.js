import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice"; // Update the import statement

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;
