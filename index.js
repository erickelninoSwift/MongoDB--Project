
const Task = require('./model/Task.js');
const User = require('./model/User.js');
const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());


const colors = require('colors');


app.get('/',(req,res) =>{

    console.log(req.body)
    res.send('<h1> Jackpot here </h1>');
});

app.post('/Task',async(req,res) =>{

    try
    {
        const description = req.body.description;

    console.log(description);

    const mytask = new Task(req.body)

    await mytask.save();

    return res.status(201).json({
        
        message: true , mytask
    });
    }catch(errno)
    {
        return res.status(400).json({
            success : false ,
            message : errno.message
        });
    }
});

// Add User Information


app.post('/User',async (req,res) =>{

    try
    {
        const newUser = new User(req.body)

        await newUser.save();

        return res.status(200).json({
            message: true , newUser
        });


    }catch(errno)
    {

        return res.status(400).json({
            message: errno.message
        });

    }
    

});


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


app.listen(PORT, () =>{
    console.log(`Server is running on PORT: ${PORT}`);
})

process.on('uncaughtException', error =>{
    console.log(`Error was found : ${error.message}`);
    process.exit(1);
});



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

    }catch(error)
    {
        console.log(colors.red.underline(error.message));
    }finally
    {
        console.log('Function done executing');
    }
}

app.get('/Task',async (req,res) =>{

    try
    {
        const AllMytask =  await Task.find({});
       

        return res.status(200).json({
            success : true,
            AllMytask
        });


    }catch(error)

    {
        return res.status(400).json({
            success : false,
            message : error.message
        });
    }

});

// USER FETCH

app.get('/User',async (req,res) =>{

    try
    {
        const AllUser =  await User.find({});

        return res.json({
            success : true,
            AllUser
        });

    }catch(error)

    {
        return res.json({
            success : false,
            message : error.message
        });
    }

});


// FETCH SPECIFIC USER

app.get('/User/:id' ,async(req,res)=>{

    try
    {
        const userRequestedid = req.params.id;
        
        const userfound = await User.findById(req.params.id);
        if(userfound)
        {

        return res.status(200).json({
            success : true,
            userfound
        });
        }

    }catch(errno)
    {

       return res.status(400).json({

          success : false,
          message : `Error while sending Request : ${errno.message}`
       });

    }

});

// GET SPECIFI TASk
app.get('/Task/:id' ,async(req,res)=>{

    try
    {

        
        const userfound = await Task.findById(req.params.id);
        if(userfound)
        {

        return res.status(200).json({
            success : true,
            userfound
        });
        }

    }catch(errno)
    {

       return res.status(400).json({

          success : false,
          message : `Error while sending Request : ${errno.message}`
       });

    }

});

// Update User data

app.patch('/User/:id',async (req,res) =>{

    console.log(req.params.id);

    try
    {
        const userToUpdate = await User.findByIdAndUpdate(req.params.id,req.body,{

            new : true,
            runValidators : true

        });

        if(!userToUpdate)
        {
            return res.status(404).json({
                success :  false,
                message : 'User was not found'
            })

        }else
        {
            res.status(200).json({
                success : true ,
                userToUpdate
            })
        }
        

    }catch(errno)
    {
        return res.status(400).json({
            success : false,
            message : `Could not find the user requested in the database : ${errno.message}`
        });
    }

});


// DELETE USER

app.delete('/User/:id',async(req,res) =>{

    try
    {
        const userTodelete = await User.findByIdAndDelete(req.params.id);
        if(userTodelete)
        {
            return res.status(200).json({
                success : true,
                message : 'User was deleted'
            });
        }else
        {
            return res.status(404).json({
                success : false,
                message : 'User was not found'
            })
        }

    }catch(errno)
    {
        return res.status(400).json({
            success : false,
            message : `Error was found : ${errno.message}`
        });
    }

});


// TASK DELETE

app.delete('/Task/:id',async(req,res) =>{

    try
    {
        const taskTodelete = await Task.findByIdAndDelete(req.params.id);
        if(taskTodelete)
        {
            return res.status(200).json({
                success : true,
                message : 'Task was deleted'
            });
        }else
        {
            return res.status(404).json({
                success : false,
                message : 'Task was not found'
            })
        }

    }catch(errno)
    {
        return res.status(400).json({
            success : false,
            message : `Error was found : ${errno.message}`
        });
    }

});


// ORGANISE ROUTE AND FUCNTIONALITIES







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






