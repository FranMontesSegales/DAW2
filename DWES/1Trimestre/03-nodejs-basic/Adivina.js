/*Adivina el numero*/
function adivinanumero(numero){

    const x = numero;

    if (numero <= 10 && numero >= 0){
        let y = Math.floor(Math.random() * 10) +1;

        if (x == y){
            console.log('Enhorabuena, acertaste ' +x );

        }else {
            console.log('Has perdido, hasta la próxima');
        }

    }else{
        console.log('Introuce un numero del 1 al 10');
     }
}
const numero= process.argv[2];
    if(numero){
        adivinanumero(numero);
}else{
console.log('Introduzca una numero: node adivinanumero.js 20');
}