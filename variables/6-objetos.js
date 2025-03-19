/* objetos */

let nombre = "Juan";
let apellido = "Perez";
let edad = 30;

let personaje = {           //propiedades son los que estan antes de los :
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
};
console.log(personaje);
console.log(personaje.edad); //el punto me permite acceder a una propiedad de un objeto
console.log(personaje["edad"]); //tambien puedo acceder a una propiedad de un objeto de esta manera

delete personaje.edad; //borra la propiedad edad del objeto personaje
console.log(personaje);