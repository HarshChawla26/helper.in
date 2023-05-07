const express = require('express');
const router = express.Router();
const userDB = require('../models/user')

//Signing up
router.post('/signup',async (req,res)=>{
    const {name,email,pwd,phone,address,role} = req.body;
    // let user = null
    try {
        const user = await userDB.find({email});
        // if(user) return res.json({msg:'user already registered'});

        const emailString = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$';
        // console.log(user)
        // if(!email.match(emailString)) return res.json({msg:'invalid credentials'});
        if(role==='technician'){
            const newUser = new userDB({
                name,
                email,
                pwd,
                phone,
                services:[],
                role
            });
            newUser.save()
        }else{
            const newUser = new userDB({
                name,
                email,
                pwd,
                phone,
                address,
                services:[],
                role
            });
            newUser.save()
            res.json({msg:'user registered',id: newUser._id});
        }

    } catch (error) {
        return res.json({"msg":"something went wrong"});
    }
})

//ALl users
router.get('/allusers',async(req,res)=>{
    const users = await userDB.find();
    res.send(users);
})


//Login API
router.post('/login',async (req,res)=>{
    const {email,pwd} = req.body;
    if(!email||!pwd) return res.status(400).json({"msg":"invalid credentials"})

    const user = await userDB.findOne({email,pwd});

    // if(!user) return res.status(404).json({"msg":"No User exist"});

    res.status(200).json({user});
})

router.patch('/:id',async (req,res)=>{
    const {practices} = req.body;
    const {id} = req.params;
    
    const user = await userDB.findOne({_id:id});
    console.log(practices)
    
    practices.forEach(element => {
        user.services.push(element);
    });
    user.save();
    res.json({msg:'Service added'});
})

module.exports = router;