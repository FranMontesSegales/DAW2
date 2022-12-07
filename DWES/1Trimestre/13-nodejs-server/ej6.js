const http = require('http');
const querystring = require('query-string');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/json'});
    const nombre = req.url;
    const n = querystring.parse(`nombre=${nombre.split('/').join('')}`)
    res.end(`Hello ${n.nombre}`);
    
  }).listen(3000);