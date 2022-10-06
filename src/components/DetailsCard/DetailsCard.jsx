import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function DetailsCard(props) {

  const { 
    title, 
    description, 
    pickLocation, 
    pickSchedule, 
    postUntil, 
    collecType,
    _id } = props;

    const linkStyle = {
      textDecoration: 'none',
      color: 'white'
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../venta.jpg"
        alt="green iguana"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
        {pickLocation}
        </Typography>

        <Typography variant="body2" color="text.secondary">
        {pickSchedule}
        </Typography>

        <Typography variant="body2" color="text.secondary">
        {postUntil}
        </Typography>

        <Typography variant="body2" color="text.secondary">
        {collecType}
        </Typography>


      </CardContent>
      <CardActions>
        {/* <Box width='40px' height='40px' border={1} ></Box> for colecciones en general, avatar del usuario*/}
        
        
        
      </CardActions>
    </Card>
  );
}
