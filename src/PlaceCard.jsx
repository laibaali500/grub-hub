import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PlaceInfoRetriever from './PlaceInfoRetriever';



function PlaceCard({ item }) {
  return (
    <Card>
      <CardMedia style={{ height: 200 }}>
        <PlaceInfoRetriever placeId={item.placeid} dataType={'photo'}/>
      </CardMedia>
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
