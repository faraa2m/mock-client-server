
const mongoose = require('mongoose');
const url = 'mongodb+srv://USER:PASS@HOST/DB';
// const url = 'mongodb://USER:PASS@HOST/DB';

class MongoService {
    init() {
        console.info('Trying to connect to ', url);
        return mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, dbName: 'sa_project' });
    }

    disconnect() {
        return mongoose.connection.close();
    }
}

module.exports = new MongoService();