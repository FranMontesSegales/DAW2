const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
        switch (req.url) {
            case "/page1":
                res.writeHead(200);
                res.end('<HTML><HEAD><TITLE>Sutítulovaaquí</TITLE></HEAD><BODYBGCOLOR="FFFFFF"><CENTER><IMGSRC="nubes.jpg"ALIGN="BOTTOM"></CENTER><HR><ahref="http://algunsitiowebestupendo.com">Nombredelvínculo</ahref=>esunvínculoaotrobuensitioweb<H1>Estoesunencabezado</H1><H2>Esteesunencabezadomediano</H2>Envíenelcorreoa<ahref="mailto:soporte@suempresa.com">soporte@suempresa.com</ahref=>.<P>¡Esteesunnuevopárrafo!<P><B>¡Esteesunnuevopárrafo!</B><BR><B><I>Estaesunanuevaoraciónsinsaltodepárrafo,encursivanegrita.</I></B><HR></BODY></HTML>')
              break;

                case "/error":
                    req.statusCode = 404;
                    res.end(`Not Found Error 404`);
                    break;
    }
}).listen(3000);