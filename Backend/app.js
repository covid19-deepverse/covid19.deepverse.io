const express = require('express')
var request =require('request')
const app = express()
const axios =require ('axios')
const port =5000;
const url="https://covid19.mathdro.id/api"
const url2="https://disease.sh/v3/covid-19"
app.get('/', (req, res) => {
  res.send('Hello World : API SERVER')
})
app.get('/getCountry', (req, res) => {
   
    let changeableUrl=url;
  
      request(changeableUrl,
        function(error,response,body){
            if(!error && response.statusCode ==200){
                var parsedBody=JSON.parse(body)
                const modifiedData={
                        confirmed:parsedBody.confirmed,
                        recovered:parsedBody.recovered,
                        deaths:parsedBody.deaths,
                        lastUpdate:parsedBody.lastUpdate
                    }
            
                res.send(modifiedData)
            }
        })
   
  })
app.get('/getCountry/:country', (req, res) => {
    var country=req.params.country
    let changeableUrl=url;
    if(country){
        changeableUrl=`${url}/countries/${country}`
    }
      request(changeableUrl,
        function(error,response,body){
            if(!error && response.statusCode ==200){
                var parsedBody=JSON.parse(body)
                const modifiedData={
                    confirmed:parsedBody.confirmed,
                    recovered:parsedBody.recovered,
                    deaths:parsedBody.deaths,
                    lastUpdate:parsedBody.lastUpdate
                }
        
            res.send(modifiedData)
            }
        })
   
  })

  app.get('/daily', (req, res) => {
   
    let changeableUrl=`${url}/daily`;
  
      request(changeableUrl,
        function(error,response,body){
            if(!error && response.statusCode ==200){
                var parsedBody=JSON.parse(body)
                const modifiedData =parsedBody.map((dailyData)=>({
                    confirmed:dailyData.confirmed.total,
                    deaths:dailyData.deaths.total,
                    date:dailyData.reportDate
        
                }))
                res.send(modifiedData)
            }
        })
   
  })

  
  app.get('/country',(req,res)=>{
    let changeableUrl=`${url}/countries`;
  
      request(changeableUrl,
        function(error,response,body){
            if(!error && response.statusCode ==200){
                var parsedBody=JSON.parse(body)
                res.send(parsedBody)
            }
        })
    
  })
app.get('/getCountriesData',(req,res)=>{
    let changeableUrl=`${url2}/countries`;
    request(changeableUrl,
        function(error,response,body){
            if(!error && response.statusCode ==200){
                var parsedBody=JSON.parse(body)
                const modifiedData =parsedBody.map((country)=>({
                    name: country.country, // United States, United Kingdom
                    value: country.countryInfo.iso2, // UK, USE, FR
        
                }))
                
                res.send(modifiedData)
                
            }
        })

})
app.get('/getCountriesData/:country',(req,res)=>{
    var country=req.params.country
    let changeableUrl=url2
    if(country){
        changeableUrl=`${url2}/countries/${country}`
    }
    request(changeableUrl,
        function(error,response,body){
            if(!error && response.statusCode ==200){
                var parsedBody=JSON.parse(body)
                
                res.send(parsedBody)
                
            }
        })

})
app.get('/getAllData',(req,res)=>{
  
  
    let changeableUrl=url2;
  
    request(changeableUrl,
        function(error,response,body){
            if(!error && response.statusCode ==200){
                var parsedBody=JSON.parse(body)
                
                res.send(parsedBody)
                
            }
        })

})
  

  

app.listen(port, () => {
  console.log(`Start server at port ${port}.`)
})