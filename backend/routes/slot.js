const express = require('express')
const router = express.Router();
const slotsDB = require('./../models/slots')

router.get('/data',async (req,res)=>{
    const d = await slotsDB.find({});
    res.send(d)
})
const allSlots = [{
    stime:'09:00',
    etime:'10:00',
},{
    stime:'10:00',
    etime:'11:00'
},{
    stime:'11:00',
    etime:'12:00',
},{
    stime:'12:00',
    etime:'13:00',
},{
    stime:'13:00',
    etime:'14:00',
},{
    stime:'14:00',
    etime:'15:00',
},{
    stime:'15:00',
    etime:'16:00',
},{
    stime:'16:00',
    etime:'17:00',
},{
    stime:'17:00',
    etime:'18:00',
}]

// Route to get all available slots of an service
router.get('/avSlots',async (req,res)=>{
    const {id,slot} = req.body;
    try {
        
        const check = await slotsDB.findOne({serviceID:id});
        if(!check){
            return res.json({msg:'nothing to show'});
        }
        
        let arr = allSlots;
        arr = arr.filter((e)=>{
            const slot_start_hr = parseInt(slot.stime.slice(0,2))
            const slot_end_hr = parseInt(slot.etime.slice(0,2))
            const ele_start_hr = parseInt(e.stime.slice(0,2))
            const el_end_hr = parseInt(e.etime.slice(0,2))
            
            return !(ele_start_hr>=slot_start_hr && el_end_hr<=slot_end_hr);
        })
        res.send(arr)
    } catch (error) {
        return res.json({msg:"something went wrong"})
    }
})

router.delete('/data',async (req,res)=>{
    try {
        const slot = await slotsDB.deleteMany();
        res.send('Deletee')
    } catch (error) {
        res.send({error})
    }
})

router.post('/data',async (req,res)=>{
    const {serviceID,slots} = req.body;
    try {
        const checkSlot = await slotsDB.findOne({serviceID});
        if(!checkSlot){
            const slot = new slotsDB({serviceID,slots});
            const response = await slot.save()
        }else{
            // let arr = await checkSlot.slots;
            // let c = await arr.filter((e)=>{
            //     console.log(e)
            //     return true;
            // })
            res.json({msg:'Already Exist'})
        }
        
        res.json({msg:'Data is Posted'});

    } catch (error) {
        console.log(error)
        res.status(400).json({msg:'Something went wrong'})
    }
})

module.exports =  router;