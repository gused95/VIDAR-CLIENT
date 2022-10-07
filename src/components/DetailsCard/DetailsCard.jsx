import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

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
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt="green iguana"
      />
      <CardContent
        sx={{ 
          maxHeight: '100vh',
          
        }}
      >

        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        
        <Typography variant="body3" color="text.primary">
        Descripción: 
        </Typography>
        <Typography variant="body3" color="text.secondary">
        {description}
        </Typography>
        
        <List
          sx={{
            width: '100%',
            maxWidth: 500,
            bgcolor: 'background.paper',
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'red' }} >
                <PlaceIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Ubicación aprox. de recolección:" secondary={pickLocation} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'purple' }}>
                <AccessTimeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Horarios de recolección:" secondary={pickSchedule} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'teal' }} >
                <VisibilityIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Visible por:" secondary={`${postUntil} semanas`}  />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'green' }} >
                <LibraryBooksIcon />
              </Avatar  >
            </ListItemAvatar>
            <ListItemText primary="Tipo de colección:" secondary={collecType} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>

      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
