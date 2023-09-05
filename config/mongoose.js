const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/to_do_list', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function () {
    console.log('Database Succesfully connected')
});

module.exports = db;