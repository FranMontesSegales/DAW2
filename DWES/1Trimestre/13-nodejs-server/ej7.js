const querystring = require("query-string");
const http = require("http");

function fizzbuzz(n) {
    const result=[];
    
    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 ===0){
            result.push('fizzbuzz')
        }else if ( i % 3 === 0 ){
            result.push('fizz');
        }else if (i % 5 ===0){
            result.push('buzz');
        }else{
            result.push(i);
        }          
    }

  return result;
}


http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/json");
  const n = req.url;

  const query = querystring.parse(`n=${n.split("/").join("")}`);;
  res.writeHead(200);
  res.end(`${fizzbuzz(query.n)}`);
}).listen(3000);