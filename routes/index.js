const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home.js');

router.get('/', homeController.home);

router.post('/create-todo',homeController.createTodo);
router.post('/delete-todo',homeController.deleteTodo);


module.exports = router;