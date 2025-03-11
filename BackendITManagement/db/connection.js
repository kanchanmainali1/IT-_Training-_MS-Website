const mongoose = require('mongoose');   


const connectDB = async () => { 
    try{
        mongoose.connect('mongodb://localhost:27017/ITManagement')
        console.log('MongoDB connected');
        
         }catch(err){
        console.error(err.message);
         }
        }

    module.exports = connectDB;