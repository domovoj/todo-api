const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    next()
})

require('./routes')(app)

app.listen(port)
console.log('Listening...', port, ` go to http://localhost:${port}`)
