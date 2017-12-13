// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var claims = ['accounts', 'speakers'];

// define the schema for our user model
var usuariosSchema = mongoose.Schema({

    local : {
        email : String,
        password : String,
        claims : [String]
    }
   ,
    facebook         : {
        id           : String,
        token        : String,
       email         : String,
        name         : String
    }
//    twitter          : {
//        id           : String,
//        token        : String,
//        displayName  : String,
//        username     : String
//    },
//    google           : {
//        id           : StUserring,
//        email        : String,
//        name         : String
//    }
});

// methods
// generating a hash
usuariosSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
usuariosSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('Usuario', usuariosSchema);
