import express from 'express';

const app = express()
const port = 3000


app.get('/header/:token', (req, res) => {
  const {token} = req.params;
  console.log(token);
})

app.get('/header/', (req, res) => {
  
    const error= {
        "code": 401,
        "error": "Unauthorized",
        "message": "Error: Set a token to login"
    };
    console.log(error);

  })

/*2. /params crear un parámetro llamado name en la ruta y devolver Hola ${name}*/

app.get('/params/:name', (req, res) => {
   
    const {name} = req.params;
      res.send(`Hola ${name}`)
  })



/*3. /query enviar un número n y devolver la suma de todos los números desde el 1 hasta el número recibido.
Si el número no se define, se tomará 100 por defecto.*/

function sumarNum(n) {
    if (n === null) {
        n = 100;
        let suma = 0;

        for (let i = 1; i <= n; i++) {
            suma += i;
        }
        return suma;

    } else {
        let suma = 0;

        for (let i = 1; i <= n; i++) {
            suma += i;
        }
        return suma;
    }
}

app.get('/query/:n', (req, res) => {
   
    const {n} = req.params;
      res.send(`${sumarNum(n)}`)
  })

app.get('/query/', (req, res) => {

const n = null;
    res.send(`${sumarNum(n)}`)
})

  
/*4. /body Imprimir todo el objeto entrante en una lista HTML en el que se muestren todos los
parámetros: su clave y su valor.*/

const objeto = {1 : 'valor', 2: 'valor', 3:'valor'}
const entradas = Object.entries(objeto);
let list = [];

function listaHTML() {
  for (const key in entradas) {
    list.push(`<li>${entradas[key]}</li>`)
  }
}

listaHTML()

app.get('/body', function (req, res) {
  res.send(`Objeto: ${list}`)
});

const router = express.Router();

router.get('/animals/dog', function (req, res) {
    res.send({ "grow": "guau guau" });
});

router.get('/animals/cat', function (req, res) {
    res.send({ "grow": "miau" });
});

router.get('/animals/bird', function (req, res) {
    res.send({ "grow": "pio pio" });
});

router.get('/animals/', function (req, res) {
    res.send({
        "code": 404,
        "error": "Not Found",
        "message": "Error: Path not found"
    });
});

app.use(router);

export default router;

 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })