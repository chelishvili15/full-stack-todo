const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

const listArr = ['dato', 'mari', 'mia']

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.get('/api/list', (req, res) => {
    res.json(listArr)
    res.end()
})

app.post('/api/list/add', (req, res) => {
    listArr.push(req.body.item)
    res.json(listArr)
})

app.listen(port, () => {
    console.log(port)
})