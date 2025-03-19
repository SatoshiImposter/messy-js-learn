const wrapper = document.querySelector('#wrapper');

const linkbold = wrapper.querySelectorAll(".link") 
//:last-of-type para obtener el ultimo.
 
const linkhtml = document.getElementsByClassName("link");
const linksNode = Array.from(document.querySelectorAll(".link"));

console.log(linkhtml)
console.log(linksNode) //si permite modifical el dom

const tagAnchor = document.createElement("a")
tagAnchor.setAttribute("class", "link")
tagAnchor.textContent = "hola mundo";
document.body.append(tagAnchor)

