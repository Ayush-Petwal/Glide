const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

const captionSchema = new mongoose.Schema({
    fullName : {
        firstName : {
            type : String,
            required : true,
            minlength : [3, 'First name must be at least 3 characters long']
        },
        lastName : {
            type : String,
            minlength : [3, 'Last name must be at least 3 characters long']
        }
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        match : [/\S+@\S+\.\S+/, 'Please enter a valid email']
    },
    password : {
        type : String,
        required : true,
        select : false,
        minlength : [8, 'Password must be at least 8 characters long']
    },
    socketId : {
        type : String
    },

    status : {
        type : String,
        enum : ['active', 'inactive'],
        default : 'inactive'
    },
    vehicle : {
       color : {
            type : String,
            required : true,
            minlength : [3, 'Color must be at least 3 characters long']
        },
        plate : {
            type : String,
            required : true,
            minlength : [3, 'Plate must be at least 3 characters long']
        },
        capacity : {
            type : Number,
            required : true,
            min : [1, 'Capacity must be at least 1']
        },
        vehicleType : {
            type : String,
            required : true,
            enum : ['car', 'bike', 'auto']
        }
    },
    location : {
        lat : {
            type : Number,
        },
        lng : {
            type : Number,
        }
    }
});

captionSchema.methods.generateToken = function(){
    const token = jwt.sign({_id : this._id}, process.env.JWT_PRIVATE_KEY , {expiresIn : '24h'});
    return token;
}

captionSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captionSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
};

const captionModel = mongoose.model('caption', captionSchema);

module.exports = captionModel;