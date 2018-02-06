const todo = require('./todo')

module.exports = app => {
    app.route('/api/todos')
        .get(todo.get)
        .patch(todo.update)
        .post(todo.post)
        .delete(todo.deleteTodo)

    app.get('/api/deleteAll', todo.deleteAll)
}
