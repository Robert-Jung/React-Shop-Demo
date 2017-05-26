const express = require('express')
const app = express()
const respondStatic = express.static('./server/public')
const bodyParser = require('body-parser')

const levelup = require('level')
const db = levelup('../mydb')

app.use(respondStatic)
app.use(bodyParser.json())

app.get('/products', (req, res) => {
  db.get('products', (err, value) => {
    const productList = JSON.parse(value)
    res.json(productList)
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
