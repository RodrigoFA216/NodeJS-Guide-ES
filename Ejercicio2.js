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
    document.write(`<br>En realidad te alcanza para todos los refrescos, tu cambio sería el siguiente:`);
    document.write(`<br>coke: ${vuelto-3} powerade: ${vuelto-2.9} fanta: ${vuelto-2.7} pepsi: ${vuelto-2.5} Fuze Tea: ${vuelto-2.1} sprite: ${vuelto-2.0} agua: ${vuelto-1.5}`);
} else if (vuelto <= powerade) {
    document.write(`<br>En realidad te alcanza para casi todos los refrescos, tu cambio sería el siguiente:`);
    document.write(`<br>powerade: ${vuelto-2.9} fanta: ${vuelto-2.7} pepsi: ${vuelto-2.5} Fuze Tea: ${vuelto-2.1} sprite: ${vuelto-2.0} agua: ${vuelto-1.5}`);
} else if (vuelto <= fanta) {
    document.write(`<br>En realidad te alcanza para casi todos los refrescos, tu cambio sería el siguiente:`);
    document.write(`<br>fanta: ${vuelto-2.7} pepsi: ${vuelto-2.5} Fuze Tea: ${vuelto-2.1} sprite: ${vuelto-2.0} agua: ${vuelto-1.5}`);
} else if (vuelto <= pepsi) {
    document.write(`<br>En realidad te alcanza para casi todos los refrescos, tu cambio sería el siguiente:`);
    document.write(`<br>pepsi: ${vuelto-2.5} Fuze Tea: ${vuelto-2.1} sprite: ${vuelto-2.0} agua: ${vuelto-1.5}`);
} else if (vuelto <= fuzeTea) {
    document.write(`<br>En realidad te alcanza para casi todos los refrescos, tu cambio sería el siguiente:`);
    document.write(`<br>Fuze Tea: ${vuelto-2.1} sprite: ${vuelto-2.0} agua: ${vuelto-1.5}`);
} else if (vuelto <= sprite) {
    document.write(`<br>En realidad te alcanza para casi todos los refrescos, tu cambio sería el siguiente:`);
    document.write(`<br>sprite: ${vuelto-2.0} agua: ${vuelto-1.5}`);
} else if (vuelto <= agua) {
    document.write(`<br>En realidad te alcanza solo para el agua, tu cambio sería el siguiente:`);
    document.write(`<br>agua: ${vuelto-1.5}`);
} else {
    document.write(`<br>En realidad no te alcanza para nada :c`);
}