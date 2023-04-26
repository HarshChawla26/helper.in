
const express = require('express');
const serviceDB = require('../models/service');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json('service API')
})

router.get('/:city',async (req,res)=>{
    const {city} = req.params;
    let services =  await serviceDB.find();
    services = await services.map(e=>{
        const f = e.areas.map(el=>{
            return el.toLowerCase();
        })
        e.areas = f;
        return e;
    });
    const fil = await services.filter(e=>{
        if(e.areas.includes(city)) return true;
        return false;
    })
    res.send(fil);
})
router.post('/data',async(req,res)=>{
    const {name,type,description,price,areas,tags,execID} = req.body;
    const service = new serviceDB({name,type,description,price,areas,tags,execID});
    await service.save();
    res.json({msg:"data posted"});
})

router.get('/data',async (req,res)=>{
    let data = await serviceDB.find();
    res.send(data);
})

router.get('/:_id',async(req,res)=>{
    const {_id} = req.params;
    try {
        
        const service = await serviceDB.findOne({_id});
        if(!service){
            return res.status(404).json({'msg':'no id found'});
        }
        res.json({service});
    } catch (error) {
        console.log(error)
        res.send('error occured'+error)
    }
})

module.exports = router;