const Document = require('../models/document');

function findAll() {
    return Document.find().lean().exec();
}

function findById(id) {
    return Document.findOne({ _id: id }).lean().exec();
}

function findByUser(username) {
    return Document.find({ owner: username }).lean().exec();
}

function findShared(username) {
    return Document.find({ 'sharedWith.name': username }).lean().exec();
}

function findByTitle(title) {
    return Document.findOne({ title }).lean().exec();
}

function create(toSave) {
    const doc = new Document(toSave);
    return doc.save().catch(err => console.log(err));
}

function updateById(id, toSave) {
    return Document.updateOne(
        { _id: id },
        { $set: toSave },
        { runValidators: true }
    ).lean().exec();
}

function deleteById(id) {
    return Document.deleteOne({ _id: id }).lean().exec();
}

module.exports = {
    findAll,
    findByTitle,
    findById,
    create,
    updateById,
    deleteById,
    findByUser,
    findShared
}