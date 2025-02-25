require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");

const app=express();
app.use(express.json());

const PORT=3000;

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Database Connected"))
    .catch(()=>console.log("Error in connecting to database"))

app.listen(PORT,()=>console.log("Server is running in http://localhost:3000"))