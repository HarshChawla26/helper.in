const express = require('express')
const app = express();

const router = express.Router();

const auth = require('./routes/auth')
const user = require('./routes/users')
const cors = require('cors')
const userDB = require('./models/user')

app.use(cors())
app.use(express.json())

const db = require('./db')
const PORT = 4000;

app.use('/user',user)
// app.use('/auth',auth);


app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})
