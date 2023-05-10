const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
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
                cart:[],
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

router.post('/:_id/addtocart',async(req,res)=>{
    const {_id} = req.params;
    const {cart} = req.body
    const user = await userDB.findOne({_id});
    if(user){
        user.cart = cart
        user.save();
    }
    res.send(user)
})

router.get('/:_id/cart',async (req,res)=>{
    const {_id} = req.params;
    const user = await userDB.findOne({_id})
    res.send(user.cart)
})

router.post('/:_id/addServices',async(req,res)=>{
    const {_id} = req.params;
    const {cart} = req.body
    const user = await userDB.findOne({_id});
    if(user){
        user.cart = cart
        user.save();
    }
    res.send(user)
})

router.get('/:_id/services',async (req,res)=>{
    const {_id} = req.params;
    const user = await userDB.findOne({_id})
    res.send(user.services)
})




// Login API
router.post('/login',async (req,res)=>{
    const {email,pwd} = req.body;
    if(!email||!pwd) return res.status(400).json({"msg":"invalid credentials"})

    const user = await userDB.findOne({email});

    if(!user) return res.status(404).json({"msg":"Invalid credentials"});
    const isMatch = await bcrypt.compare(pwd,user.pwd);
    if(!isMatch){
        return res.json({msg:'Invalid credentials'})
    }
    res.status(200).json({user:user._id});
})

router.get('/:_id',async (req,res)=>{
    const {_id} = req.params
    const user = await userDB.findOne({_id});
    if(!user){
        return res.send({msg:'No user exist'})
    }
    res.send(user)
})
router.get('/:_id/services',async (req,res)=>{
    const {_id} = req.params
    const user = await userDB.findOne({_id});
    if(!user){
        return res.send({msg:'No user exist'})
    }
    res.send(user.services)
})
router.delete('/:_id/delete',async (req,res)=>{
    const {_id} = req.params
    const user = await userDB.findByIdAndDelete({_id});
    if(!user){
        return res.send({msg:'No user exist'})
    }
    res.send({msg:'User deleted!'});
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