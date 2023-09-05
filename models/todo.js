const mongoose = require('mongoose');
// schema of Todo Database
const todoSchema = mongoose.Schema({
  
     desc:{
         type:String,
         required:true
     },
     category:{
         type:String
     },
     date:{
         type:String,
     },
     // color to determine the colour category container
     color:{
         type:String
     }
});

const todo = mongoose.model('todo',todoSchema);
module.exports = todo;