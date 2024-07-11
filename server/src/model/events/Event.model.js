const Event = require('./Event.schema');

const insertEvent = (eventObj) => {
    return new Promise((resolve, reject) => {
        try {
            const newEvent = new Event(eventObj);
            newEvent.save()
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

const getEventByFormID = async (formID) => {
    try {
        return await Event.findOne({ formID }).select({ __v: 0 });
    } catch (error) {
        console.log("Not found");
    }
};

const updateEvent = async (formID, eventObj) => {
    try {
        return await Event.findOneAndUpdate({ formID }, { $set: eventObj }, { new: true });
    } catch (error) {
        console.log(error);
    }
};

const updateEventStatus = async (formID, status) => {
    try {
        return await Event.findOneAndUpdate({ formID }, { $set: { status } }, { new: true });
    } catch (error) {
        console.log(error);
    }
};

const closeEvent = async (formID) => {
    try {
        return await Event.findOneAndUpdate({ formID }, { $set: { status: "closed" } }, { new: true });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { insertEvent, getEventByFormID, updateEvent, updateEventStatus, closeEvent };