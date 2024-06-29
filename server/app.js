require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require ('helmet')
const morgan = require('morgan')
const port = process.env.PORT || 3000 

const errorHandler = require('./src/utils/errorHandler')

app.use(helmet())   // API security , HTTP headers
app.use(cors())   // CORS

// MongoDB connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {});

if (process.env.NODE_ENV !== 'production'){
    console.log('Development mode');
    const mDb =mongoose.connection;
    mDb.on('open',()=>{
        console.log('MongoDB is connected');
    });

    mDb.on('error',(error)=>{
        console.log('MongoDB connection error',error);
    });

    app.use(morgan('tiny'))  //  logger
}

app.use(bodyParser.json()) // JSON body parser to JavaScript object

const userRouter = require('./src/routers/user.router');
const eventRouter = require('./src/routers/event.router');

app.use("/v1/user",userRouter);
app.use("/v1/event",eventRouter);

// Error handler
app.use((req,res,next)=>{
    const error = new Error("Resource not found");
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    errorHandler(error,res);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
