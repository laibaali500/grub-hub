import { useEffect, useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';

const libraries = ['places'];

const PlaceInfoRetriever = ({ placeId }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
    libraries,
  });

  const [address, setAddress] = useState('');

  useEffect(() => {
    if (isLoaded && placeId) {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      service.getDetails({ placeId }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setAddress(place.formatted_address);
        } else {
          console.error('Error fetching place details:', status);
        }
      });
    }
  }, [isLoaded, placeId]);

  if (loadError) {
    return <div>Error loading info</div>;
  }

  if (!isLoaded) {
    return <div>Loading info...</div>;
  }

  return <div>{address || 'Fetching address...'}</div>;
};

export default PlaceInfoRetriever;
