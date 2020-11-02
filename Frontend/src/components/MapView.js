/**
 *   Map Page
 *
 */

import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { showDataOnMap } from './util';
function MapView({ countries, casesType, center, zoom }) {
  
  return (
    <div className="leaflet-container">
      <Map center={center} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {showDataOnMap(countries, casesType)}

      </Map>
    </div>
  );
}

export default MapView;
