// Codifique un programa que al introducir tres numeros 
// Determine si estan en orden ascendente en orden descendente o no estan en orden
let uno=prompt("Inserte el primer numero por favor");
let dos=prompt("Inserte el segundo numero por favor");
let tres=prompt("Inserte el tercer numero por favor");
if (uno>dos&&dos>tres) {
    alert("Los números están en orden ascendente");
}else if (uno>dos&&dos<tres){
    alert("El tercer número está en desorden");
}else if (dos>tres&&tres>uno) {
    alert("todos los números están en desorden");
}else if (dos>tres&&tres>uno) {
    alert("El tercer número está en desorden");
}else if (tres>uno&&uno>dos) {
    alert("El segundo número está en desorden");
}else if (tres>dos&&dos>uno){
    alert("Los números están en orden descendente");
}