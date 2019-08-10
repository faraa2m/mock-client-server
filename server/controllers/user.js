const AuthService = require('../services/auth');
const UserService = require('../services/user');
const ErrorService = require('../services/error');

function find(req, res) {
    AuthService.isLoggedIn(req).then(() => {
        UserService.findByUsername(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => ErrorService.sendError(res, err));
    })
    .catch((err) => ErrorService.sendError(res, err));
}

function create(req,res) {
    AuthService.isLoggedIn(req).then(() => {
        UserService.create(req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => ErrorService.sendError(res, err));
    })
    .catch((err) => ErrorService.sendError(res, err));
}

module.exports = {
    find,
    create
}