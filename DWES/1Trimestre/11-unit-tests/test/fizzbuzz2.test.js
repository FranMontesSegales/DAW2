import test from 'ava';
import fizzbuzz from "../src/fizzbuzz4.js";

const n = 100;
const condition = {
    2: 'poo',
    3: 'fizz',
    5: 'buzz',
    15: 'foo'
};

    test("Debe devolver 'poo'",  t => {
        const result = fizzbuzz(2, condition);
        t.is(result, 'poo');
    });

    test("Debe devolver 'fizz'",  t => {
        const result = fizzbuzz(3, condition);
        t.is(result, 'fizz');
    });

    test("Debe devolver 'buzz'",  t => {
        const result = fizzbuzz(5, condition);
        t.is(result, 'buzz');
    });

    test("Debe devolver 'fizzbuzzfoo'",  t => {
        const result = fizzbuzz(15, condition);
        t.is(result, 'fizzbuzzfoo');
    });