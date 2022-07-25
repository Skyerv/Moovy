import * as React from 'react';
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export const MovieCard = ({movie}) => {
    const {
        removeFromLibrary,
    } = useContext(GlobalContext);
        
  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Card sx={{ maxWidth: 200 }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='card'> 
      <div className='post-cont'>
        <CardMedia className='card-image'
            component="img"
            height="260"
            image={movie.Poster}
            alt={`${movie.Title} Poster`}
            position= "relative"
            top= "0"
            left= "0"
        />
        <CardMedia>
        {isHovering && (
            <div className='play-img'>
                <img src='assets/play-button.png' className='play-btn'></img>
            </div>
            )}
        </CardMedia>
      </div>
      <CardContent>
      <Typography gutterBottom variant="h7" component="div">
          {movie.Title}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          Rating: 10.0
        </Typography>
      </CardContent>
      <CardActions>
        <div onClick={() => myFunction()} className='remove-btn-div'>
          <button className='btn3'
          onClick={() => removeFromLibrary(movie.imdbID)}>Remove</button>
        </div>
        <div className="popup" >
          <span className="popuptext" id="myPopup">{movie.Title} was removed from your library.</span>
        </div>
      </CardActions>
      
    </Card>
    
  
  );
}