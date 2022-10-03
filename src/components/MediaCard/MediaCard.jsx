import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 500, maxHeight: 700 }}>
      <CardMedia
        component="img"
        height="300"
        image="../mapa.jpg"
        alt="mapa"
      />
      <CardContent sx={{textAlign: 'center'}}>
        <Typography gutterBottom variant="h5" component="div">
          Actualiza tu ubicación
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Usaremos esta ubición para calcular que tan lejos están las colecciones de tus vecinos
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        <Button size="small" variant='outlined' color='secondary'>Encontrar mi ubicación</Button>
        <Button size="small" variant='contained' color='secondary'>Guardar</Button>
      </CardActions>
    </Card>
  );
}
