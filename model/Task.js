
const taskSchema = new mongoose.Schema({
    description: String,
    isCompleted: Boolean
});

const TaskModel = mongoose.model('Task', taskSchema);

module.exports = TaskModel;