const AuthService = require('../services/auth');
const DocumentService = require('../services/document');
const ErrorService = require('../services/error');

function findAll(req, res) {
    AuthService.isLoggedIn(req).then(() => {
        if (req.params.user === 'admin') {
            DocumentService.findAll()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => ErrorService.sendError(res, err));
        } else {
            DocumentService.findByUser(req.params.user)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => ErrorService.sendError(res, err));
        }
    })
    .catch((err) => ErrorService.sendError(res, err));
}

function find(req, res) {
    AuthService.isLoggedIn(req).then(() => {
        DocumentService.findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => ErrorService.sendError(res, err));
    })
    .catch((err) => ErrorService.sendError(res, err));
}

function create(req,res) {
    AuthService.isLoggedIn(req).then(() => {
        DocumentService.create(req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => ErrorService.sendError(res, err));
    })
    .catch((err) => ErrorService.sendError(res, err));
}

function update(req,res) {
    AuthService.isLoggedIn(req).then(() => {
        DocumentService.update(req.params.id, req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => ErrorService.sendError(res, err));
    })
    .catch((err) => ErrorService.sendError(res, err));
}

function remove(req,res) {
    AuthService.isLoggedIn(req).then(() => {
        DocumentService.deleteById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => ErrorService.sendError(res, err));
    })
    .catch((err) => ErrorService.sendError(res, err));
}

module.exports = {
    findAll,
    find,
    create,
    update,
    remove
}