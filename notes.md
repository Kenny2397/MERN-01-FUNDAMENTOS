# REACT
## Introduccion a MERN
### jQuery vs. React vs. Angular
Hay muchos frameworks web y bibliotecas front-end que usan los desarrolladores. De todos ellos, normalmente escucharás sobre jQuery,  React  and  Angular  (y Vue). Como puedes ver en el cuadro a continuación de tendencias de Google, React y Angular se han vuelto cada vez más populares en los últimos cinco años.


Todos ellos se utilizan para crear interfaces para tus sitios web y aplicaciones. Sin embargo, vamos a ser un poco más específicos sobre las diferencias y similitudes entre los tres:

jQuery
jQuery es una biblioteca de Javascript que agrega una sintaxis simplificada (syntactic sugar) a tu Javascript. Esto significa que, en lugar de tener que escribir Javascript largo y arduo para cambiar el DOM, puedes escribir un código mucho más sucinto para la interactividad de tu sitio. Puedes comenzar simplemente incluyendo el CDN de jQuery en su html. 

Sin embargo, a medida que pasó el tiempo, React y Angular se han vuelto extremadamente populares debido a su enfoque integral para el diseño de front-end. Además de agregar alguna funcionalidad fácil y syntactic sugar a tu Javascript, realmente sólo está codificando en Javascript plano y lo agregaría a tu sitio web de la misma manera que cualquier otro archivo Javascript.

React
Desarrollado por Facebook, React es mucho más una biblioteca que un framework. La distinción es que puede conectar React en cualquier otro framework (si lo desea) y no tendría un gran problema. Los frameworks, por otro lado, como Angular, dictan la estructura de su aplicación.

React se basa en la idea de componentes: partes modularizadas de un sitio web que se dividen para lograr una base de código más organizada. Está escrito en Javascript y JSX (Javascript que se parece a HTML), por lo que conocer HTML y Javascript te permitirá aprender rápidamente React.

React no viene con un enrutador listo para usar, por lo que normalmente querrás usar un enrutador de terceros, como Reach Router o React Router. 

Angular
Angular es un framework completo que viene con una CLI (command-line interface) muy exhaustiva. Angular toma el control de cómo estructura tu aplicación web al crear una estructura de carpetas lista para usar, y puede usar CLI para estructurar rápidamente nuevos componentes. 

Aunque Angular también funciona con componentes como React, Angular usa "Typescript" para escribir la mayor parte de la lógica de programación. Luego, escribirá en html para desarrollar sus páginas web reales. Angular viene con un enrutador listo para usar, así como una manera fácil de comenzar a diseñar tu html con hojas de estilo integradas dentro de cada componente.

La curva de aprendizaje de Angular es mucho más pronunciada que la de React, pero es bastante poderosa.
### Esquema del curso

Antes de comenzar aquí hay una nota rápida sobre cómo se ha presentado este plan de estudios, así como un indicador subjetivo de cuán estresante es cada día en relación con el Examen de Cinturón.





Como puedes ver, pasaremos los primeros días familiarizándonos con el lenguaje de programación JavaScript, familiarizándonos con las funciones prácticas de su versión actual, ES6, y aprendiendo cómo funciona la programación orientada a objetos en JavaScript. A continuación queremos saltar directamente a las cosas buenas (React). Queremos priorizar la parte más difícil (en nuestra opinión) del plan de estudios y facilitar los tres conceptos más importantes de React (Componentes, Props y Estado). Una vez que los tengamos dominados, necesitamos poder conectar nuestro Front-End con otras aplicaciones, y comenzaremos a hacer solicitud a las API utilizando la biblioteca Axios. Después de trabajar exclusivamente en el front-end durante una semana, tendremos que centrar nuestra atención en el back-end. Express será la biblioteca que usemos aquí. Luego presentaremos una base de datos no relacional sobre MongoDB y utilizaremos Mongoose.js como nuestro ORM. En este punto, estamos listos para usar Full-MERN y combinaremos las aplicaciones React que hemos estado haciendo con nuestro nuevo conocimiento Express y Mongoose. Socket.io nos brindará una biblioteca agradable y fácil de trabajar para realizar una comunicación asincrónica en tiempo real entre nuestro servidor y nuestros clientes. Cubriremos la implementación también y tenemos mucho tiempo para prepararnos para el examen del cinturón. El examen del cinturón es indudablemente un día estresante, pero si has utilizado correctamente tu tiempo puedes y tendrás éxito. 

Aclaración:
Esta información anterior está sujeta a cambios, demoras o posible reorganización. Por favor, consulta con tu instructor si deseas una línea de tiempo más exacta. Además, no interpretes que un día de menor estrés es "mejor" perderse. Todos los días son críticos para tu comprensión de MERN y la preparación para el Examen de Cinturón.  

## Introduccion a Node.js
### Introducción a Node

Introducción a Node.js
Node.js es un intérprete de JavaScript potente y flexible, capaz de permitirnos ejecutar código JavaScript libre desde nuestro navegador, utilizando el hardware nativo de nuestra computadora. Usando el motor V8 de Chrome , podemos hacer todo, desde ejecutar archivos JavaScript directamente desde la terminal, atravesar archivos locales, ¡incluso activar un servidor web!

Déjame googlear eso por ti
Una nota antes de comenzar:
A medida que avanzas por la plataforma, verás fragmentos de código que te ayudarán a completar las tareas. Sin embargo, no obtendrás todo lo que necesitas en la plataforma, y eso es intencional . Un desarrollador web exitoso debe ser capaz de resolver problemas con información incompleta . Para las primeras tareas, te daremos algunas pistas sobre lo que puedes estar olvidando. Para los desafíos posteriores, tendrás que descubrir estas incógnitas desconocidas por ti mismo. Acepta esto, que es parte integral del arte de la programación.
### Instalacion
Instalación

Antes de saltar a los matices de JavaScript, vamos a instalar Node. Hacer esto ahora te dará un par de nuevos poderes a medida que codifiques las primeras tareas:

Puedes ingresar a una consola de JavaScript sin necesidad de abrir un navegador.
Puedes ejecutar archivos JavaScript en su terminal. Eso significa que no tienes que escribir JavaScript en etiquetas HTML <script> , lo que hace que la experiencia de desarrollo sea un poco más limpia.
Instalar software puede ser engorroso, pero la instalación de Node.js debería ser bastante sencilla. Si estás atrapado por alguna razón, habla con un compañero de clase que tenga el mismo tipo de sistema operativo que tú.

Primero, visita http://nodejs.org/ y descarga la última versión LTS. Una vez que hayas abierto el archivo y completado el proceso de instalación, echaremos un vistazo a nuestra nueva increíble herramienta:

Usando su terminal, verifica la versión escribiendo:

$ node -v
Esto debería imprimir su versión actual, que debería estar en 12.14 LTS (Long Term Service), a la fecha de creación de esta página.



Ingresemos realmente a nuestro propio entorno JavaScript y declaremos variables desde la comodidad de nuestro propio terminal.

$ node
Deberías haber notado que tu símbolo del sistema puede haber cambiado de $a >. Eso significa que todo lo que escribamos se interpretará como JavaScript. (Para salir de este entorno, se debe pulsar ctrl+C dos veces o escribir.exit una vez).

Escribamos aldo de código:

> console.log('hello');
¿Viste el siguiente resultado?

hello
undefined
Wahoo!

Una nota adicional antes de seguir adelante. Acabamos de escribir nodepara ingresar a un entorno de JavaScript, pero ¿y si quisiéramos que node ejecutara un archivo lleno de código que escribimos en nuestro editor de texto (que es un poco más eficiente que escribir directamente en la consola)? Simplemente añade tu nombre de archivo en el comando node, así: 
node your_file_name.js.

Para Mac: si los comandos anteriores no funcionaron (especialmente which node), es probable que tu Mac esté tratando de protegerlo. Usa el siguiente comando para darte la posibilidad de escribir archivos en usr/local/:

sudo chown -R $(whoami) /usr/local/copy
Esto te pedirá tu contraseña. ¡Después de tener éxito, intenta reinstalar node.js!

Para salir de la consola de node, presiona Ctrl + C o escribe .exit  .
## Fundamentals
### Descripcion General
¿Por qué JS?
En muchos sentidos, JavaScript es la magia que da vida a Internet. Muchas de las cosas nuevas más sorprendentes que hemos visto en la web en los últimos 10 años funcionan con JavaScript. Autocompletar de Google, animaciones, transiciones dinámicas, aplicaciones web de una sola página, aplicaciones de chat en el navegador, pantallas de carga y menús desplegables para nombrar algunos seleccionados. Casi damos por sentado lo extendido que está JavaScript. ¡Es por eso que creemos que cada desarrollador debe saber al menos algo de JavaScript!

No solo eso, no importa en qué pila o lenguaje decidas codificar, tendrás cierta interacción con JavaScript. Es parte de las tres grandes tecnologías de cliente. No solo eso, es el lenguaje más utilizado en el mundo web. Cuando codificas en JS, codificas en un lenguaje que más desarrolladores web pueden entender que cualquier otro lenguaje. Es por eso que recomendamos hacer algoritmos en JavaScript también. ¡Es un buen lenguaje de entrevista técnica porque es muy ampliamente entendido!

Los tres grandes
Muchas veces, cuando nos referimos a los idiomas centrales de Internet, hablamos de 'los tres grandes'. Estas tres tecnologías están presentes en casi todas las aplicaciones que encuentras en la web. Recapitulemos:

HTML representa el contenido y la estructura. Podemos pensar en esto como el esqueleto de una página web. Los elementos se colocan primero en el Modelo de objetos de documento, o DOM, para que los datos se puedan representar en el navegador.
CSS representa el estilo y el posicionamiento de nuestros elementos HTML. Podemos pensar en esto como la piel y la ropa, el lado visual de nuestro sitio web. Cosas como el color, la fuente, el tamaño y el posicionamiento están controlados en parte por CSS.
JavaScript es la acción. Podemos considerarlo como el comportamiento de nuestro sitio web. Puedes crear hermosos sitios web estáticos con HTML y CSS, pero en realidad no son funcionales hasta que agreguemos lógica. JS nos permite interactuar con nuestro HTML y CSS manipulando dinámicamente el DOM.
Caracteristicas
JavaScript es un lenguaje interpretado. En tiempo de ejecución, un intérprete analiza el JavaScript que escribimos y lo convierte en código de máquina para la computadora. Esto es contrario a un lenguaje compilado, que compila nuestro código en un lenguaje de máquina antes del tiempo de ejecución. El más común de todos los intérpretes de JavaScript está integrado en los navegadores web, con Chrome usando el motor V8 y Firefox usando SpiderMonkey. ¡Cada uno de estos intérpretes tiene sus propias reglas específicas sobre cómo debe ejecutarse JavaScript y debe tenerse en cuenta que no todos los intérpretes tienen un comportamiento idéntico!

JavaScript es un lenguaje de programación controlado por eventos. Cuando lo consideramos como la capa de comportamiento entre la interfaz de usuario y el back-end, esto tiene sentido. ¡Crear un <button> en HTML no significa que ese botón haga nada! Sin embargo, hacer clic en ese botón es un evento que JavaScript puede escuchar. JavaScript viene equipado con todo tipo de eventos de IU, desde pasar el mouse sobre un elemento HTML específico, hasta desplazarse, hacer clic y enviar formularios. Ahora considera que el ciclo de solicitud y respuesta HTTP también se basa en eventos controlados por el usuario, ¡puedes notar cómo estas tecnologías se superponen y funcionan juntas!

JavaScript se ejecuta en un solo hilo. En pocas palabras, JavaScript ejecuta un comando a la vez, nunca realiza operaciones simultáneamente. Esto plantea algunas preguntas interesantes. Si JavaScript solo ejecuta un comando a la vez, ¿cómo escucha los eventos? La respuesta es el bucle de eventos , una cola especializada que permite a JavaScript agregar dinámicamente nuevas operaciones cuando ocurren los eventos, incluso si ya está realizando operaciones. Esta es la razón por la cual JavaScript a veces (y tal vez erróneamente) se conoce como 'sin bloqueo'.
### ECMAScript & ES6

La siguiente sección es una introducción al fondo de JavaScript. Al aprender algo de la historia del lenguaje, podemos comprender mejor la importancia de ES6. Como el principal lenguaje de scripting front-end de Internet, JavaScript es un enorme iceberg de información; no todo es visible desde la superficie. Creemos que comprender cómo surgió el lenguaje mejorará tu crecimiento como desarrollador JS.

¿Qué hay en el nombre?
Esto puede ser una sorpresa, pero JavaScript no siempre se llamó JavaScript. Originalmente, durante el desarrollo, se llamaba Mocha. Después de la primera versión beta, el nombre fue cambiado a LiveScript. No mucho tiempo después, cierto proveedor de navegadores llamado Netscape decidió cambiar el nombre del lenguaje a JavaScript nuevamente, alimentándose del éxito del popular lenguaje Java.

Un par de décadas más tarde, e incluso ahora, el nombre JavaScript no necesariamente cuenta toda la historia. Para que podamos comprender realmente el panorama de JavaScript, necesitaremos comprender cómo se estandariza el lenguaje.

Introducción a ECMAScript
Hoy en día, JS es el lenguaje de scripting front-end de facto de internet. Es una tecnología increíblemente extendida que tiene que funcionar de manera consistente en todos los principales navegadores e intérpretes. Debido a esto, JavaScript necesitaba un proceso formal para impulsar el lenguaje sin alienar a los vendedores, usuarios o desarrolladores de navegadores. El resultado final es una especie de 'referencia maestra' que los intérpretes de JS deberían entender como JavaScript. Esta es nuestra estandarización.

La ECMA, o European Computer Manufacturer’s Association, mantiene la estandarización actualizada y actual de JavaScript. Este estándar se llama ECMAScript. El nombre ECMAScript, a veces acortado como ES, terminó siendo nada más que un compromiso entre las diferentes organizaciones involucradas en el proceso de especificación. Brendon Eich, el creador de JavaScript, ha comentado que "[este] siempre fue un nombre comercial no deseado que suena como una enfermedad de la piel".

Para nosotros, como desarrolladores, la conclusión es bastante simple: ECMAScript es la estandarización de JavaScript y JavaScript es la implementación del estándar ECMA . La mayor parte del JavaScript al que has estado expuesto es una versión del estándar llamado ES5, estandarizado en 2009 y a veces llamado ECMAScript 5.

ES6 y más allá
ES2015, o ES6, es el estándar más nuevo. Es un superconjunto de ES5, lo que significa que contiene todas las características de ES5, además de todas las nuevas incorporaciones de ES6. Este es un tema común para las estandarizaciones de JavaScript, donde los nuevos estándares a menudo se incluyen como un superconjunto del antiguo estándar, rara vez excluyendo las características.

Puntos importantes

ES6 es un superconjunto de ES5. Debido a que ES6 no es un lenguaje completo en sí mismo, debemos aprender ambos.
La gran mayoría de JavaScript existente sigue siendo ES5, incluidas bibliotecas, bases de código heredadas y ejemplos que encuentra en la web.
Muchas de las características más importantes de ES6 son el código simplificado (syntactic sugar). No necesariamente es necesario, pero hacen que el lenguaje sea más dulce para escribir.
JavaScript es el lenguaje, ECMAScript es el estándar.
En los siguientes capítulos, aprenderemos ES5 y ES6 en paralelo, con las nuevas características de ES6 claramente marcadas.
### Depuración de JS
Introducción
Tarde o temprano, tu código se romperá, sin importar cuán talentoso o experimentado seas. Es por eso que la autosuficiencia es tan importante. ¡Desarrollar nuestras habilidades de depuración es mucho más fácil que siempre escribir código 100% perfecto sin errores en tu primer intento! Afortunadamente, JavaScript tiene muchas herramientas para facilitarnos la búsqueda de errores. Como mencionamos anteriormente, JavaScript se ejecuta en dos partes. Primero se analiza para asegurarse de que JavaScript sea viable, luego el código se ejecuta realmente. Por lo general, los errores siguen este mismo formato. Tenemos errores de sintaxis y errores de tiempo de ejecución.

Errores de sintaxis
Considera el siguiente código. ¿Qué registramos en la consola?

let x = 1;
let y = 2;
let z == 3;
console.log(x + x);
console.log(y - z);
console.log(z * x);
copy
¡Pregunta capciosa! Este es uno de los tipos más comunes de errores de sintaxis: token inesperado . Si nos fijamos bien en z, tenemos un doble signo igual. El analizador arrojó un error de token inesperado porque ==simplemente no se espera después delet z.

Los errores de sintaxis ocurren cuando el analizador encuentra JavaScript no válido. En el momento en que se encuentra un error, el analizador termina y el programa finaliza sin ejecutar ningún código. En el ejemplo anterior, el archivo console.logs nunca se activó porque el error de sintaxis mató nuestra aplicación incluso antes de que comenzara.

Los errores de sintaxis muestran la línea en la que el analizador cometió un error. Esto significa que tu problema ocurrió en algún lugar antes de esa línea y no necesariamente en esa línea específica. Deberías rastrear tus errores de sintaxis hacia atrás comenzando en la línea en la que se produjo el error.

Errores de tiempo de ejecución
Un error de tiempo de ejecución es lo que sucede si tu código se analiza correctamente y el error ocurre mientras el programa se está ejecutando. Por lo general, solo llamamos a esto bugs.

Ejemplos de errores de tiempo de ejecución pueden ser lógica defectuosa o código escrito incorrectamente. Escribiste un conjunto de instrucciones y el resultado es incorrecto.

Cuando tu código no se comporta de la manera que esperabas, existen muchas técnicas para encontrar la raíz del problema. Pregúntate, ¿cuál fue la línea de código más reciente que agregaste antes de que tu programa comenzara a fallar? ¿Cuántas líneas de código escribiste entre pruebas? Si estabas por encima de seis o siete líneas, es posible que estés codificando demasiado y ejecutando tu código muy poco. A veces es necesario volver al principio y hacer preguntas que parecen ser muy básicas, como "¿Cuáles son los pasos necesarios para hacer lo que quiero hacer?"

Al final del día, recuerda: el 100% de todos los errores que encuentres fueron creados por un desarrollador. Crear errores no te convierte en un mal desarrollador, ¡te convierte en un desarrollador!



Resumen
Al depurar tu JS, siempre confirma que no tienes errores de sintaxis primero. Tu código no se ejecutará hasta que se corrijan esos errores de sintaxis.
Al buscar errores de sintaxis, generalmente el problema real está antes de la línea que erró. Trabaja hacia atrás desde allí.
Console.log todo! Muchas veces los errores más grandes provienen de supuestos defectuosos. Esa variable que creías que era una cadena era en realidad una serie de cadenas, que pueden cambiar completamente tu lógica.
Ejecuta tu código temprano y con frecuencia, especialmente al principio. Si estás escribiendo 20 o 30 líneas de JavaScript a la vez antes de ver si algo funciona, ¡estás codificando demasiado! Cuanto más fuerte seas con JS, más suposiciones podrás hacer, ¡pero al principio no asumas nada!

Previous
### ¿Qué es el scope (Alcance) ?

Scope es la visibilidad o accesibilidad de la información, como variables y funciones, a una sección particular de código. JavaScript tiene un alcance funcional y tradicionalmente tiene dos tipos de alcance: global y local. Se crean nuevos ámbitos definiendo funciones.

Alcance Global (Global Scope)
Cada aplicación de JavaScript tiene un alcance global. Por definición, eso lo hace omnipresente, lo que significa que las variables o funciones definidas dentro están siempre disponibles para todos los aspectos de tu aplicación.

Alcance Local (Local Scope)
El alcance local, en contraste, tiene una visibilidad del programa mucho más estrecha. Se localiza  en la función particular en la que se define esa información.

Identificar el Alcance
Considera lo siguiente, ¿puedes identificar los diferentes ámbitos en el ejemplo proporcionado?

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);       copy


¿Cuántos ámbitos pudiste identificar? Recuerda que siempre tenemos un alcance global, y cada función creará un nuevo alcance, por lo que tenemos tres ámbitos en nuestro ejemplo.



scopes



Si tienes experiencia en Java o C++, es posible que hayas notado una curiosidad de que nuestro buclefor no crea un alcance, y que las variables que son exclusivas de él, nombre e índice, todavía están disponibles después de la finalización. Esto se debe a que JavaScript tiene un alcance de función, por lo que las variables, sin importar dónde estén definidas, están disponibles en todo el ámbito.

const y let
Con el lanzamiento de ES2015 (ES6) tenemos dos nuevas formas de declarar variables: consty let.  Estas nuevas declaraciones nos dan la capacidad de ampliar la información con mayor precisión a secciones individuales de código, llamadas block scoping.Esto nos da un mayor control sobre la visibilidad de la información y nos permite reutilizar nombres de variables en la misma función, pero diferentes bloques de código, sin conflictos. Un bloque de código se define por la apertura y el cierre de llaves, {}.

Si bien tanto const como let son block scopedhay algunas diferencias que debemos entender. letpermite la reasignación del contenido de nuestras variables declaradas y no requiere un valor tras la declaración. const, por otro lado, debe asignar un valor en la creación y ese valor puede no cambiar durante la vida útil de la variable. Es inmutable.

Con ese conocimiento, refactoricemos el ejemplo anterior para usar nuestras nuevas declaraciones de variables. ¿Qué debería ser constante? ¿Qué información cambia con el tiempo? Podrías afirmar que nuestra matriz de nombres nunca debería asumir una matriz diferente, por lo que ciertamente deberíamos usar const.

const beatles = ['Paul', 'George', 'John', 'Ringo'];copy
Eso fue fácil, pero ¿qué tal nuestro bucle? Como con la mayoría de las respuestas sobre programación: depende. ¿Queremos que la información de namee index esté disponible después de nuestro bucle, o debe dejar de existir? Consideremos ambos escenarios. Supongamos por el momento que realmente nos gusta nuestraconsole.log final, refactorizaríamos a esto:

function actuallyPrintingNames() {
  let index = 0;
  let name;
  for (index; index < names.length; index++) {
    name = names[index];
    console.log(name + ' was found at index ' + index);
  }
  console.log('name and index after loop is ' + name + ':' + index);
}copy
Declarar el nombre y el índice sobre nuestro bucle permite que esas variables existan en toda la función actuallyPrintingNames, de forma similar a si hubiéramos declarado con var. Si encuentras que el último console.log es superfluo, puedes refactorizarlo como tal:

function actuallyPrintingNames() {
  for (let index = 0; index < names.length; index++) {
    let name = names[index];
    console.log(name + ' was found at index ' + index);
  }
  console.log('name and index after loop is ' + name + ':' + index);
}                copy
Ejecutar nuestro código ahora dará como resultado un error: ReferenceError: name is not definedporque el nombre solo está disponible dentro de nuestro bucle for. Eliminarlo de console.log y volver a ejecutarlo dará como resultado el mismo error pero con referencia al índice. Aunque parece que el índice está definido fuera del bloque de bucle {}, sigue siendo parte de la construcción general de nuestro bucle y está incluido en su alcance. Elimina la instrucción console.log. Una última modificación antes de continuar: el nombre no cambia durante la iteración, por lo que debe ser una constante.

const name = names[index];copy
Puedes pensar que este cambio no tiene sentido, porque, si bien el nombre no cambia en una iteración, ciertamente cambiará en la siguiente. Eso es cierto, pero la naturaleza del alcance del bloque crea un 'entorno' solo para esa iteración y en el siguiente existirá un entorno completamente nuevo para el bloque. Nuestro código refactorizado final debería verse así:

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);copy
Podemos mezclar el uso de varcon consty let, pero ahora que tenemos una mejor comprensión de estas declaraciones más recientes, debemos evitar usar var siempre que sea posible.




Previous

### Elevación (Hoisting)
Introducción
Cuando enviamos JavaScript al navegador para que se ejecute, el intérprete lo divide en dos pasos. Primero, analiza el código y garantiza que sea una sintaxis compatible con JavaScript viable. En segundo lugar, ejecuta el código. Puedes pensar que tu código se ejecuta línea por línea, pero con JavaScript, este no es siempre el caso. Es común que incluso los desarrolladores experimentados no comprendan completamente las reglas de elevación, pero es importante para escribir JS limpio.

Variable Hoisting con var
¿Qué sucede cuando usamos una variable que no hemos creado?

console.log(magicalUnicorns);
copy
Obtenemos ReferenceError: magicalUnicorns no está definido . Este es un ejemplo de un error de análisis: nuestro código nunca se ejecutó, se detuvo allí tan pronto como el analizador notó que estábamos tratando de usar una variable no inicializada. Veamos cómo la palabra clave var afecta esto:

console.log(magicalUnicorns);
var magicalUnicorns = "awesome";
copy
Si ejecutaste el código anterior, es posible que hayas notado algo extraño. No hubo ReferenceError.  En cambio, nuestra salida de console.log no está definida . Algo más debe estar sucediendo aquí. Lo que realmente sucede es que nuestra variable var está siendo elevada .

En JavaScript, las declaraciones de variables se elevan a la parte superior de su alcance. Así es como el intérprete realmente lee el ejemplo anterior:

var magicalUnicorns; // la declaración se eleva a la parte superior del alcance por sí sola
console.log(magicalUnicorns); // Lo registramos como indefinido
magicalUnicorns = "awesome"; // la tarea se queda exactamente donde estaba
copy
Por otro lado, let y const no nos permiten hacer esto.

console.log(magicalUnicorns); 
let magicalUnicorns = "awesome!";
copy
En el ejemplo anterior, let producirá ReferenceErrors si intentamos llamar a la variable de esta manera.

Levantamiento en funciones
Discutimos anteriormente que las llamadas a funciones crean su propio alcance . ¿Cómo crees que se ejecutará el próximo fragmento?

var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);
copy
Cuando ejecutas este código, ¿cuáles son los registros de su consola y en qué orden? La respuesta puede ser una sorpresa. Vamos a desglosarlo.

var foo;                  // 'foo' es una declaración, es global y se eleva
function magic(){         // 'magic()' también se eleva a la cima
    var foo;              // aqui 'foo' es declarada dentro de 'magic()' y se eleva a la parte superior de su scope
    foo = "hello world";  // asignamos un valor a nuestra función scoped 'foo'
    console.log(foo);     // lo registramos como 'hola mundo'
}                       
foo = "bar";              // aquí, asignamos un valor al 'foo' global'
magic();                  // magic es llamada y se ejecuta la primera consola.log
console.log(foo);         // finalmente registramos el foo global
copy
Aquí hay dos conclusiones: las funciones actúan como una jaula, evitando que se levanten declaraciones. Otra cosa para recordar es que las funciones independientes también se elevan. Veamos si puedes predecir el resultado de este próximo ejemplo sin ejecutarlo:

magicalUnicorns();
var magicalUnicorns = function(){
    console.log("Will it blend?");
}
console.log("Don't breathe this!");

¿Qué registro de consola se dispara primero? ¡Ninguno! Obtenemos el error 'Unicornios mágicos no es una función'. ¿Por qué? La variable magicalUnicorns se elevó a la parte superior e intentamos invocarla antes de asignarle la función.

Reglas clave de elevación
• Las declaraciones variables ( var) se elevan a la parte superior de su alcance como globos de aire caliente.

• Las funciones crean su propio alcance y actúan como jaulas, evitando que se eleven las declaraciones.

• Las asignaciones o signos = actúan como anclas. Se quedan, sin importar cómo se reorganice el código.

• Las variables declaradas con let y const también se elevan pero, a diferencia de var, no se inicializan con un valor predeterminado y arrojará un error si se llama antes de que se declaren. const incluso arrojará un error de sintaxis si se llama antes de ser asignado.



### Una tabla de valores comunes de Big O
Cuanto más inclinada sea la línea en el gráfico anterior, más trabajo se necesita para resolver ese tipo de algoritmo.
Big O
Descripción
Ejemplo
O( 1 )
Cualquier cosa que tiene que correr 1 número de veces
Encontrar el valor más pequeño de una lista ordenada
O( N )
Cualquier cosa que tiene que correr "N" número de veces	Encuentra el valor más grande en una matriz desordenada
O( N^2 )
Cualquier cosa que tenga que pasar por "N" cosas "N" veces	Bubble Sort
O( log(N) )
Cualquier cosa que pueda reducir el conjunto de valores restantes a la mitad o más para cada valor leído.	Búsqueda binaria
O(N*log(N))
Algoritmos que pueden emplear un enfoque de divide y vencerás	Quick Sort