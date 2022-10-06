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
    imageUrl,
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
        image={imageUrl}
        alt="green iguana"
      />
      <CardContent
        sx={{ 
          height: '30vh',
          // display: 'flex',
          // alignContent: 'space-around'
        }}
      >

        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        
        <Typography variant="body3" color="text.secondary">
        Descripción: {description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
        Ubicación aprox. de recolección: {pickLocation}
        </Typography>

        <Typography variant="body2" color="text.secondary">
        Horarios de recolección: {pickSchedule}
        </Typography>

        <Typography variant="body2" color="text.secondary">
        Visible por: {postUntil} semanas
        </Typography>

        <Typography variant="body2" color="text.secondary">
        Tipo de colección: {collecType}
        </Typography>


      </CardContent>
      <CardActions>
        {/* <Box width='40px' height='40px' border={1} ></Box> for colecciones en general, avatar del usuario*/}
        
        
        
      </CardActions>
    </Card>
  );
}
