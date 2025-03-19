const body = document.body.children[0];
const div = wrapper.children[1];
const h1 = div.previousElementSibling;
const anchor = div.children[0];

anchor.addEventListener('click', function(){
    h1.textContent = 'Hola Mundo';
    document.documentElement.style.backgroundColor = "red"
    document.documentElement.style.color = "blue"
});





//childNodes es una colección de nodos hijos de un elemento
//childer es una colección de elementos hijos de un elemento
//firstChild es el primer nodo hijo de un elemento
//firstElementChild es el primer elemento hijo de un elemento
//lastChild es el último nodo hijo de un elemento
//lastElementChild es el último elemento hijo de un elemento
//nextSibling es el siguiente nodo hermano de un elemento
//nextElementSibling es el siguiente elemento hermano de un elemento
//previousSibling es el nodo hermano anterior de un elemento
//previousElementSibling es el elemento hermano anterior de un elemento
//parentElement es el elemento padre de un elemento
//parentNode es el nodo padre de un elemento