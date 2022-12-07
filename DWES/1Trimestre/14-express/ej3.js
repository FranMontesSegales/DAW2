import express from 'express';

const app = express()
const port = 3000

app.get('/Page1', (req, res) => {
  res.send('Página 1')
})

app.get('/Page2', (req, res) => {
    res.send('Página 2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})