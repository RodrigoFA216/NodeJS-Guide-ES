// Construya un programa qie al recibir como dato un numero entero, 
//determine e imprima si el mismo es par impar o nulo

let numero = prompt("Introduzca un numero entero por favor: ");
numero=parseInt(numero);
if (((numero % 2) == 0)) {
    alert("El numero es par");
} else if ((numero % 2) == 1) {
    alert("El numero es impar");
} else {
    alert("El numero es nulo");
}