Asignación: Hoist de JavaScript
Objetivos:
Practica leer JavaScript de la misma manera como el intérprete lo lee.
Vuelve a escribir el código de la forma en que el intérprete lo vería y predice el resultado. Aquí se muestra un ejemplo:

// GIVEN
console.log(example);
var example = "I'm the example!";
AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
copy
Una vez que hayas hecho tu predicción, ejecuta el código original para averiguar si tenías razón. Si tus predicciones fueron incorrectas, observa cómo el intérprete eleva el código.

Nota
Ejecuta el mismo código que el anterior con la sintaxis ES6 y compara tus resultados:

console.log(example);
let example = "I'm the example!";    copy
Incluso si lety constevitan gran parte del comportamiento confuso de elevación de JavaScript, estos son constructores ES6 y una enorme cantidad de código JavaScript vigente en el mundo sigue siendo ES5. ¡Comprender cómo ES5 elevavary las reglas de alcance son importantes para todos los desarrolladores de JavaScript!

1
console.log(hello);                                   
var hello = 'world';                                 
copy
2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
copy
3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
copy
4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
copy
5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
copy
6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
copy
7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);copy
8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}copy
Reescribe el código dado como lo ve el intérprete

Predecir las salidas

Ejecuta el código original y compara las salidas con tus predicciones.