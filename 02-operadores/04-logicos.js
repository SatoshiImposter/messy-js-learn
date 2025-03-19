console.log(true && true); // evalua lo de la izquierda y lo de la derecha, si ambos son verdaderos, entonces es verdadero
console.log(true && false); // false
console.log(false && true); // false

let mayor = true;
let suscrito = true;
console.log(mayor && suscrito); // true

//or
console.log(true || true); // evalua lo de la izquierda y lo de la derecha, si uno de los dos es verdadero, entonces es verdadero
console.log(true || false); // evalua lo de la izquierda y lo de la derecha, si uno de los dos es verdadero, entonces es verdadero
console.log(false || false) //evalua lo de la izquierda y lo de la derecha, si ambos son falsos, entonces es falso

//not 
console.log(!true); // invierte el valor de la variable
let catalogoInfantil = !mayor;
console.log(catalogoInfantil); // false