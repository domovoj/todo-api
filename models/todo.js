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

exports.Todo = Todo
