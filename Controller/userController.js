const User = require('../model/User');
const bcrypt = require('bcryptjs');
const { all } = require('../routes/user');


const getAlluser = async (req,res) =>{

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

}

const fetchSpecificUser = async(req,res)=>{

    try
    {
    
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

}

const updateSpecificUser = async (req,res) =>{

    console.log(req.params.id);

    try
    {
        const userToUpdate  = await User.findById(req.params.id);
        const keys = Object.keys(req.body)

        console.log(userToUpdate);
        console.log(req.body[keys]);


        if(!userToUpdate)
        {
            return res.status(404).json({
                success :  false,
                message : 'User was not found'
            })

        }else
        {
            userToUpdate[keys] = req.body[keys];
            await userToUpdate.save();
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

}

const deleteUser = async(req,res) =>{

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

}

const addUser = async (req,res) =>{

    try
    {
        // req.body.password = await bcrypt.hash(req.body.password,8);
        const newUser = new User(req.body)

        await newUser.save();

        return res.status(200).json({
            message: true , newUser
        });


    }catch(errno)
    {

        console.log(errno)

        return res.status(400).json({
            success : false,
            message: errno
        });

    }
    

}

const loginUser = async (req,res) =>{

    try
    {
        const {email,password} = req.body;
        const userCredential =  await User.findOne({email});

        // const isMatch = await bcrypt.compare(password,userCredential.password);

      

        if(!userCredential)
        {
            return res.status(401).json({
                success : false,
                message : 'There is no user registrer under this email address'
            });
        }else
        {
            const isMatch = await bcrypt.compare(password,userCredential.password);

           
           if(isMatch)
           {
            return res.status(200).json({
                success : true,
                message : 'User found with success',
                useremail : userCredential
                
            });
           }else
           {
             return res.status(401).json({
                success : false,
                message : 'Password incorrect!!!'
             });
           }
        }


    }catch(errno)
    {

        return res.status(404).json({

            success : false,
            message : `User clicked or didnt fill up the whole document ${errno.message}`
        });

    }


}


module.exports = {getAlluser,addUser,deleteUser,updateSpecificUser,fetchSpecificUser,loginUser};