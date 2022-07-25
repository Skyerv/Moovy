/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateMovieDto } from './dto/movies.dtos';
import { Movie } from './shared/movie';
import { MovieService } from './shared/movie.service';


@Controller('movies')
export class MoviesController {
    constructor(private movieService: MovieService) {
        
    }

    @Get()
    getAll() {
        return this.movieService.getAll();
      }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number) {
        return this.movieService.getById(id);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    create(@Body() createMovieDto: CreateMovieDto) {
      return this.movieService.create(createMovieDto);
    }

    @Delete()
    async delete(@Param('id') id: number) {
        this.movieService.delete(id);
    }
}
