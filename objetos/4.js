// {id: 1, recuperarClave: function(){}}    //estos son metodos
function Usuario(){ //funcion constructora, PascalCase
    this.id = 1;        //se usa this para que sea publico
    this.recuperarClave = function(){       
        console.log("Recuperando clave");   
    }
}

let user = new Usuario(); //new crea un nuevo objeto y le asigna el prototipo de Usuario