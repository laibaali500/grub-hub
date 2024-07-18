import { useParams } from 'react-router-dom';
import { Box, Card, Typography ,CardContent } from '@mui/material';
import GoogleMapsComponent from '../GoogleMapsComponent';
import PlaceInfoRetriever from '../PlaceInfoRetriever';

function Place({places}) {
  const { placeId } = useParams();
  const thisPlace = places.at(placeId - 1)
    return (
      <Box sx={{ p: 3 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {thisPlace.name}
          </Typography>
          <Typography variant="body1">
            <strong>Address:</strong> <PlaceInfoRetriever placeId={thisPlace.placeid} />
          </Typography>
        </CardContent>
        <GoogleMapsComponent placeId={thisPlace.placeid}/>
      </Card>
    </Box>
    )
  }
  
  export default Place;