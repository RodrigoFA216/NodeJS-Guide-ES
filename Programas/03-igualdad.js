// Codifique un programa que permita confirmar la igualdad de la ecuación 
// (T/P)^N = (T^N)/(P^N)
let T=prompt("Por favor ingrese el valor de T");
let P=prompt("Por favor ingrese el valor de P");
let N=prompt("Por favor ingrese el valor de N");
let primero;
let segundo;
let ecuacion1=((T/P)**N);
let ecuacion2=((T**N)/(P**N));
primero=`La ecuación (T/P)^N=(${T}/${P})^${N}=${ecuacion1}<br>`;
segundo=`La ecuación (T^N/P^N)=(${T}^${N}/${P}^${N})=${ecuacion2}<br>`;

document.write(primero);
document.write(segundo);