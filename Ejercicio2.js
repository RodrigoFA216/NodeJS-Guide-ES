var coke = 3,
    powerade = 2.9,
    fanta = 2.7,
    pepsi = 2.5,
    fuzeTea = 2.1,
    sprite = 2.0,
    agua = 1.5;
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