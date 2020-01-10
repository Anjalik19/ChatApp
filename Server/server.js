const express = require('express');
const mongoose = require('mongoose');
//import body parser to convert to js object
const bodyParser = require('body-parser');
const routes = require('');
const dbCon = require('./Configuration/dbConfig');
const app = express();
//import dotenv to load environment variables
require('dotenv').config();
//declare mongoose as global to use in diff positions
mongoose.Promise = global.Promise;
//say express to use parsed json
app.use(bodyParser.json());
//parses text as url encoded data
app.use(bodyParser.urlencoded({
   extended: true
}))
//says express to use navigate to routes 
app.use('/', routes);
mongoose.connect(dbCon.url, {
   useNewUrlParser: true,
    useUnifiedTopology: true ,
   useCreateIndex: true
}).then(() => {
   console.log('DB connected');
}).catch(() => {
   console.log('not connected');
})
module.exports=app;