function sum (a, b){
    return a+b 
}
let sum2 = (a, b) => a+b  //arrow function, despue de los parentesis se pone la flecha y luego el return


function isPositive(num){
    return num >= 0
}

let isPositive2 = num => num >= 0


let random = () => Math.random

document.addEventListener('click', () => {
    console.log('click')
})
