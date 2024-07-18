import React from 'react';
import { useEffect, useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { CircularProgress } from '@mui/material';

const libraries = ['places'];

const PlaceInfoRetriever = ({ placeId, dataType }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
    libraries,
  });

  const [data, setData] = useState(null);

  useEffect(() => {
    if (isLoaded && placeId) {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      const request = {
        placeId: placeId,
        fields: ['formatted_address', 'price_level', 'photos'] // Requesting only the fields we need
      };

      service.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          if (dataType === 'address') {
            setData(place.formatted_address);
          } else if (dataType === 'price_level') {
            setData(place.price_level);
          } else if (dataType === 'photo' && place.photos && place.photos.length > 0) {
            const photoUrl = place.photos[0].getUrl({ maxWidth: 400, maxHeight: 400 });
            setData(photoUrl);
          }
        } else {
          console.error('Error fetching place details:', status);
        }
      });
    }
  }, [isLoaded, placeId, dataType]);

  if (loadError) {
    return <div>Error loading info</div>;
  }

  if (!isLoaded) {
    return <div>Loading info...</div>;
  }

  if (dataType === 'photo') {
    return data ? <img src={data} alt="Place" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <CircularProgress />;
  }

  return <div>{data !== null ? data : 'Fetching data...'}</div>;
};

export default PlaceInfoRetriever;
