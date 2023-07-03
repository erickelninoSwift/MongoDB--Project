const express = require('express')
const router = express.Router();

const Task = require('../model/Task.js');

const controllerTask = require('../Controller/taskController.js');

router.delete('/Task/:id',controllerTask.deleteATask);

router.get('/Task/:id',controllerTask.getSpecifictask);

router.get('/Task',controllerTask.fetchAllTasks);

router.post('/Task',controllerTask.addtask);

module.exports = router;

