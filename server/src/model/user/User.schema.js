const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        maxlength :50,
        required: true
    },

    id:{
        type: String,
        minlength: 6,
        required: true
    },

    division: {
        type: String,
        maxlength :40,
        required: true
    },

    position: {
        type: String,
        maxlength :40,
        required: true
    },

    phoneNumber: {
        type: Number,
        maxlength: 11,
        required: true
    },

    email: {
        type: String,
        maxlength :100,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 100,
        required: true
    } ,
    refreshJWT:{
        token:{
            type: String,
            maxlength: 500,
            default: ""
        },
        addedAt:{
            type: Date,
            required: true,
            default: Date.now()
    }
    }
});

module.exports = {
    UserSchema: mongoose.model("User", UserSchema)
};