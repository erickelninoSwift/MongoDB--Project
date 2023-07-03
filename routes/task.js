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



