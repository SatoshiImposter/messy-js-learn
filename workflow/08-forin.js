let user = {
    id : 1,
    name : 'admin',
    age : 25
}

for (let prop in user) {
    console.log(prop);
}

for (let prop in user) {            //aqui se muestra el valor de las propiedades
    console.log(prop, user[prop]);  //aqui se imprime el identificador de las propiedades, luego el valor.
}