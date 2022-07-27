/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CreateMovieDto {
    id: number;

    @IsNotEmpty()
    imdb_id: string;
  
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
