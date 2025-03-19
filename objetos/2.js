const user = {id: 1}; //no se le puede cambiar el valor a user, pero si agregar y quitar propiedades
user.name = "nicolas"; //se le puede agregar propiedades, en este caso name
user.guardar = function(){ //se le puede agregar metodos, en este caso guardar
    console.log("Guardando usuario", user.name);
}

user.guardar();

//object.freeze para que no se pueda modificar el objeto
//object.seal para que no se pueda agregar ni quitar propiedades
//object.preventExtensions para que no se pueda agregar propiedades
