'use strict'
const animales = ["tortuga", "perro", "pez", "gato"];
console.log(animales[0]);

// const [a1, a2, a3, a4] = animales;
var [a1, a2, a3, a4] = animales;
a1 = "leon";
console.log(a1);

// objetos
const alumno = {
    nombre: "elena",
    apellido: "deTroya",
    email:"elena@cd.com"
}
//si apellido ya se declaro antes , se guarda apellido en una variable apellidoElena
const {email,apellido:apellidoElena} = alumno;
console.log(email);