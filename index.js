const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let ip = 'localhost'
let port = 4000

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    next()
})

require('./routes')(app)

port = process.env.PORT || port
ip = process.env.IP || ip

app.listen(port, ip)
console.log('Listening...', ` go to http://${ip}:${port}`)
