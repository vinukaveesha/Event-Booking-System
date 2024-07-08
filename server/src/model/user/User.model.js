const {UserSchema} = require('./User.schema');

const insertUser = (userObj)=>{
    return new Promise((resolve,reject)=>{
        UserSchema(userObj)
        .save()
        .then((data)=>resolve(data))
        .catch((error)=>reject(error)); 
    
    })
};

const getUserByEmail = async (email) => {
    if (!email) {
        return false;
    }
    try {
        const data = await UserSchema.findOne({ email });
        return data;
    } 
    catch (error) {
        throw error;
    }
};

const storeUserRefreshJWT = (_id,token)=>{
    return new Promise ((resolve,reject) => {
        try {
            UserSchema.findOneAndUpdate(
                {_id},
                {
                    $set:{
                        "refreshJWT.token":token, 
                        "refreshJWT.addedAt":Date.now()
                    },
                },
                {new:true}
            )
            .then((data)=>resolve(data))
            .catch((error)=>{
                console.log(error)
                reject(error)
            });
            
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {insertUser,getUserByEmail,storeUserRefreshJWT}