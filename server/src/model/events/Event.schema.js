const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

const EventSchema = new Schema({

    formID: {
        type: String,
        unique: true,
        default: uuidv4
    },
    applicantName: {
        type: String,
        maxlength :50,
        required: true
    },

    applicantIndex:{
        type: String,
        minlength: 6,
        required: true
    },

    faculty: {
        type: String,
        maxlength :40,
        required: true
    },

    department: {
        type: String,
        maxlength :40,
        required: true
    },

    applicantEmail: {
        type: String,
        maxlength :100,
        required: true
    },

    phoneNumber: {
        type: String,
        maxlength: 11,
        required: true
    },

    placename: {
        type: String,
        maxlength :50,
        required: true
    },
    reasonofEvent: {
        type: String,
        maxlength :500,
        required: true
    },
    selectedDate: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending","Welfare approved","DVC approved","approved","rejected","closed"]
    }
});

module.exports = mongoose.model("Event", EventSchema);