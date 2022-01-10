const express = require('express')
const app = express()
const port = 3000

const { HOSTNAME } = process.env;

app.get('/', (req, res) => {
  res.send(`Welcome! You are in ${HOSTNAME}!`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})