const wrapper = document.querySelector('[data-id="wrapper"]')

const input = document.querySelector("[type='text']")
const changeUser = document.querySelector(".name")

const buttonShow = document.querySelector(
    ['[data-id="button-show"]']
)
const buttonHide = document.querySelector(
    ['[data-id="button-hide"]']
)

//input.addEventListener('change', (e) => {
  //  ChangeUser.textContent = e.target.value;
//})

//function controladorEvento (){
 //   const nombre = prompt('Cual es tu nombre?')
 
   // alert(`hola, ${nombre}`) //aparece un cuadro con esto
//}

//eventlistener cuando escucha que sucede un evento
//eventhandler con acciones que se ejecutan cuando de detecta el evento

function showSection(event){
    console.log(event.type); //registra el tipo de evento
    console.dir(event.target);
    wrapper.className = "show"
}

const form = document.querySelector("#button");

form.onsubmit = function(){
    console.log("enviado");

}



function hideSection(){
    wrapper.className = "hide"
}

input.addEventListener('change', (event) => { //la logica del input
    //con un evento como parametro.
    changeUser.textContent = event.target.value; //se le cambia el texto
})

wrapper.addEventListener('click', function(e){
    //console.log(e.target) //dice a que le di click
    e.target.style.backgroundColor = "pink"
})


buttonShow.addEventListener('click', showSection)
buttonShow.addEventListener('click', hideSection)

//event.preventDefault //le quita el comportamiento.