// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/Task').then(() =>{

//     console.log('Database well connected');

// }).catch(error =>{
//     console.log(`Error while connecting to the Database : ${error}`);

// });

const mongoose = require('./MongodbConnection');


const taskSchema = new mongoose.Schema({
    description: String,
    isCompleted: Boolean
});

const TaskModel = mongoose.model('Task', taskSchema);

module.exports = TaskModel;