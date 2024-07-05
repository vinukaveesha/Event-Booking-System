const express = require("express");
const {route} = require("./event.router");
const router = express.Router();
const {insertUser,getUserByEmail} = require("../model/user/User.model");
const {hashPassword,comparePassword} = require("../helpers/bcrypt.helper");
const {createAccessJwt, createRefreshJwt} = require("../helpers/jwt.helper");



router.all("/",(req,res,next)=>{
    next();
});

//create user
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

//create signin router
router.post("/login",async (req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.json({status:"error",message:"Invalid form submission"});
    }

    try {
        const user = await getUserByEmail(email);    //get user with email from db

        const passwordFromDb = user && user._id ? user.password : null;
        
        if (!passwordFromDb) {
            return res.json({ status: "error", message: "Invalid email or password" });
        };
        
        const result = await comparePassword(password,passwordFromDb);   //compare hashed password with password from db

        if (!result){
            return res.json({ status: "error", message: "Invalid email or password" });
        }

        const accessJWT = await createAccessJwt(user.email,`${user._id}`);   //create access jwt
        const refreshJWT = await createRefreshJwt(user.email,`${user._id}`);  //create refresh jwt

        res.json({ 
            status: "successful", 
            message: "User login is successful.", 
            accessJWT, 
            refreshJWT
        });

    } catch (error) {
        res.json({ status: "error", message: error.message });

        console.log(error);
    }
})

module.exports = router;