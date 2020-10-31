import React,{useState,useEffect} from 'react'
import { Bar } from 'react-chartjs-2'; 
import axios from 'axios';
const BarChart =({data:{confirmed,recovered,deaths},country})=>{
  const Data={
      labels:['Infected','Recovered','Deaths'],
  datasets:[{
      label:'People',
      backgroundColor:['rgba(255,0,0,0.5)','rgba(0,255,0,0.5)','rgba(0,0,255,0.5)'],
      data:[confirmed.value,recovered.value,deaths.value]

  }]
}

    return (
        <>
          <Bar data={Data} option={{
                    legend:{display:false},
                    title:{display:true,text:`Current state in ${country}`}
                }} />
        </>
      );
  
}
export default BarChart;