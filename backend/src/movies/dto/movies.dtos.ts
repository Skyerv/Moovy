/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    imdb_id: number;
  
    @IsNotEmpty()
    title: string;
  
    @IsNotEmpty()
    year: string;
  
    @IsNotEmpty()
    poster: string;
  
    @IsNotEmpty()
    rating: string;
  
    @IsNotEmpty()
    audioreview: string;
}
