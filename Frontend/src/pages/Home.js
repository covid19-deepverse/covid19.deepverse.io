/**
 *   Home Page
 *
 */

import React,{useState,useEffect} from 'react'
import Filters from '../components/Filters';
import MapView from '../components/MapView';
import SelectCountry from '../components/Select'
import { sortData, prettyPrintStat } from '../components/util';

import axios from 'axios'

function Home() {
  const [country, setCountry] = useState('worldwide');
  const [casesType, setCasesType] = useState('cases');
  const [mapCenter, setMapCenter] = useState({ lat: 34.80764, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);

  const fetchCountry =async ()=>{
    try {
        const data=await axios.get('/getCountriesData');

      console.log(data.data)
        return (data.data)
    } catch (error) {
        console.log(error)
    }
} 
useEffect(()=>{
    const fetchAPI = async () => {
      setMapCountries(await fetchCountry())
    }
   fetchAPI();
},[setMapCountries])

  

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
    // console.log(countryCode)

      
      // });

    // https://disease.sh/v3/covid-19/all
  };

  return (
    <div className="home">
      <Filters />
       <MapView   
       casesType={casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom} /> 
      <SelectCountry handleCountryChange={handleCountryChange} country={country}/> 
      
    </div>
  );
}

export default Home;
