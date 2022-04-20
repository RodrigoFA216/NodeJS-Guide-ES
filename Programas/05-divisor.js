// Determine mediante dos numeros introducidos si uno es divisible entre otro
let uno=prompt("Ingresa el primer número: ");
let dos=prompt("Ingresa el segundo número: ");
uno=parseInt(uno);
dos=parseInt(dos);
if(uno%dos===0){
    alert("El numero es divisor");
}else{
    alert("El numero no es divisor");
}