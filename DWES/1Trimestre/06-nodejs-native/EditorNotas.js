const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Qué es lo que quieres?\n 1.Crear nueva nota\n 2.Editar nota existente\n 3.Eliminar nota\n\n', (answer) => {

    if (answer =='1' || answer == '2' || answer == '3' || answer =='4'){
        switch(answer){
            case '1':
                rl.question('¿Qué nombre vas a ponerle al archivo?\n', (nombreArchivo) => {
                    rl.question('Dime el contenido que quieres meter\n', (contenidoArchivo) => {
                        const fs = require('fs');
                            fs.appendFile(nombreArchivo +".txt",  contenidoArchivo, function (err) {
                                if (err) throw err;
                                    console.log('Archivo creado con éxito');
                            });
                        rl.close();
                    });     
                });
                break;

            case '2':
                const fs = require('fs');
                var files = fs.readdirSync("./");
                console.log(files);
                rl.question('¿Qué archivo deseas editar?\n', (nombreArchivo) => {
                    console.log("El archivo contiene:\n");

                    try {
                        const data = fs.readFileSync(nombreArchivo, 'utf8')
                        console.log(data+'\n\n')
                    } catch (err) {
                        console.error(err)
                    }
                    rl.question('¿Que quieres cambiar del archivo?\n', (contenidoArchivo) =>{
                        const fs = require('fs');
                            fs.writeFile(nombreArchivo,  contenidoArchivo, function (err) {
                                if (err) throw err;
                                    console.log('Archivo editado con éxito\n');
                                    console.log('El archivo editado contiene lo siguiente:\n');
                             try {
                                const data = fs.readFileSync(nombreArchivo, 'utf8')
                                console.log(data+'\n\n')
                            } catch (err) {
                                console.error(err)
                            }
                            });
                    rl.close();
                    });
                });
                
                break;

            case '3':
                const fsr = require('fs');
                var files = fsr.readdirSync("./");
                console.log(files);
                rl.question('¿Qué archivo quieres eliminar?', (nombreArchivo) =>{
                    fsr.unlink(nombreArchivo, function (err) {
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
    
});