//Tipos de variables
//entero
// var entero=2;
// var decimal=2.0;
// var texto="Alfred";
// var bool=false;
// let a=12;
// let b=24;
// let c=25;
// let d=92;
// let e=91;
// let f=true;
// let g=false
// let resultado1=(a<b||b<c)&&(!a&&e!=d);
// document.write(resultado1)
// let numero;
// alert(numero);

// let numero2=null;
// alert(numero2);

// let variable=prompt("text");
// alert("el texto introducido es " + variable);

// var nombre="Rodrigo Flores";
// var frase=`soy ' "${nombre}" ' y estoy caminando`;
// document.write(frase);

// Listos-----------------------------------------------------------------------------
//DECLARACIÓN DE VARIABLES
const pi = 3.14159265359

let numero;
alert(numero); //UNDEFINED

let numero2 = null;
alert(numero); //NULL

let numeor3 = 2;
let string2 = "Doge";
alert(numero3 * string2); //NAN

//ENTRADA Y SALIDA DE DATOS
//INPUT DE DATOS
prompt("< texto >");

let variable = prompt("Ingresa tu nombre"); //Guardar el dato en una variable

//OUT DE DATOS
variable = prompt("Introduce un texto");
alert("El texto introducido es: " + variable); //Alert

variable = prompt("Introduce un texto");
document.write("el texto introducido es: " + variable); //Document write

//OPERADORES 
let x = 10;
let y = 5;
let r = null;
document.write(`La suma de ${x} + ${y} es ${x+y}`);
document.write(`La resta de ${x} - ${y} es ${x+y}`);
document.write(`La división de ${x} / ${y} es ${x+y}`);
document.write(`La multiplicación de ${x} * ${y} es ${x+y}`);
document.write(`El incremento de ${x} es ${x++}`);
document.write(`El decremento  de ${x} es ${x--}`);
document.write(`La exponenciación de ${x} a la ${y} es ${x**y}`);
document.write(`El resto de ${x} % ${y} es ${x%y}`);
document.write(`La negación unaria de ${x}  -${x} es ${-x}`);
document.write(`La adición unaria de ${x}  +${x} es ${+x}`);

//CONCATENACIÓN
let saludo = "Hola Juanjo";
let pregunta = "¿cómo estás?";
let frase = saludo + pregunta;
docuemnt.write(frase);

//FORZAR STRING
let numero1 = 5;
numero2 = 6;
frase = "" + numero1 + numero2;

//BACKTICKS
let nombre = "Rodrigo Flores";
frase = `soy ${nombre} y estoy caminando`
document.write(frase)

//OPERADEORES DE COMPARACIÓN
x = 10;
y = 5;
document.write(`La Igualdad entre ${x}==${y} es ${x==y}`);
document.write(`La Desigualdad entre ${x}!=${y} es ${x!=y}`);
document.write(`La Identidad entre ${x}===${y} es ${x===y}`);
document.write(`La Desidentidad entre ${x}!==${y} es ${x!==y}`);
document.write(`El mayor que entre ${x}>${y} es ${x>y}`);
document.write(`El mayor o igual que entre ${x}>=${y} es ${x>=y}`);
document.write(`El menor que entre ${x}<${y} es ${x<y}`);
document.write(`El menor o igual que entre ${x}<=${y} es ${x<=y}`);

numero = 23;
let texto = "23";
document.write(texto == numero); //IGUALDAD

document.write(texto === numero); //IDENTIDAD

document.write(texto != numero); //DESIGUALDAD

document.write(texto !== numero); //DESIDENTIDAD

//COMPARADORES BOOLEANOS
let a = 12;
let b = 24;
let c = 25;
let d = 92;
let e = 91;
let f = true;
let g = false;

document.write(f && g); //AND
document.write(f || g); //OR
document.write(!f); //NOT
document.write(!g); //NOT

let resultado1 = (a < b || b < c) && (!a && e != d);
document.write(resultado1);

//CONDICIONALES

x = 10;
y = 5;
a = 12;
b = 24;
c = 25;
d = 92;
e = 91;
f = true;
g = false;

//IF
if (x > a) {
    alert("La sentencia es cierta");
}
if (x >= y) {
    alert("La sentencia es cierta");
}
if (((x + y) <= b--) && (d === e++ || (b + c > e / 2))) {
    alert("La sentencia es cierta");
}

//ELSE
nombre = "Rodrigo Flores";
if (nombre == "Rodrigo") {
    alert("La sentencia es cierta");
} else {
    alert("La sentencia es incorrecta");
}

//EJEMPLO DEL MUNDO REAL EJERCICIO 1

var validacion = "Rodrigo";
nombre = prmpt("Por favor, inserte su nombre: ");
if (nombre === validacion) {
    alert(`Bienvenido ${validacion} ¿como estás el día de hoy?`);
} else {
    alert(`Disculpe ${nombre} su usuario es incorrecto, por favor ingrese un usuario válido`);
}

//CONDICIONAL ELSE IF
var validacion1 = "Rodrigo";
var validación2 = "Juan";
nombre = prmpt("Por favor, inserte su nombre: ");
if (nombre === validacion1) {
    alert(`Bienvenido ${validacion1} ¿como estás el día de hoy?`);
} else if (nombre === validacion2) {
    alert(`Bienvenido ${validacion2} ¿como estás el día de hoy?`);
} else {
    alert(`Disculpe ${nombre} su usuario es incorrecto, por favor ingrese un usuario válido`);
}

//PROBLEMAS DEL MUNDO REAL EJERCICIO 2

var coke = 3,
    powerade = 2.9,
    fanta = 2.7,
    pepsi = 2.5,
    fuzeTea = 2.1,
    sprite = 2.0,
    agua = 1.5
;
var dinero = prompt("Hola, por favor ingresa cuantos dólares tienes?");
var vuelto = parseInt(dinero);
if (vuelto >= coke) {
    alert(`En realidad te alcanza para todos los refrescos, tu cambio sería el siguiente:`);
    alert(`coke: ${vuelto-3} powerade: ${vuelto-2.9} fanta: ${vuelto-2.7} pepsi: ${vuelto-2.5} Fuze Tea: ${vuelto-2.1} sprite: ${vuelto-2.0} agua: ${vuelto-1.5}`);
} else if (vuelto <= powerade) {
    alert(`En realidad te alcanza para casi todos los refrescos, tu cambio sería el siguiente:`);
    alert(`powerade: ${vuelto-2.9} fanta: ${vuelto-2.7} pepsi: ${vuelto-2.5} Fuze Tea: ${vuelto-2.1} sprite: ${vuelto-2.0} agua: ${vuelto-1.5}`);
} else if (vuelto <= fanta) {
    alert(`En realidad te alcanza para casi todos los refrescos, tu cambio sería el siguiente:`);
    alert(`fanta: ${vuelto-2.7} pepsi: ${vuelto-2.5} Fuze Tea: ${vuelto-2.1} sprite: ${vuelto-2.0} agua: ${vuelto-1.5}`);
} else if (vuelto <= pepsi) {
    alert(`En realidad te alcanza para casi todos los refrescos, tu cambio sería el siguiente:`);
    alert(`pepsi: ${vuelto-2.5} Fuze Tea: ${vuelto-2.1} sprite: ${vuelto-2.0} agua: ${vuelto-1.5}`);
} else if (vuelto <= fuzeTea) {
    alert(`En realidad te alcanza para casi todos los refrescos, tu cambio sería el siguiente:`);
    alert(`Fuze Tea: ${vuelto-2.1} sprite: ${vuelto-2.0} agua: ${vuelto-1.5}`);
} else if (vuelto <= sprite) {
    alert(`En realidad te alcanza para casi todos los refrescos, tu cambio sería el siguiente:`);
    alert(`sprite: ${vuelto-2.0} agua: ${vuelto-1.5}`);
} else if (vuelto <= agua) {
    alert(`En realidad te alcanza solo para el agua, tu cambio sería el siguiente:`);
    alert(`agua: ${vuelto-1.5}`);
} else {
    alert(`En realidad no te alcanza para nada :c`);
}