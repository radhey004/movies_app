import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite'
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Icon from '@mui/material/Icon';
import StarIcon from '@mui/icons-material/Star';


export default function MovieCard({movie}) {

// const {image, name, language, rating, genres, premiered }=movie;

  return (
    <Grid item xs={3}>
    <Card sx={{ width: 300 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={movie.image.original}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Language: <Chip label={movie.language}/>
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Genres: {movie.genres}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Premiered: {movie.premiered}
        </Typography>

         Movie :<a href={movie.url}>Link</a>

      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <p size="small">IMDB</p>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <Icon>
            <StarIcon/>
        </Icon>
        </Typography>
        {movie.rating.average}
      </CardActions>
    </Card>
    </Grid>
  );
}
