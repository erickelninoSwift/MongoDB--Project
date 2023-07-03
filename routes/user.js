const User = require('../model/User.js');

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

