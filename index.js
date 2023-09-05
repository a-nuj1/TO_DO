const express = require('express');
const app = express();
const portNum = 8000;
const db = require('./config/mongoose');

// set up the assets by passing path of assets folder
app.use(express.static('./assets'));

app.use(express.urlencoded());

// route
app.use('/', require('./routes/index.js'));


//set up the view engine 
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(portNum, function (error) {
    if (error) {
        console.log("Error in running server");
    } else {
        console.log(`Server is up and running on Port:${portNum}`);
    }
});