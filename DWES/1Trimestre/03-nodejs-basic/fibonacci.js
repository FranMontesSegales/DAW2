/*Fibonacci*/
function Fibonacci(serie) {
       
        let num1 = 0, num2 = 1, suma = 1;
    
        console.log(num1);
        for (let i = 0; i < serie; i++) {
            console.log(suma);
            
            suma = num1 + num2;
            
            num1 = num2;
            
            num2 = suma;
        }
    }
 Fibonacci(10)