import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';

function PlaceCard({ item }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://via.placeholder.com/150?text=Image+${item}`}
        alt={`Image ${item}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Open</Button>
      </CardActions>
    </Card>
  );
}

export default PlaceCard;
