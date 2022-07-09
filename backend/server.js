const express=require('express');
const notes=require('./data/notes')
const app=express();
app.get('/',(req,res)=>{
    res.send("API is running")
})

app.get('/api/notes',(req,res)=>{
    res.json(notes)
});
app.listen(3000,console.log("Server started on  PORT 3000"))