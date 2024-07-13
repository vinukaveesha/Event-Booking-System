const express = require("express");
const {route} = require("./event.router");
const router = express.Router();
const {insertUser} = require("../model/user/User.model");
const {hashPassword} = require("../helpers/bcrypt.helper");

router.all("/",(req,res,next)=>{
    //res.json({message:"Return from user router"})
    next();
});

router.post("/",async (req,res)=>{

    const {name,id,division,position,phoneNumber,email,password} = req.body;
    try{
        const hashedPassword = await hashPassword(password);

        const newUserObj = {
            name,
            id,
            division,
            position,
            phoneNumber,
            email,
            password:hashedPassword
        };

        const result = await insertUser(newUserObj);
        console.log(result);
        res.json({message:"New user is created",data:result});
    }
    
    catch(error){
        console.log(error);
        res.json({status:"error", message:error.message});
    } 
});

module.exports = router;