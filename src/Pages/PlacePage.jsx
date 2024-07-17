import { useParams } from 'react-router-dom';
import { Box, Card, Typography ,CardContent } from '@mui/material';

function Place({places}) {
  const { placeId } = useParams();
  const thisPlace = places.at(placeId - 1)
    // return (
    //   <div>
    //     <h1>{thisPlace.name}</h1>
    //   </div>
    // );
    return (
      <Box sx={{ p: 3 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {thisPlace.name}
          </Typography>
          <Typography variant="body1">
            <strong>Address:</strong> {thisPlace.location}
          </Typography>
        </CardContent>
      </Card>
    </Box>
    )
  }
  
  export default Place;