function fizzBuzz(n, condition){
    let texto = '';
    Object.entries(condition).forEach(([num, t]) => {
        if(n % num === 0) texto += t;
    });

    return texto || n;
}

export default fizzBuzz;