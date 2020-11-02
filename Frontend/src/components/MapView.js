/**
 *   Map Page
 *
 */

import React from 'react';
import { Map as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';
import worldGeoJSON from 'geojson-world-map';
import { showDataOnMap } from './util';
function MapView({ countries, casesType, center, zoom }) {
  
  return (
    <div className="leaflet-container">
      <LeafletMap center={center}
        zoom={zoom}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}>
          <GeoJSON
          data={worldGeoJSON}
          style={() => ({
            color: '#4a83ec',
            weight: 0.5,
            fillColor: "#1a1d62",
            fillOpacity: 1,
          })}
        />
          
       
          {showDataOnMap(countries, casesType)}

      </LeafletMap>
    </div>
  );
}

export default MapView;
