import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    setMovies: (state, action) => action.payload,
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;