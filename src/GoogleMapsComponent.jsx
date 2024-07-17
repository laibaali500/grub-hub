import React from 'react';

const GoogleMapsComponent = ({ placeId }) => {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_MAPS_API_KEY}&q=place_id:${placeId}`;

  return (
    <div style={{ width: '50vw', height: '50vh' }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMapsComponent;