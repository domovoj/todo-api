const Sequelize = require('sequelize')
const path = require('path')

const sequelize = new Sequelize('sqlite://' + path.join(__dirname, 'todos.sqlite'), {
    dialect:          'sqlite',
    storage:          path.join(__dirname, 'todos.sqlite'),
    operatorsAliases: false
})

module.exports = sequelize
