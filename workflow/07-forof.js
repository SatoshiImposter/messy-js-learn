let animales = ["perro", "gato", "loro"];

for (let animal of animales) {  //la variable animal toma el valor de cada elemento del array, se ejecuta el codigo y se incrementa el contador
    console.log(animal);
}

let i = 0;

while (i < animales.length){        //si i es menor a la longitud del array, se ejecuta el codigo
    console.log(animales[i]);       //se imprime el valor del array en la posicion i 
    i++;                            //se incrementa i, de esta manera se incrementa la posicion del array
}

