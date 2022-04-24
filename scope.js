// Scope es la visibilidad o accesibilidad de la informacion.

// identifiacr el alcance
// var beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//     function actuallyPrintingNames() {
//     for (var index = 0; index < names.length; index++) {
//         var name = names[index];

//         console.log(name + ' was found at index ' + index);
//     }
//     console.log('name and index after loop is ' + name + ':' + index);
//     }
//     actuallyPrintingNames();
// }
// printNames(beatles);       

//existen 4 ámbitos 1global y 2 locales por funcion y 1 local del bucle for en c/u de las funciones.

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        const name = names[index];
    
        console.log(name + ' was found at index ' + index);
    }
    //console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);       
