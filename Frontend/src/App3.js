const express=require('express')
const app=express()
const PORT =process.env.PORT ||9999
app.use(express.json())



app.get("/", (req, res) => {
    res.sendFile(__dirname+'/App.js')
})


app.listen(PORT,(req,res)=>{
    console.log(`app is running on ${PORT}`)
})

