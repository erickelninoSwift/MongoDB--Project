
const Task = require('./model/Task.js');
const User = require('./model/User.js');
const express = require('express');
const bcrypt = require('bcryptjs');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());


const colors = require('colors');

const userRouter = require('./routes/user.js');
const taskRouter = require('./routes/task.js');



app.use(userRouter);
app.use(taskRouter);



app.listen(PORT, () =>{
    console.log(`Server is running on PORT: ${PORT}`);
})

process.on('uncaughtException', error =>{
    console.log(`Error was found : ${error.message}`);
    process.exit(1);
});



// async function databaseTask()
// {
    
//     try
//     {
//         const users = new User({
//             name: 'Jackpot',
//             surname: 'Errik',
//             phone :'0812119429',
//             age: 45,
//             email : 'jackpot@yahoo.com',
//             password: '#Erickelnino'
//         });
    
//         await users.save();

//     }catch(error)
//     {
//         console.log(colors.red.underline(error.message));
//     }finally
//     {
//         console.log('Function done executing');
//     }
// }


// USER FETCH


// TASK DELETE




// ORGANISE ROUTE AND FUCNTIONALITIES







// async function addTaskDatabase()
// {
//     try
//     {

//        const newTask = new Task({

//         description:'This is Task 1',
//         isCompleted: true
      
//        });

//        console.log(newTask);
//        await newTask.save();


//     }catch(error)
//     {
//         console.log(`Error was found while adding your task :${error.message}`);

//     }finally
//     {
//         console.log('All the functions are done ');
//     }

// }

// databaseTask();
// addTaskDatabase();






