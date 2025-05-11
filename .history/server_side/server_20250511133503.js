require ('dotenv').config();
const express = require('express');
const cors= require('cors');
const mongoose = require('mongoose');


const app= express();
const PORT = process.env.PORT || 5000;
const MONGO_URI= process.env.MONGO_URI;

cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["content-type", "Authorization"],
});

app.use(express.json);

//database connexion
mongoose
    .connect(MONGO_URI)
     .then(()=> console.log("mongodb is connected"))
      .catch((e) => console.log(e));


app.use((err,req,resizeBy,next)=>{
    console.log(err,stack);
})

