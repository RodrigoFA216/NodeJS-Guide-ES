var validacion="Rodrigo";
var nombre=prompt("Por favor, inserte su nombre: ");
if(nombre===validacion){
    alert(`Bienvenido ${validacion} ¿como estás el día de hoy?`);
}else{
    alert(`Disculpe ${nombre} su usuario es incorrecto, por favor ingrese un usuario válido`);
}