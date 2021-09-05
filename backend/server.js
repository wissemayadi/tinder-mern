import express from "express";
import mongoose from "mongoose";

//app config

const app = express();
const port =process.env.PORT || 5000;

//Middelwares

//DB config 



//API Endpoints

app.get("/",(req,res)=>res.status(200).send("hello"));


//Listener

app.listen(port,()=>console.log(`the app is listening on localhost ${port}`))








