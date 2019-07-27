const mongoose = require('mongoose');

const UserShema = mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('user', UserShema);