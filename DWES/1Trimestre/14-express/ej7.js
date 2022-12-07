import express from 'express';

const app = express()
const port = 3000

function fizzbuzz(n) {
    const result = [];
  
    for (let x = 1; n >= x; x++) {
  
      if ( x%3 === 0 && x%5 === 0) {
        result.push('fizzbuzz');
      } else if (x%3 === 0) {
        result.push('fizz');
      } else if(x%5 === 0) {
        result.push('buzz');
      } else {
        result.push(x);
      }
  }  
  
    return result;
}

app.get('/:n', (req, res) => {
   
  const n = req.params.n;
    res.send(`${fizzbuzz(n)}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})