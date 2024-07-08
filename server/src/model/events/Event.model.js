const {EventSchema} = require('./Event.schema');

const insertEvent = (eventObj)=>{
    return new Promise((resolve,reject)=>{
        try {
            EventSchema(eventObj)
            .save()
            .then((data)=>resolve(data))
            .catch((error)=>reject(error));
        }        
        catch (error) {
            console.log(error)
            reject(error);
        }
    })
};

const getEventByFormID = async (FormID) => {
    try {
        return await EventSchema
        .findOne({FormID})
        .select({__v:0});
    }
    catch (error){
        console.log(error);
    }    
};

const updateEvent = async (FormID,eventObj) => {
    try {
        return await EventSchema
        .findOneAndUpdate({FormID},{$set:eventObj},{new:true});
    }
    catch (error){
        console.log(error);
    }    
}

const updateEventStatus = async (FormID,status) => {
    try {
        return await EventSchema
        .findOneAndUpdate({FormID},{$set:{status}},{new:true});
    }
    catch (error){
        console.log(error);
    }    
}

const closeEvent = async (FormID) => {
    try {
        return await EventSchema
        .findOneAndUpdate({FormID},{$set:{status:"closed"}},{new:true});
    }
    catch (error){
        console.log(error);
    }    
}   

module.exports = {insertEvent,getEventByFormID,updateEvent,updateEventStatus}