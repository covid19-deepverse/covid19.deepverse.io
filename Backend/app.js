const express = require('express')
var request =require('request')
const app = express()
const axios =require ('axios')
const port =5000;
const url="https://covid19.mathdro.id/api"
app.get('/', (req, res) => {
  res.send('Hello World : API SERVER')
})
app.get('/getCountry', (req, res) => {
   
    let changeableUrl=url;
  
      request(changeableUrl,
        function(error,response,body){
            if(!error && response.statusCode ==200){
                var parsedBody=JSON.parse(body)
                res.send(parsedBody)
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
                res.send(parsedBody)
            }
        })
   
  })

  app.get('/daily', (req, res) => {
   
    let changeableUrl=`${url}/daily`;
  
      request(changeableUrl,
        function(error,response,body){
            if(!error && response.statusCode ==200){
                var parsedBody=JSON.parse(body)
                res.send(parsedBody)
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

  

  

app.listen(port, () => {
  console.log(`Start server at port ${port}.`)
})