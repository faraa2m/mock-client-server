const ErrorService = require('../services/error');
const UserService = require('../services/user');
const User = require('../models/user');
const passport = require('passport');

function login(req, res) {
    // return passport.authenticate('local', () => {
    //     console.log('adsadsad ', req.body.username);
        UserService.findByUsername(req.body.username)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => ErrorService.sendError(res, err));
    // });
}

function logout(req, res) {
    req.logout();
    res.status(200).end();
}

function register(req, res) {
    var user = new User();

    user.username = req.body.username;
    user.password = req.body.password;
    user.permission = 'scrub';

    UserService.findByUsername(user.username)
    .then((data) => {
        if (data) {
            return ErrorService.sendError(res, 'Username already exists');
        } else {
            UserService.create(user)
            .then(data => res.json(data))
            .catch((err) => ErrorService.sendError(res, err));
        }
    })
    .catch((err) => ErrorService.sendError(res, err));
}

module.exports = {
    login,
    logout,
    register
}