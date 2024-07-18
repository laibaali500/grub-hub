import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function PlaceCard({ item }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://via.placeholder.com/150?text=Image+${item.name}`}
        alt={`Image ${item.name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`place/${item.id}`} >Open</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default PlaceCard;
