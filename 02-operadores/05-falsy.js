//short-circuit

//falso
//false
//0
//''
//null
//undefined
//NaN
let nombre = 'bro';
let username = nombre || 'sin nombre';
console.log(username); // sin nombre

function fn1() {
    console.log('hola 1');
    return true;
}

function fn2() {
    console.log('hola 2');
    return true;
}

let x = fn1() && fn2();