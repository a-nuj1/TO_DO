// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/to_do_list', { useNewUrlParser: true });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error'));

// db.once('open', function () {
//     console.log('Database Succesfully connected')
// });

// module.exports = db;


// require the library
const mongoose = require("mongoose");

// connect to the database

mongoose.connect("mongodb://127.0.0.1:27017/to_do_db",{
    useNewUrlParser:true,useUnifiedTopology:true
  
},).then(() => console.log('connected successfully to the database'))
.catch((err) =>{console.error(err);
});


 