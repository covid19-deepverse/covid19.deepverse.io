/**
 *   Statistics Page
 *
 */

import React from 'react';
import LineChart from '../components/LineChart';

function Statistics() {
  return (
    <div className="statistics">
      <div className="chart">
        <LineChart />
      </div>
    </div>
  );
}

export default Statistics;
