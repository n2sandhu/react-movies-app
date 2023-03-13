import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchMoviesData } from '../../services/movies.service';
import { InterfaceMovies } from '../../types/movies';

export interface MoviesState {
  data: InterfaceMovies[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MoviesState = {
  data: [],
  status: 'idle',
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMoviesData',
  async () => {
    const response = await fetchMoviesData();
    return response.data;
  }
);

export const moviesSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
export const selectMovies = (state: RootState) => state.movies.data;
export const fetchMoviesStatus = (state: RootState) => state.movies.status;
export default moviesSlice.reducer;
