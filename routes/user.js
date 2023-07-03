const express = require('express')
const router = express.Router();

// const User = require('../model/User.js');


const UserController = require('../Controller/userController.js');



router.get('/User',UserController.getAlluser);

router.get('/User/:id' ,UserController.fetchSpecificUser);

router.patch('/User/:id',UserController.updateSpecificUser);

router.delete('/User/:id',UserController.deleteUser);

router.post('/User',UserController.addUser);

module.exports = router;