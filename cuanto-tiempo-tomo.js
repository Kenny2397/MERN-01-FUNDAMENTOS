/*
 * prototype es un objeto, en JS una funcion es tambien un objeto 
 * Number.prototype accede al padre de Number, del que fue creado
*/
Number.prototype.isPrime = function () {
    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}
let n1 = 