
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/to_do_db",{
    useNewUrlParser:true,useUnifiedTopology:true
  
},).then(() => console.log('connected successfully to the database'))
.catch((err) =>{console.error(err);
});


 