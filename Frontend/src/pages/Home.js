/**
 *   Home Page
 *
 */

import React from 'react';
import Filters from '../components/Filters';
import MapView from '../components/MapView';

function Home() {
  return (
    <div className="home">
      <Filters />
      <MapView />
    </div>
  );
}

export default Home;
