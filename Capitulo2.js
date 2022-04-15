//ARRAYS
let caja=["Elemento1","Elemento2","Elemento3"];
let caja2=["alfa", "Bravo", 3, 9, 7.5, 0.1, false, true];
let extraccion=caja[1];
if(caja2[3]<10){
    document.write("If1");
}
if(caja2[7]){
    document.write("If2");
}

//ARRAYS ASOCIATIVOS

let dni={
    nombre: "Rodrigo",
    apellido: "Flores",
    edad: 21,
    vivo: true,
    altura: 1.70,
};//DECLARACIÓN
let nombre=dni["nombre"];//EXTRACCIÓN DE DATOS
let apellido=dni["apellido"];
let edad=dni["edad"];
let estado=dni["vivo"];
let talla=dni["altura"];
//CREACIÓN DE FRASE MUESTRA
let frase=`
    Mi nombre es <b>${nombre} ${apellido}</b> <br>
    Tengo <b>${edad}</b> años <br>
    Mido <b>${talla}</b> <br>
    Y mi estado de vida actual es: <b>${estado}</b> <br>`;
document.write(frase);
//WHILE
// while(sentencia==true){
//     //bloque de código a ejecutar
// }
let iterador=0;
let out=0;
while(iterador<=10){
    out=`${iterador}<br>`;
    document.write(out);
    iterador++;
}
iterador=0;
out=0;
do{
    document.write(iterador + "<br>");
    iterador++;
}while(numero>6)

//FOR
for(let i=0 ; i<6 ; i++){
    document.write(i+"<br>")
}

for(var i = Things.length - 1; i >= 0; i--){
    Things[i];
}