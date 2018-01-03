const sequelize = require('../db/sequelize')
const Sequelize = require('sequelize')

const Todo = sequelize.define('todos', {
    id:        {
        type:          Sequelize.INTEGER,
        primaryKey:    true,
        autoIncrement: true
    },
    value:     {
        type: Sequelize.STRING
    },
    isChecked: {
        type:         Sequelize.BOOLEAN,
        defaultValue: false
    }
})

sequelize.sync()
// sequelize.sync().then(() => {
//     Todo.create({
//         value:     'Do something 1',
//         isChecked: false
//     })
//
//     Todo.create({
//         name:      "Do something 2",
//         isChecked: false
//     })
// })


exports.Todo = Todo
