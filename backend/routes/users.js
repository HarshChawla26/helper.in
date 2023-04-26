const express = require('express');
const router = express.Router();
const userDB = require('./../models/user')

router.post('/data',async (req,res)=>{
    const {name,email,pwd,phone,address,services,role} = req.body;
    const user = new userDB({
        name,
        email,
        pwd,
        phone,
        address,
        services,
        role
    });
    user.save().then((doc)=>{
    })

    res.send(user);
})

router.get('/data',async (req,res)=>{
    const users = await userDB.find();
    res.send(users);
})


module.exports = router;