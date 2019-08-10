const User = require('../models/user');

function findAll() {
    return User.find({}).sort({ fullName: 'asc' }).lean().exec();
}
function findByUsername(username) {
    return User.findOne({ username: (username || '').toLowerCase() }).lean().exec();
}

function create(toSave) {
    return User.create(toSave);
}

module.exports = {
    findAll,
    findByUsername,
    create
}
