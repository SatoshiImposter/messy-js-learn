function nombreResolucion(ancho, alto){
    if(ancho >= 1920 && alto >= 1080){
        return "full hd"
    
    } else if (ancho >= 1280 && alto >= 720){
        return "hd"
    
    } else if (ancho >= 854 && alto >= 480){
        return "sd"
    
    } else {
        return false
    }
}

let nombre = nombreResolucion(1366, 768);
console.log(nombre); 

// si la resocion es menor entonces es false o si las resoluciones no cuadran entonces retorna false