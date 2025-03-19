const wrapper = document.querySelector("#wrapper")
let title = document.querySelector(".title")
const link = document.querySelector(".link.bold")
const inputNumber = document.querySelector('[type="number"]');
//console.dir dice todas las propiedades de la seleccion

//variable.innerHtml = `codigo html` += es para añadir o concatenar

wrapper.className = "container" //se le cambia la clase al elemento
console.log(wrapper) //innerHtml retorna todo el codigo del nodo 
//outterHtml muestra todo

//const textoUsuario = prompt("Como te llamas?") //prompt pregunta
//title.textContent = `Hola bienvenido ${textoUsuario}`

//getAttribute para obtener cualquier atributo
//setAttribute cambia atributo

const image =  document.querySelector('img')
image.setAttribute("src",  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/1200px-Spider-Man.jpg')
image.setAttribute("class", "spidernigga")

//hasAttribute retorna booleano, pregunta si tiene atributo
//removeAtributte elimina el atributo
//attributes retorna todos los atributos que hay.