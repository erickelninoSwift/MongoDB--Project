
const Task = require('./model/Task.js');
const User = require('./model/User.js');

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






