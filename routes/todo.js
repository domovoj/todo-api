const Todo = require('../models/todo')

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
    Todo.findById(req.body.id)
        .then(todo => todo.destroy())
        .then(todo => res.json(todo))
}

const update = (req, res) => {
    const { id, value, isChecked } = req.body
    Todo.findById(id)
        .then(todo => todo.update({ value, isChecked }))
        .then(todo => res.json(todo))
}

const deleteAll = (req, res) => Todo.destroy({
    where:    {},
    truncate: true
}).then(() => res.send('They were deleted'))

module.exports = {
    get,
    post,
    update,
    deleteTodo,
    deleteAll
}