import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const ResultCard2 = ({movie}) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="260"
        image={movie.Poster}
        alt={`${movie.title} Poster`}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {movie.Title}
        </Typography>
      </CardContent>
      <CardActions>
        <btn className='btn2'>Add to My Library</btn>
      </CardActions>
    </Card>
  );
}