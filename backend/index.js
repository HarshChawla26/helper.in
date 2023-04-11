const express = require('express')
const app = express();

const db = require('./db')
const PORT = 4000;

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})
