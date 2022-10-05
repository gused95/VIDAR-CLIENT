import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

export default function ObjectCard(props) {

  const { 
    title, 
    description, 
    pickLocation, 
    pickSchedule, 
    postUntil, 
    collecType,
    _id } = props.info;

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
        {/* just for demo */}
          {description}
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        {/* <Box width='40px' height='40px' border={1} ></Box> for colecciones en general*/}
        <Link to={`/myCollection/${_id}`}><Button size="small" variant='contained'>Detalles</Button></Link>
        <Button size="small" variant='contained'>Editar</Button>
        <Button size="small" color='secondary' variant='contained'>Borrar</Button>
      </CardActions>
    </Card>
  );
}
