import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from'@material-ui/core';
import styles from '../assets/css/CountryPicker.module.css';
import axios from 'axios'
const CountryPicker =({handleCountryChange})=>{

    const [fetchedCountries,setFetchCountried]=useState([]);

    const fetchCountries =async ()=>{
        try {
            const {data:{countries}}=await axios.get('/country');
            
            return countries.map((country)=>country.name);
        } catch (error) {
            console.log(error)
        }
    } 
    useEffect(()=>{
        const fetchAPI =async ()=>{
            setFetchCountried(await fetchCountries())
        }
       fetchAPI();
       
    },[setFetchCountried])
   
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=>  <option key={i} value={country }>{country} </option>   )}
            </NativeSelect>
        </FormControl>
        )
}  

export default CountryPicker;