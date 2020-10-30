import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from'@material-ui/core';

const CountryPicker =({handleCountryChange})=>{
    const [fetchedCountries,setFetchCountried]=useState([]);
    useEffect(()=>{
        const fetchAPI =async ()=>{
            setFetchCountried(await fetchCountries())
        }
        fetchAPI();
    },[setFetchCountried])

    console.log(fetchedCountries)
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