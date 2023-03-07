const express = require('express');
const {connect,PORT} = require('./config/serverConfig');
const config = require('./config/serverConfig');
const app = express();


const serverStart = ()=>{
    app.listen(PORT,async()=>{
        console.log('Server is running on port No:',PORT);
        await connect();
        console.log("Mongo db is connected");
    });
}

serverStart();