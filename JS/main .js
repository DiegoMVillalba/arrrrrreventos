let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', validarFormulario);
const datos =[];


class Cliente{
    constructor(nombre, apellido, email, password, password2, dni, tarjeta, pass){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password= password;
        this.password2 = password2;
        this.dni = dni;
        this.tarjeta = tarjeta;
        this.pass = pass;
    }
}


function validarFormulario(e){
    e.preventDefault();
  



datos.push(validarFormulario);
console.log(datos);
let formulario2 = e.target;
let nombre =formulario2.children[1].value;
let apellido = formulario2.children[2].value;
let email = formulario2.children[3].value;
let password = formulario2.children[4].value;
let password2 = formulario2.children[5].value;
let dni = formulario2.children[6].value;
let tarjeta = formulario2.children[7].value;
let pass = formulario2.children[8].value;

let persona1 = new Cliente(nombre, apellido, email, password, password2, dni, tarjeta, pass,);
datos.push(persona1);


console.log(formulario2.children[0].value);
console.log(formulario2.children[1].value);
console.log(formulario2.children[2].value);
console.log(formulario2.children[3].value);
console.log(formulario2.children[4].value);
console.log(formulario2.children[5].value);
console.log(formulario2.children[6].value);
console.log(formulario2.children[7].value);
console.log(formulario2.children[8].value);
}







