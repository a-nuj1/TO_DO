const Todo = require('../models/todo');



module.exports.home = function (req, res) {
    // fetching the data from Todo Collection
    Todo.find({},).catch((err) => console.log("Error in fetching contacts from db")).then(TodoList =>{
        return res.render('home',{
            title: 'Todo',
            todo_list: TodoList
        });
    });
}
// create todo
module.exports.createTodo = function (req, res) {
    console.log(req.body.date);
    var date = req.body.date;
    var color;
  /// selecting colour for category's span
    switch (req.body.category) {
        case "Personal":
            color = "green";
            break;
        case "School":
            color = "red";
            break;
        case "Work":
            color = "red";
            break;
        case "Cleaning":
            color = "White";
            break;
        default:
            color = "blue";
    }
    // creating a new Todo 
    Todo.create(
        {
            date: date,
            category: req.body.category,
            desc: req.body.desc,
            color:color
        },).then(newTodo=>{
            console.log('****', newTodo);
            return res.redirect('/');
        }).catch((err)=> console.log("error in creating a todo"));
};

// delete Todo
module.exports.deleteTodo = function (req, res) {
    console.log(req.body);
    // delete each todo who's id is sent from user
    Todo.deleteMany({ _id: req.body },).then(result=>{
        console.log('To do deleted successfully', result);
    }).catch((err)=>console.log('error in deleting todo')); 
        res.redirect('/');
}

// module.exports.deleteTodo = async function (req, res) {
//     try {
//         console.log(req.body);
//         // delete each todo who's id is sent from the user
//         const result = await Todo.deleteMany({ _id: req.body });
//         console.log('Todo deleted successfully', result);
//         res.redirect('/');
//     } catch (err) {
//         console.error('Error in deleting TODO:', err);
//         res.status(500).json({ error: 'Error deleting TODO' });
//     }
// };