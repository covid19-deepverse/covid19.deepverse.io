/**
 *   Statistics Page
 *
 */

import React from 'react'
import LineChart from '../components/LineChart';
import CountryPicker from'../components/CountryPicker';
import axios from 'axios'
class Statistics extends React.Component  {
  state={
    data:{},
    country:'',
 
  }
  handleCountryChange =async (country)=>{
    const fetchdata=await axios.get(`/getCountry/${country}`)
    this.setState({data:fetchdata,country:country});
    //fetch data 
     
    // set the state
}
  async componentDidMount (){
    const fetchdata=await axios.get('/getCountry')
    this.setState({data:fetchdata.data});
     
    
    console.log (this.state.data);
}
  
 render(){
  const {data,country}=this.state;
  return (
    <div className="statistics">
      <div className="chart">
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <LineChart data={data} country={country}/>
      </div>
    </div>
    )
  }
}

export default Statistics;
