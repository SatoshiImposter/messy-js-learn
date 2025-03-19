function creatUsuario(name, email){         //funcion constructora, camelCase
    return{
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log("Recuperando clave");
        },  
    }
}

let user1 = creatUsuario("yo", "yo@gmail.com");
let user2 = creatUsuario("yo", "yo@gmail.com");

console.log(user1, user2);