const express = require("express");
const router = express.Router();
const {insertEvent,getEventByFormID,updateEvent} = require("../model/events/Event.model");

router.all("/",(req,res,next)=>{
    res.json({message:"Return from event router"})
});

// create event
router.post("/",async(req,res)=>{
    try {
        const {name,index,faculty,department,email,mobileNumber,placeName,reasonOfEvent,selectedDate,startTime,endTime} = req.body;

        const newEventObj = {
            name,
            index,
            faculty,
            department,
            email,
            mobileNumber,
            placeName,
            reasonOfEvent,
            selectedDate,
            startTime,
            endTime
        };

        const result = await insertEvent(newEventObj);
        res.json({message:"New event is created",data:result});
        
        } 
    
    catch (error) {
        console.log(error);
        res.json({status:"error", message:error.message});
        }
    }
);

// get event by FormID
router.get("/:FormID",async(req,res)=>{
    try {
        const {FormID} = req.params;
        const event = await getEventByFormID(FormID);
        res.json({event});
    } 
    
    catch (error) {
        console.log(error);
        res.json({status:"error", message:error.message});
        }
    }
);


// update event by FormID
router.patch("/:FormID",async(req,res)=>{
    try {
        const {FormID} = req.params;
        const eventObj = req.body;
        const event = await updateEvent(FormID,eventObj);
        res.json({event});
    } 
    
    catch (error) {
        console.log(error);
        res.json({status:"error", message:error.message});
        }
    }
);



module.exports = router;