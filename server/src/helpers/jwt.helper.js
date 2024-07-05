const jwt = require('jsonwebtoken');
const {setJWT, getJWT} = require('./redis.helper');

const createAccessJwt = async (email,_id) => {

    try {
        const accessJWT = jwt.sign(
            {email}, 
            process.env.JWT_ACCESS_SECRET,
            {expiresIn: "1h"}
        
        );  
    
        await setJWT(accessJWT,_id);
    
        return Promise.resolve(accessJWT);
        
    } catch (error) {
        return Promise.reject(error);
    }  
};

// const createRefreshJwt = (payload) => {
//     const refreshJWT = jwt.sign(
//         {payload}, 
//         process.env.JWT_REFRESH_SECRET,
//         {expiresIn: "30d"}
//     );
//     return Promise.resolve(refreshJWT);
// }

const createRefreshJwt = async (email) => {
    try {
        const refreshJWT = jwt.sign(
            { email },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: "30d" }
        );

        return refreshJWT;
    } catch (error) {
        throw new Error("Failed to create refresh JWT");
    }
};

module.exports = {createAccessJwt,createRefreshJwt};

