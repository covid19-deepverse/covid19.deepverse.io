const express = require('express')
var request =require('request')
const app = express()
const axios =require ('axios')
const port =5000;
const url="https://covid19.mathdro.id/api"
app.get('/', (req, res) => {
  res.send('Hello World : API SERVER')
})