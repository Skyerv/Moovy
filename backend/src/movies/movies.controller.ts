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
    async getAll() {
        return await this.movieService.getAll();
      }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number) {
        return this.movieService.getById(id);
    }

    @Post('create')
    create(@Body() createMovieDto: CreateMovieDto) {
      console.log('criou', createMovieDto)
      return this.movieService.create(createMovieDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.movieService.delete(id);
    }
}
