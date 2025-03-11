const express = require('express')
const app= express()
const port = process.env.PORT || 9000
const connect = require('./db/connection')
//const user =require('./model/userModel')
const userRouter=require('./routes/userRoutes')
const cors= require("cors")
connect()
app.use(express.json())
app.use(cors())
app.use('/api/user',userRouter)

//app.post("/api/createUser",)


app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`)
})