const Task = require('./model/Task.js');
const User = require('./model/User.js');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Task').then(() =>{

    console.log('Database well connected');

}).catch(error =>{
    console.log(`Error while connecting to the Database : ${error}`);

});









