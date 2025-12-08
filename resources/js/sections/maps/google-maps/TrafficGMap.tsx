// project-imports
import MainCard from '@/components/MainCard';

// third-party
import { GoogleMap, LoadScript, TrafficLayer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 20.5937,
  lng: 78.9629
};

// ==============================|| MAP - TRAFFIC MAP ||============================== //

export default function TrafficLayerMap() {
  return (
    <MainCard title="Traffic Map">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
          <TrafficLayer />
        </GoogleMap>
      </LoadScript>
    </MainCard>
  );
}
