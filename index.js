const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
require('./routes')(app)

app.listen('4000')
console.log('Listening...')
