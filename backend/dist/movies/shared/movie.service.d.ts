import { Movie } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from '../dto/movies.dtos';
export declare class MovieService {
    private readonly movieRepository;
    constructor(movieRepository: Repository<Movie>);
    getAll(): Promise<Movie[]>;
    getById(id: number): Promise<Movie>;
    create(createMovieDto: CreateMovieDto): Promise<Movie>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
