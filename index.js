
const Task = require('./model/Task.js');
const User = require('./model/User.js');
const express = require('express');

const PORT = process.env.PORT || 3000;

const App = express();



const colors = require('colors');



/*
   /Task POST 
   /Task GET
   /Task/:id GET
   /Task/:id PATCH
   /Task/:id DELETE



   /User POST 
   /User GET
   /User/:id GET
   /User/:id PATCH
   /User/:id DELETE

*/




App.listen(PORT, () =>{


    console.log(`Server is running on PORT: ${PORT}`);

})



async function databaseTask()
{
    
    try
    {
        const users = new User({
            name: 'Jackpot',
            surname: 'Errik',
            phone :'0812119429',
            age: 45,
            email : 'jackpot@yahoo.com',
            password: '#Erickelnino'
        });
    
        await users.save();

        console.log(users);
    }catch(error)
    {
        console.log(colors.red.underline(error.message));
    }finally
    {
        console.log('Function done executing');
    }
}

async function addTaskDatabase()
{
    try
    {

       const newTask = new Task({

        description:'This is Task 1',
        isCompleted: true
      
       });

       console.log(newTask);
       await newTask.save();


    }catch(error)
    {
        console.log(`Error was found while adding your task :${error.message}`);

    }finally
    {
        console.log('All the functions are done ');
    }

}

// databaseTask();
// addTaskDatabase();






