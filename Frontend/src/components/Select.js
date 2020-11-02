import React, { useState, useEffect } from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from '@material-ui/core';
import '../assets/css/Select.css';
import axios from 'axios'
function SelectCountry({handleCountryChange,country}){
    const [countries, setCountries] = useState([]);
    const fetchCountry =async ()=>{
        try {
            const data=await axios.get('/getCountriesCode');
    
          console.log(data.data)
            return (data.data)
        } catch (error) {
            console.log(error)
        }
    } 
    useEffect(()=>{
        const fetchAPI = async () => {
            setCountries(await fetchCountry())
        }
       fetchAPI();
    },[setCountries])
  
    return(
    <div className="app_left">
            <div className="app_header">
        <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={(e)=>handleCountryChange(e.target.value)}
              value={country}
            >
             
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country2) => (
                <MenuItem value={country2.value}>{country2.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          </div>
          </div>
    )
    

}
export default SelectCountry;