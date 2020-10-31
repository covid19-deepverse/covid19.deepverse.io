/**
 *   Home Page
 *
 */

import React,{useState,useEffect} from 'react'
import Filters from '../components/Filters';
import MapView from '../components/MapView';
import SelectCountry from '../components/Select'
import axios from 'axios'

function Home() {
  const [country, setCountry] = useState('worldwide');

  const handleCountryChange = async (event) => {
    const countryCode = event
    console.log('YOOOO >>>>', countryCode);
  // countryCode === 'worldwide'
    //     ? 'https://disease.sh/v3/covid-19/countries'
    //     : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    // await fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    setCountry(countryCode);

      
      // });

    // https://disease.sh/v3/covid-19/all
  };

  return (
    <div className="home">
      <Filters />
       <MapView /> 
      <SelectCountry handleCountryChange={handleCountryChange} country={country}/> 
      
    </div>
  );
}

export default Home;
