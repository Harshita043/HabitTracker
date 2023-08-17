const dotenv = require("dotenv");

dotenv.config();

const mongoose = require('mongoose');

exports.connectMongoose =()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb+srv://Harshita:1234@cluster0.mk0meig.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then((e)=>console.log("Successfully Connected to Mongodb => Habit-Tracker"))
    .catch((e)=>console.log("Not Connected Mongodb", e));
}
