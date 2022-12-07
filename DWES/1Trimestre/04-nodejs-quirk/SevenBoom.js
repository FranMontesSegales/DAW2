function SevenBoom(){
    let array = [1, 2, 3, 4, 5, 6, 7].toString();
    let fin = "No tiene nigún 7";

    for ( let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            if (array[i][j] == 7){
                resultado = "Boom!!";
            }
        }
    }
    return resultado;
}


console.log(SevenBoom());