var mongoose =  require('mongoose');

var userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        }, 
        address: {
            type: String
        }, 
        email:{
            type: String
        }, 
        password: {
            type: String
        },
        phone: {
            type: Number
        }, 
        area : {
            type: String
        }, 
        status: {
            type: Boolean
        }, 
        comments: {
            type: String 
        }, 
        rate: {
            type: String
        }, 
        services: {
            type: String
        }

    },
    {
        collection: 'Users'
    }
); 

var Users = mongoose.model('Users', userSchema); 
module.exports = Users;