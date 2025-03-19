let i = 0;
while (i < 10) {                    //el while itera el codigo si la condicion es verdadera y se detiene si es falsa, cumpliendo primero la condicion y luego ejecutando el codigo
    if (i % 2 == 0) {
        console.log("numero par", i);
    }
    i++;
}

console.log("fin del ciclo");

do {                                    //el do ejecuta el codigo y luego el while lo itera si la condicion es verdadera, si es falsa no se ejecuta
    if (i % 2 == 0) {
        console.log("numero par", i);
    }
    i++;
} while (i<10)   //se ejecuta que la condicion sea falsa
console.log("fin del ciclo");