import {
  GoogleMap as MapComponent,
  LoadScript,
  Marker,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const location = {
  lat: 26.872576,
  lng: 80.937831,
};

const MyGoogleMap = () => {
  return (
    <LoadScript googleMapsApiKey={'AIzaSyBiadaqtZvi6P8B-U3oe53tTKoFmgqIbvc'}>
      <MapComponent
        center={location}
        mapContainerStyle={containerStyle}
        zoom={15}
      >
        <Marker position={location} />
      </MapComponent>
    </LoadScript>
  );
};

export default MyGoogleMap;
