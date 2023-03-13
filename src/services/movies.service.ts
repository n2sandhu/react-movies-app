import moviesData from './api/movies-data.json';
import { InterfaceMovies } from '../types/movies';

// mock function to mimic making an async request for data
export function fetchMoviesData() {
	return new Promise<{ data: InterfaceMovies[] }>((resolve) =>
		setTimeout(() => resolve({ data: moviesData }), 1000)
	);
}
