import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/typeorm';
import { MoviesController } from './movies.controller';
import { MovieService } from './shared/movie.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MoviesController],
  providers: [MovieService],
})
export class MoviesModule {}
