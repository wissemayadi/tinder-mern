import express from "express";
import mongoose from "mongoose";
import Cors from "cors"
import Cards from "./dbCards.js";

//app config

const app = express();
const port =process.env.PORT || 5000;
const connection_url=``
//Middelwares
app.use(express.json());
app.use(Cors());
//DB config 

const connectDB = async () => {
    try {
      await mongoose.connect(connection_url, {
        // useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log(`DataBase connected successfully`);
    } catch (error) {
      console.log("error", error);
    }
  };
connectDB();
//API Endpoints

// app.get("/",(req,res)=>res.status(200).send("hello"));

app.get('/tinder/cards',(req,res)=>{


  Cards.find((err,data)=>{
  if(err){
      res.status(500).send(err)
  }else{
      res.status(201).send(data)
  }
  })
  
  });

app.post('/tinder/cards',(req,res)=>{

const dbCard= req.body;
Cards.create(dbCard ,(err,data)=>{
if(err){
    res.status(500).send(err)
}else{
    res.status(201).send(data)
}
})

});

//Listener

app.listen(port,()=>console.log(`the app is listening on localhost ${port}`))








