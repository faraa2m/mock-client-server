const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
    title: { type: String, required: true, index: true, unique: true  },
    body: { type: String},
    owner:  {type: String },
    sharedWith: [{
        name : String,
        read : Boolean,
        write: Boolean
        }]
}, { id: false, timestamps: true });

module.exports = mongoose.model('Document', DocumentSchema, 'Document');
