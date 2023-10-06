const express=require("express");
const dotenv=require("dotenv");
const cors=require('cors')
const chats=require("./data/data");
const connectDB = require("./config/db");


const app=express();
dotenv.config()
connectDB();
app.use(cors())

app.get('/',(req,res)=>{
    res.send("API is running");
})

app.get('/api/chat',(req,res)=>{
    console.log(chats);
    res.send(chats);
})

app.get('/api/chat/:id',(req,res)=>{
    const singleChat=chats.find(c=>c._id===req.params.id);
    console.log(singleChat);
    res.send(singleChat);
})

const PORT=process.env.PORT ||5000;
app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
}) 