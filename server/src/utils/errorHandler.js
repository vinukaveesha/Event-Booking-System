const errorHandler = (error,res)=>{
    console.log(error);
    res.status(error.status ||500);
    res.json(
        {
            error:error.message
        }
    );
};

module.exports = errorHandler;