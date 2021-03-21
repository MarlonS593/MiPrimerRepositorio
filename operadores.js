//operador +
var operandoN1 = 5000;
var operandoN2 = 15000;
var resultado = operandoN1 + operandoN2
console.log( resultado );

//Operador *
var operandoN3 = 12;
var operandoN4 = 2;
var resultado2 = 12 * 2;
console.log ( resultado2 );

// operador /
var resultado3 = operandoN2 / operandoN1;
console.log( "el resultado de su división es:"+resultado3 );

//operador ++
resultado3++;
console.log ("Incrementando la variable resultado3 es:"+resultado3);

//Operadores de asignación
//Operador =
operandoN1 = operandoN2;
console.log (operandoN1);

//Operador +=
//forma completa
//opernadoN3 = operandoN3 + operandoN4 
//version resumida
operandoN3 += operandoN4;
console.log (operandoN3)

//Operadores de comparación

var nComparacion1 = 5;
var nComparacion2 = 10;
var resultadocomparacion = (nComparacion1 > nComparacion2);
console.log(resultadocomparacion);

//operadores Lógicos
//Resultado operador && -Y
//true && true --> true
//false && false --> false
// false && true --> false
// false && false --> false

//Resultado operador || - O
// true || true --> true
// false || false --> fasle
// false || true --> true
// true || false --> true 


var oplN1 = 5;
var oplN2 = 50;
var oplN3 = 30;

//operador && (AND O "Y")
var resultadoOperadorLY = ( oplN1 < oplN2 ) && ( oplN2 < oplN3 ); 
console.log ("El resultado del operador Y, es:" + resultadoOperadorLY);

//Operador || ("OR" o "O")

var resultadoOperadorLO = ( oplN1 < oplN2 ) || (oplN2 < oplN3);
console.log ("El resultado del operador O, es:" + resultadoOperadorLO); 

//Operador negación !
var resultadoOperadorLN = !resultadoOperadorLO;
console.log ("El resultado del operador negacion, es:" + resultadoOperadorLN); 


