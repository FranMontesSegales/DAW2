import express from 'express';

const app = express()
const port = 3000

app.get('/page', (req, res) => {
  res.send('<HTML><HEAD><TITLE>Sutítulovaaquí</TITLE></HEAD><BODYBGCOLOR="FFFFFF"><CENTER><IMGSRC="nubes.jpg"ALIGN="BOTTOM"></CENTER><HR><ahref="http://algunsitiowebestupendo.com">Nombredelvínculo</ahref=>esunvínculoaotrobuensitioweb<H1>Estoesunencabezado</H1><H2>Esteesunencabezadomediano</H2>Envíenelcorreoa<ahref="mailto:soporte@suempresa.com">soporte@suempresa.com</ahref=>.<P>¡Esteesunnuevopárrafo!<P><B>¡Esteesunnuevopárrafo!</B><BR><B><I>Estaesunanuevaoraciónsinsaltodepárrafo,encursivanegrita.</I></B><HR></BODY></HTML>')
})

app.get('/error', (req, res) => {
    res.status(404).send('Error 404')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})