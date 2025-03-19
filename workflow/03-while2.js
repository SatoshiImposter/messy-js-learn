// existen 5 loops while, do while, for, for in, for of

let i = 1;

while (i <= 10) { // mientras i sea menor o igual a 10 se ejecutara el codigo, si no se cumple se sale del loop.
    if (i % 2 == 0) { // si el residuo de i dividido entre 2 es igual a 0, se ejecuta el codigo, si no se cumple se salta al siguiente.
        console.log(i);
    }
    i++;

}

console.log('Fin del loop while');