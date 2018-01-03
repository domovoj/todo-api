const Todo = require('../models/todo').Todo

const get = (req, res) => {
    Todo.findAll()
        .then(todos => res.json(todos))
}

const post = (req, res) => {
    const { value, isChecked } = req.body
    const todo = Todo.build({ value, isChecked })
    todo.save().then(todo => res.json(todo))
}

const deleteTodo = (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => todo.destroy())
        .then(todo => res.json(todo))
}


const deleteAll = () => Todo.destroy({
    where:    {},
    truncate: true,
    cascade: false
})

module.exports = {
    get,
    post,
    deleteTodo,
    deleteAll
}