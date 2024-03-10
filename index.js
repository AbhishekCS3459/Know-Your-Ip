import express from "express";

const app=express();
app.get("/",(req,res)=>{
    const IP=req.socket.remoteAddress
    res.send(`Your IP address is ${IP}`);
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})