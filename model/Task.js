
const mongoose = require('./MongodbConnection');


const taskSchema = new mongoose.Schema({
    description:{
        type: String,
        require : true,
        trim : true

    },
    isCompleted: {
        type : Boolean,
        default : false
    }
});

const TaskModel = mongoose.model('Task', taskSchema);

module.exports = TaskModel;