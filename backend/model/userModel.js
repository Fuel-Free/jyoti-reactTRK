const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String },
    last: {type: String},
    email: { type: String, required: true },
    password :{type: String}
})

const User = mongoose.model('User', userSchema);
module.exports = User