const express = require("express");
const router = express.Router();
const {insertEvent,getEventByFormID,updateEvent,closeEvent, getEventForms} = require("../model/events/Event.model");

// router.all("/",(req,res,next)=>{
//     res.json({message:"Return from event router"})
// });

// create event
router.post("/", async (req, res) => {
    try {
        const {
            applicantName,
            applicantIndex,
            faculty,
            department,
            applicantEmail,
            phoneNumber,
            placename,
            reasonofEvent,
            selectedDate,
            startTime,
            endTime
        } = req.body;

        const newEventObj = {
            applicantName,
            applicantIndex,
            faculty,
            department,
            applicantEmail,
            phoneNumber,
            placename,
            reasonofEvent,
            selectedDate,
            startTime,
            endTime
        };

        const result = await insertEvent(newEventObj);
        res.json({ message: "New event is created", data: result });
    } catch (error) {
        console.log(error);
        if (!res.headersSent) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }
});

// get event by FormID
router.get("/form/:formID",async(req,res)=>{

    try {
        const {formID} = req.params;
        console.log("FormID in event router ",formID);
        const event = await getEventByFormID(formID);
        if (!event) {
            return res.status(404).json({ status: "error", message: "Event not found" });
        }
        res.json({event});
    } 
    
    catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: error.message });
        }
    }
);

// get event forms by status
router.get("status/:status", async (req, res) => {
    const { status } = req.params;

    try {
        const events = await getEventForms(status);
        if (!events || events.length === 0) {
            return res.status(404).json({ status: "error", message: "No events found" });
        }
        res.json({ events });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: error.message });
    }
});

// update event by FormID
router.patch("/:formID",async(req,res)=>{
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

// update event status by FormID
router.patch("/:FormID/status",async(req,res)=>{
    try {
        const {FormID} = req.params;
        const {status} = req.body;
        const event = await updateEventStatus(FormID,status);
        res.json({event});
    } 
    
    catch (error) {
        console.log(error);
        res.json({status:"error", message:error.message});
        }
    }
);

// close event by FormID
router.patch("/:FormID/close",async(req,res)=>{
    try {
        const {FormID} = req.params;
        const event = await closeEvent(FormID);
        res.json({event});
    } 
    
    catch (error) {
        console.log(error);
        res.json({status:"error", message:error.message});
        }
    }
);



module.exports = router;