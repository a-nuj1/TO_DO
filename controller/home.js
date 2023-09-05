const Todo = require('../models/todo');



module.exports.home = function (req, res) {
    // fetching the data from Todo Collection
    Todo.find({}, function (err, TodoList) {
        if (err) {
            console.log('error in fetching db');
            return;
        }
        //controller will take view/template from views folder 
        return res.render('home', {
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
        }, function (err, newTodo) {
            if (err) {
                console.log('Error in creating a todo');
                return;
            }
            console.log(newTodo);

            res.redirect('/');
        });
};

// delete Todo
module.exports.deleteTodo = function (req, res) {
    console.log(req.body);
    // delete each todo who's id is sent from user
    Todo.deleteMany({ _id: req.body }, function (err, result) {
        if (err) {
            console.log('Error in deleting TODO');
        } else {
            console.log('Todo deleted succesfully', result);
        }
        res.redirect('/');
    });

}