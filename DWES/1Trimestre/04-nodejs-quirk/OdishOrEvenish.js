function oddishEvenish(num){
    let arr = num.toString().split('');
    let suma = 0;

    for (let i = 0; i < arr.length; i++){ 
        suma += parseInt(arr[i]);
    }

    if(suma % 2 == 0){
        return 'Evenish';
    }else{
        return 'Odish';
    }
}

console.log(oddishEvenish(22));