import { Movie } from './movie';
export declare class MovieService {
    movies: Movie[];
    getAll(): Movie[];
    getById(id: number): Movie;
    create(movie: Movie): Movie;
    delete(id: number): void;
}
