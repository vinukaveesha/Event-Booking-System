const jwt = require('jsonwebtoken');

const createAccessJwt = (payload) => {
    const accessJWT = jwt.sign(
        {payload}, 
        process.env.JWT_ACCESS_SECRET,
        {expiresIn: "1h"}
    
    );  

    return Promise.resolve(accessJWT);
}

const createRefreshJwt = (payload) => {
    const refreshJWT = jwt.sign(
        {payload}, 
        process.env.JWT_REFRESH_SECRET,
        {expiresIn: "30d"}
    );

    return Promise.resolve(refreshJWT);
}

module.exports = {createAccessJwt, createRefreshJwt};

