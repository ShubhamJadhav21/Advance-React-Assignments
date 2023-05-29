import { createSlice } from '@reduxjs/toolkit';

import { fetchMovies } from './FetchMovies';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.error = null;
      
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.movies = [];
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;