const UserDao = require('../dao/user');


function findByUsername(username) {
    return UserDao.findByUsername(username);
}

function create(jobData) {
    return UserDao.create(jobData);
}

module.exports = {
    findByUsername,
    create
}