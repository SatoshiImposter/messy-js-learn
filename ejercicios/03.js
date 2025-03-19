function getByIdx(arr, idx) {       //los dos parametros que recibe la funcion
 if (idx < 0 || idx > arr.length) {     //si el indice es menor que cero o el indice es mayor que la longitud del array
     return "El indice no existe";         //retorna el mensaje
   
    } else {                            //sino 
        return arr[idx];                //retorna el elemento del array en la posicion del indice
    }
 }

let resultado = getByIdx([1, 2], 0);        //se llama a la funcion y se le pasan los parametros
console.log(resultado);                         //se imprime el resultado

//funcion mediante la cual obtengamos elemento por su indice, pero si el indice es menor que cero, y el elemnto debe existir el array