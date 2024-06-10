'use client'

import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

interface GoogleMapComponentProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ latitude, longitude, zoom }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_API_KEY_HERE', // Replace with your actual API key
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{
        height: '400px',
        width: '100%',
      }}
      zoom={zoom}
      center={{
        lat: latitude,
        lng: longitude,
      }}
    />
  );
};

export default GoogleMapComponent;

