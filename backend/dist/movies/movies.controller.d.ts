import { CreateMovieDto } from './dto/movies.dtos';
import { MovieService } from './shared/movie.service';
export declare class MoviesController {
    private movieService;
    constructor(movieService: MovieService);
    getAll(): Promise<import("../typeorm").Movie[]>;
    getById(id: number): Promise<import("../typeorm").Movie>;
    create(createMovieDto: CreateMovieDto): Promise<import("../typeorm").Movie>;
    delete(id: number): Promise<void>;
}
