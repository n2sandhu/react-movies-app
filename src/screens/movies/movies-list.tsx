import React from 'react';
import {InterfaceMovies} from '../../types/movies';

export function MoviesList({movies}: { movies: InterfaceMovies[] }) {
	return (
		<>
			{movies.map(movie => (
				<div key={movie.Title} className="col">
					<div className="card shadow-sm">
						<img src={movie.Poster} className="card-img-top" alt={movie.Title}/>
						<div className="card-body">
							<h5 className="card-title">{movie.Title}</h5>
							<div className="d-flex justify-content-between align-items-center">
								<small className="text-muted">Cast: {movie.Actors}</small>
							</div>
							<ul className="list-group list-group-flush text-start">
								{movie.Prices.map(price => (
									<li key={price.Cinema} className="list-group-item">{price.Cinema} <span
										className="badge rounded-pill bg-light text-dark float-end">${price.Price}</span></li>
								))}
							</ul>
						</div>
					</div>
				</div>
			))}
		</>
	)
}