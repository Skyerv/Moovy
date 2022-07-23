/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Movie } from './movie';

@Injectable()
export class MovieService {
    movies: Movie[] = [
        { id: 1, title: 'Harry Potter 1', year: "2010", poster: 'aaa', rating: '10', audioreview: 'None'},
        { id: 2, title: 'Harry Potter 2', year: "2011", poster: 'bbb', rating: '10', audioreview: 'None'},
        { id: 3, title: 'Harry Potter 3', year: "2012", poster: 'ccc', rating: '10', audioreview: 'None'},
        { id: 4, title: 'Harry Potter 4', year: "2013", poster: 'ddd', rating: '10', audioreview: 'None'},
        { id: 5, title: 'Harry Potter 5', year: "2014", poster: 'eee', rating: '10', audioreview: 'None'},
        { id: 6, title: 'Harry Potter 6', year: "2015", poster: 'fff', rating: '10', audioreview: 'None'},
        { id: 7, title: 'Harry Potter 7', year: "2016", poster: 'ggg', rating: '10', audioreview: 'None'},
        { id: 8, title: 'Harry Potter 8', year: "2017", poster: 'hhh', rating: '10', audioreview: 'None'},
    ]

    getAll(){
        return this.movies;
    }

    getById(id: number){
        const movie = this.movies.find((value) => value.id == id);
        return movie;
    }

    create(movie: Movie){
        let lastId = 0;
        if(this.movies.length > 0){
            lastId = this.movies[this.movies.length - 1].id;
        }

        movie.id = lastId + 1;
        this.movies.push(movie);

        return movie;
    }

    delete(id: number){
        const index = this.movies.findIndex((value) => value.id == id);
        this.movies.splice(index, 1);
    }
}
