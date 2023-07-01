const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true,
        minlegth : 3,
        maxlength: 20
    },
    surname:{
        type : String,
        require : true,
        minlegth : 3,
        maxlength: 20
    },
    phone :{
        type : String,
        minlegth : 10
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
        }
    },
    password : {
        type : String,
        minlength: 6
    }

});

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;