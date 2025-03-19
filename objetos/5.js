let obj = {};
let obj2 = new Object();

// new array(); []
// new string(); ""
// new number(); 0
// new boolean();   false
// new Object();    {}

function Usuario(){
    this.name = 'Juan';
}

let user = new Usuario();

console.log(user.consturctor);
