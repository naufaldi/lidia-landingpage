"use client"

import React from 'react';
import ContainerGrid from '@/components/ui/container-grid';
import TitleSection from '../ui/title-section';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define TypeScript types for the coordinates
interface Coordinates {
  lat: number;
  lng: number;
}

const center: Coordinates = {
  lat: -6.2088,
  lng: 106.8456
};

const Location: React.FC = () => {
  const icon = L.icon({ iconUrl: "/marker-icon.png" });

  return (
    <ContainerGrid>
      <div className="col-span-6">
        <TitleSection
          sectionSubtitle='🗺• Our Library Location'
          sectionTitle='LOCATION'
        />
      </div>
      <div className="col-span-12 overflow-hidden rounded-xl shadow-2xl">
        <MapContainer center={[center.lat, center.lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[center.lat, center.lng]} icon={icon} >
            <Popup>
              DKI Jakarta
            </Popup>
          </Marker>
        </MapContainer>

      </div>
    </ContainerGrid>
  );
};

export default Location;