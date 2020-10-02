/**
 *   Map Page
 *
 */

import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

function MapView() {
  const position = [13, 100];
  return (
    <div className="leaflet-container">
      <Map center={position} zoom={5}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    </div>
  );
}

export default MapView;
