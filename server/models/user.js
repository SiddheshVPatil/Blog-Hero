const mogoose = require('mongoose')

const userSchema = new mogoose.Schema({
    name: String,
    password: String
})

const user = mogoose.model('User',userSchema);

module.exports = user;