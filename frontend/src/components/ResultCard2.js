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

  let storedMovie = watched.find((o) => o.id === movie.id);
  let watchDisabled = (storedMovie === movie) ? true : false;

  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

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
        <div onClick={() => myFunction()}>
          <button className='btn2'
          disabled={watchDisabled}
          onClick={() => addMovieToLibrary(movie)}>Add to <strong>My Library</strong></button>
        </div>
        <div className="popup" >
          <span className="popuptext" id="myPopup">{movie.Title} was added to My Library!</span>
        </div>
      </CardActions>
    </Card>

  
  );
}