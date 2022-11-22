//¿Cuál es el output o salida en consola luego de ejecutar este código? 
// Explicar por qué:

function test() {
    console.log(a);
    console.log(foo());
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 /*El primer console.log debera devolver un undefined porque esta llamando 
 una variable antes de declararla y el segundo deberia devolver 2 
 luego del undefined
 */
 //test();
// y esta ?
 var snack = 'Meow Mix';

function getFood(food) {

   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return console.log(snack);
}
/* Esta funcion solo retornara undefined porque no al pasar por parametro false el if no entrara en accion
y snack no tendra una variable declarada dentro de la funcion
*/
//getFood(false);
 

//Determiná que será impreso en la consola, sin ejecutar el código.
/*Asignar un valor a una variable no declarada implica crearla como variable global 
(se convierte en una propiedad del objeto global)
 cuando la asignación es ejecutada.
 */

/*x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x + "primero" );// Este va a ser el primer en ejecutarse devolvera 10
   console.log(a + "segundo");// Este sera el segundo devolvera 8
   var f = function (a, b, c) {
      b = a;
      console.log(b + "tercero");//Este sera el tercero devolvera 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b + "cuarto"); // Este sera el cuarto devolvera 9
};
c(8, 9, 10);
console.log(b + "quinto"); //Este devolvera 10
console.log(x + "sexto");//este devolvera 1*/

//Los console.log devolveran error porque son variables llamadas antes de declararlas y la funcion se ejecutara normalmente si no fuera por los errores de los log
/*console.log(bar);
console.log(baz);
foo();
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;*/

//Esta devolvera Franco porque se le re asigna el valor;
/*var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);*/

/*var instructor = 'Tony';
console.log(instructor);//Devuelve Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);//Devuelve Franco
   }
})();
console.log(instructor);//Devuelve Tony*/

/*var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);//ejecutara The flash
   console.log(pm);//Ejecutara Reverse Flash
}
console.log(instructor);//Ejecutara The flash
console.log(pm);//Ejecutara Franco*/

// COERCIION DE DATO
/*
console.log(6 / "3") // 2
console.log("2" * "3") //6
console.log(4 + 5 + "px")//9px
console.log("$" +4 +5)//$9
console.log("4"-2)//2
console.log("4px" - 2)// NaN
console.log(7 / 0) //infinito
console.log({}[0])//indefinido
console.log(parseInt("09"))//9
console.log(5 && 2)// devuelve el mas grande
console.log(2 && 5)// 5
console.log(5 || 0)// 5
console.log([3] + [3] - [10])//devuelve 23
console.log(5<13<9)// Devuelve false 
console.log([] == ![])//Devuelve true*/

/*var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;//aurelio De rosa
      },
   },
};

console.log(obj.prop.getFullname());*/

/*var test = obj.prop.getFullname;

console.log(test());//Devolvera undefined se llamo de manera incorrecta a al "metodo"
*/

function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();//1 4 3 2