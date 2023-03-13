import React, {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {fetchMovies, fetchMoviesStatus, selectMovies} from '../../store/movies/movies.slice';
import {MoviesList} from './movies-list';

export function Movies() {
	const dispatch = useAppDispatch();
	const movies = useAppSelector(selectMovies);
	const status = useAppSelector(fetchMoviesStatus);
	
	useEffect(() => {
		dispatch(fetchMovies());
	}, [dispatch]);
	
	if (status === 'loading') return (<div className="pt-4">Loading...</div>);
	else if (status === 'failed') return (<div className="pt-4">There was an error. Please try again later...</div>);
	
	return (
		<div className="container pt-3">
			<div className="row">
				<div className="col">
					<figure className="text-center">
						<h1>Prince's Theatre</h1>
					</figure>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<figure className="text-center">
						<h3>Classic Movies At Home</h3>
					</figure>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<figure className="text-center">
						<h5>
							Welcome to Prince’s theatre - a small independent theatre in the inner eastern suburbs of Melbourne that
							has been family run for over 50 years.
						</h5>
					</figure>
				</div>
			</div>
			<div className="row">
				<div className="album py-5 bg-light">
					<div className="container">
						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
							<MoviesList movies={movies}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}