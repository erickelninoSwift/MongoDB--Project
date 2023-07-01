const Task = require('./model/Task.js');
const User = require('./model/User.js');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Task').then(() =>{

    console.log('Database well connected');

}).catch(error =>{
    console.log(`Error while connecting to the Database : ${error}`);

});

async function databaseTask()
{
    
    try
    {
        const users = new User({
            name: 'Eriik',
            surname: 'Elnino',
            phone :'0812119429',
            age: 23,
            email : 'erick@yahoo.com',
            password: '#Erickelnino'
        });
    
        await users.save();

        console.log(users);
    }catch(error)
    {

        throw new Error(`Error was found while trying to save data : ${error}`);


    }finally
    {
        console.log('Function done executing');
    }
}

databaseTask();








