export interface InterfaceMovies {
	Title: string;
	Type: string;
	Poster: string;
	Actors: string;
	Prices: {
		Cinema: string;
		Price: number;
		Highlight: boolean;
	}[];
}