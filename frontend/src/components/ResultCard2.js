import * as React from 'react';
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export const ResultCard2 = ({movie}) => {
  const { addMovieToLibrary, watched } = useContext(GlobalContext);

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="260"
        image={movie.Poster}
        alt={`${movie.Title} Poster`}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {movie.Title}
        </Typography>
      </CardContent>
      <CardActions>
        <button className='btn2'
        onClick={() => addMovieToLibrary(movie)}>Add to My Library</button>
      </CardActions>
    </Card>
  );
}