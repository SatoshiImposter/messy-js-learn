let accion = 'listar';

switch (accion) {           //un if mas elegante pero al final siempre que sea break
    case 'listar':
        console.log("accion de listar")
        break;
    case 'guardar':
        console.log("accion de guardar")
        break;
    default:
        console.log("accion no reconocida")
        break;
}