const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fs = require('fs');

const files = fs.readdirSync('./');
const answer = process.argv[2];

if (answer === '1' || answer === '2' || answer === '3' || answer === '4') {
// eslint-disable-next-line default-case
  switch (answer) {
    case '1':
      rl.question(
        '¿Qué nombre vas a ponerle al archivo?\n',
        nombreArchivo => {
          rl.question(
            'Dime el contenido que quieres meter\n',
            contenidoArchivo => {
              fs.appendFile(`${nombreArchivo}.txt`, contenidoArchivo, err => {
                if (err) throw err;
                console.log('Archivo creado con éxito');
              });
              rl.close();
            },
          );
        },
      );
      break;

    case '2':
      console.log(files);
      rl.question('¿Qué archivo deseas editar?\n', nombreArchivo => {
        console.log('El archivo contiene:\n');

        try {
          const data = fs.readFileSync(nombreArchivo, 'utf8');
          console.log(`${data}\n\n`);
        } catch (err) {
          console.error(err);
        }
        rl.question('¿Que quieres cambiar del archivo?\n', contenidoArchivo => {
          fs.writeFile(nombreArchivo, contenidoArchivo, err => {
            if (err) throw err;
            console.log('Archivo editado con éxito\n');
            console.log('El archivo editado contiene lo siguiente:\n');
            try {
              const data = fs.readFileSync(nombreArchivo, 'utf8');
              console.log(`${data}\n\n`);
            } catch (error) {
              console.error(error);
            }
          });
          rl.close();
        });
      });
      break;

    case '3':
      console.log(files);
      rl.question('¿Qué archivo quieres eliminar?', nombreArchivo => {
        fs.unlink(nombreArchivo, err => {
          if (err) throw err;
          console.log('Archivo borrado con éxito');
          rl.close();
        });
      });
      break;

    case '4':
      rl.close();
  }
}