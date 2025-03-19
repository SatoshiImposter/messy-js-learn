function suma(a, b){ //a es como si fuera una variable
    console.log(arguments); //arguments es un objeto que contiene todos los argumentos que se pasaron a la funcion
    return a + b; // se deben usar ambas variables
}

let resultado = suma(2, 6, 1, 2, 3);  //el valor dentro del parentesis es el argumento 
console.log(suma); 

 