import express from "express";
import dotenv from "dotenv";
import IP from 'ip'
const PORT=process.env.PORT||4000;

const app=express();
app.get("/",(req,res)=>{
    const ipaddress=IP.address();
    res.send(`Your IP address is ${ipaddress}`);
})
app.listen(PORT,()=>{
    console.log("Server is running on port 3000");
})