
const mongoose = require('./MongodbConnection');

const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true,
        minlegth : 3,
        maxlength: 20,
        trim : true
    },
    surname:{
        type : String,
        require : true,
        minlegth : 3,
        maxlength: 20,
        trim : true
    },
    phone :{
        type : String,
        minlegth : 10,
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

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;