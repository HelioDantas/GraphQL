const mongose = require('mongose');

const UserShema = mongose.Schema({
    name: String,
    email: String
});

module.exports = mongose.model('user', UserShema);