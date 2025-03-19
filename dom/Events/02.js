const wrapper = document.querySelector('[data-id="wrapper"]')

const input = document.querySelector("[type='text']")
const changeUser = document.querySelector("#button")

const section = document.querySelector(".section")

const buttonShow = document.querySelector(
    ['[data-id="button-show"]']
)
const buttonHide = document.querySelector(
    ['[data-id="button-hide"]']
)

function handleEvent(e){
    console.log(`Has dado click en ${e.currentTarget.nodeName}`)
}

function handleEventStop(e){
    e.stopImmediatePropagation();
    console.log(`Has dado click en ${e.currentTarget.nodeName}`)
}

//current TArget propaga el evento hasta llegar al nodo raiz

buttonShow.addEventListener("click", handleEvent, {
    capture: true
}) 
section.addEventListener("click", handleEvent, {
    capture: true
}) 
document.body.addEventListener("click", handleEvent, {
    capture: true
}) 
//aqui se le añade el listener al wrapper, 

const elements = document.querySelectorAll("[data-id]")

for (element of elements){
    console.log(elements);
}
