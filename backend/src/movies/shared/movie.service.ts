/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from '../dto/movies.dtos';

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movie) private readonly movieRepository: Repository<Movie>,
      ) {}

    public getAll(): Promise<Movie[]> {
        return this.movieRepository.find();
    }

    getById(id: number){
        return this.movieRepository.findOneBy({id: id});
    }

    create(createMovieDto: CreateMovieDto){
        const newMovie = this.movieRepository.create(createMovieDto);
        return this.movieRepository.save(newMovie);
    }

    delete(id: string){
        return this.movieRepository.delete({imdb_id: id});
    }
}
