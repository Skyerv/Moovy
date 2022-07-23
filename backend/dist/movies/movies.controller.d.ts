import { Movie } from './shared/movie';
import { MovieService } from './shared/movie.service';
export declare class MoviesController {
    private movieService;
    constructor(movieService: MovieService);
    getAll(): Promise<Movie[]>;
    getById(id: number): Promise<Movie>;
    create(movie: Movie): Promise<Movie>;
    delete(id: number): Promise<void>;
}
