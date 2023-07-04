
const mongoose = require('./MongodbConnection');

const validator = require('validator');
const bcrypt = require('bcryptjs');

let userSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true,
        minlegth : 3,
        maxlength: 20,
        trim : true
    },
    age:{
        type : Number,
        validate(value)
        {
            if(value < 18)
            {
                throw new Error(`User is soo young : ${value}`);
            }
        }
    },
    email : {
        type : String,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error(`Email entered is incorrect : ${value}`);
            }
        },
        trim : true,
        lowercase : true,
        unique: true
        
    },
    password : {
        type : String,
        require : true
    }

});


userSchema.pre('save', async function(next){

    console.log(this.isModified('password'));
    

    if(this.isModified('password'))
    {
        this.password = await bcrypt.hash(this.password,8);
    }
    next();
});


const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;