const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Task').then(() =>{

    console.log('Database well connected');

}).catch(error =>{
    console.log(`Error while connecting to the Database : ${error}`);

});

module.exports = mongoose;