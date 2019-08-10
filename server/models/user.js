const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {type: String},
    username: { type: String, required: true, index: true, unique: true },
    password: { type: String },
    permission: { type: String }
}, { id: false, timestamps: true });

module.exports = mongoose.model('User', UserSchema);
