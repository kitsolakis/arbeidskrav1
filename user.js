const mongoose = require('mongoose'); 


const userSchema = mongoose.Schema({
    Age:{
        type: String
    }, 
    BPM:{
        type: String
    }
});

let User = mongoose.model('User', userSchema);

module.exports.addData = function (user, callback){
    User.create(user, callback); 
}

module.exports.getData = (callback, limit) => {
    User.find(callback).limit(limit); 
}




