const documentDao = require('../dao/document');

function findAll() {
    return documentDao.findAll();
}
function findById(id) {
    return documentDao.findById(id);
}

function findByUser(username) {
    return Promise.all([documentDao.findByUser(username), documentDao.findShared(username)]).then((responses) => Promise.resolve(responses[0].concat(responses[1])));
}

function create(jobData) {
    return documentDao.create(jobData);
}

function update(id, data) {
    return documentDao.findById(id).then(document => {
        return documentDao.updateById(id, data);
    });
}

function deleteById(id) {
    return documentDao.findById(id).then(data => {
        return documentDao.deleteById(id, data);
    });
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById,
    findByUser
}