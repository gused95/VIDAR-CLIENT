import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ObjectCard(props) {

  const { 
    title, 
    description, 
    pickLocation, 
    pickSchedule, 
    postUntil, 
    collecType,
    imageUrl,
    price,
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
        image={props?.imageUrl}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {collecType}
        </Typography>

        

        {price && (
        <>
          <Typography gutterBottom variant="h7" component="div">
            Precio: ${price}
          </Typography>
        </>          
        )}

        <Typography variant="body2" color="text.primary">
        {description}
        </Typography>

      </CardContent>
      <CardActions>
        {/* <Box width='40px' height='40px' border={1} ></Box> for colecciones en general*/}
        
        <Button size="small" variant='contained'><Link to={`/myCollection/${_id}` } style={linkStyle}>Detalles</Link></Button>
        
      </CardActions>
    </Card>
  );
}
