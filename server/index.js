const express= require('express')
const bodyparser= require('body-parser')
const cors=require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const User= require('./model')


const app= express()
app.use(bodyParser.json({extended:true}))

app.use(cors())

mongoose.connect('mongodb://localhost:27017/test')


app.get('/',(req,res)=>{
    res.send("hello")
})

app.post('/register',async (req,res)=>{
    
    try{

        console.log(req.body)
        const user=await User.create({
            name:req.body.name,
            surname:req.body.surname,
            email:req.body.email,
            password:req.body.password
        })
    } catch (err){

        res.json(err)
    }
    
    


})

app.listen(4000,()=>{
    console.log('server listening on port 4000')
})