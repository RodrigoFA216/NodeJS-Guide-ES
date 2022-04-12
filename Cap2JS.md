# Capitulo dos
## Indice
* [Arrays](#id20)
* [Arrays Asociativos](#id21)
    * [Implementación](#id22)
* [Bucles e iteración](#id23)
    * [Do While](#id24)
    * [While](#id24)
        * [Do While](#id24)
* [For](#id25)

* []()

## Arrays <a name="id20"></a>

Los arrays son un tipo especial de variable, las variables eran cajitas donde guardabamos los datos, los arrays por su parte es una caja más grande que puede guardar y separar muchos datos de forma organizada gracias a los Indices o Posicionamientos.

Funciona de esta manera, en la caja vamos a ir guardando datos al declararlos, para sacarlos modificarlos leerlos o borrarlos necesitamos acceder a su indice, para un ejemplo más gráfico podemos ver el siguiente ejemplo gráfico:

![If you see this... something go wrong](./Array.png)

Como puedes observar la caja tiene elementos, tres elementos para ser exactos, para poder leer de forma ordenada el contenido de la caja lo tenemos que hacer a través de los indices que son los numeros de debajo de los elemntos, para poder leer el elemento 2 necesitaríamos acceder al indice numero 1 y se escribiría así:

    let extraccion=caja[1];

el indice 1 apunta a la posición 2 dentro de la caja y es por que en programación y en específico para los indices empezamos a contar desde el numero 0, es decir que la suseción aritmética de numeros naturales positivos cambiaría como lo hacemos naturalmente. Comunmente lo haríamos: 1, 2, 3, 4, 5; en programación empezamos a contar: 0, 1, 2, 3, 4, 5; de esta manera nos podemos ir orientando.

La forma de declarar un array identico al de la imagen es la siguiente

    let caja=["Elemento1","Elemento2","Elemento3"];

Sin embargo también le podemos dar a guardar números enteros, flotantes, strings y booleanos según nos convenga.

    let caja2=["alfa", "Bravo", 3, 9, 7.5, 0.1, false, true];

Para acceder a ellos podemos hacerlo con los indices, e incluso operarlos dentro de estructuras con sentencias de control:

    let caja2=["alfa", "Bravo", 3, 9, 7.5, 0.1, false, true];
    if(caja2[3]<10){
        document.write("If1");
    }
    if(caja2[7]){
        document.write("If2");
    }
>El if1 se imprime por que la sentencia caja2[3] osea 9 es menor que 10 así que el resultado de la sentencia caja2[3]<10 es true.

>El if2 se imprime por que el valor guardado en la posición 7 ya es un true por lo que la sentencia es verdadera y el if ejecuta el bloque de código asignado.

## Arrays asociativos <a name="id21"></a>

Los arrays asociativos a diferencia de los arrays normales para acceder a un indice o casilla la etiqueta o indice de cada casilla requiere de un dato de tipo string.

![If you see this... something go wrong](./Array_asociativo.png)

No pueden ser números y un ejemplo de su sintaxis es la siguiente:

    let dni={
        nombre: "Rodrigo",
        apellido: "Flores",
        edad: 21,
        vivo: true,
        altura: 1.70,
    };

Para poder acceder al apellido no ponemos dni[apellido], necesitamos poner dni["apellido"] para que  de esa forma JS sepa en qué indice debe colocarse. la respuesta o valor de retorno de dni["apellido"] es Flores en forma de string.

### Implementación de los arrays asocativos <a name="id22"></a>

Implementemos una impresión en pantalla con los datos de nuestro array asociativo.

    let nombre=dni["nombre"];
    let apellido=dni["apellido"];
    let edad=dni["edad"];
    let estado=dni["vivo"];
    let talla=dni["altura"];
    let frase=`
        Mi nombre es <b>${nombre} ${apellido}</b> <br>
        Tengo <b>${edad}</b> años <br>
        Mido <b>${talla}</b> <br>
        Y mi estado de vida actual es: <b>${estado}</b> <br>`;
    document.write(frase);

Intentalo ahora con tus datos.

## Bucles e iteraciones <a name="id23"></a>

Los bucles en programación son sentencias de código muy parecidas al if, sin embargo el if una vez que se pregunta s es o no verdadero sigue con el código de forma secuencial, los bucles cuando preguntan si la sentencia se cumple y se ejecuta el código una vez, esta sentencia va a preguntar de nuevo si cumple la sentencia, si sigue cumpliendo la sentencia entonces volverá a ejecutar el código una y otra vez hasta que se deje e cumplir la sentencia

![If you see this... something go wrong](./If%20y%20While.png)

### Bucle while <a name="id24"></a>

Como ya lo había dicho el bucle while preguntará al final de cada ejecución si la condición se sigue cumpliendo o no y ejecutará de nuevo el código. Este es un ejemplo del flujo de datos dentro del ciclo específico.

![If you see this... something go wrong](./Flujo%20de%20atencion%20if%20y%20while.png)

La forma de declarar un while es la misma que la de un if

    while(sentencia==true){
        //bloque de código a ejecutar
    }

Ejemplo: 
>Cree un programa que imprima el conteo del 1 al 10

    let iterador=0;
    let out=0;
    while(iterador<=10){
        out=`${iterador}<br>`;
        document.write(out);
        iterador++;
    }

### Bucle do while <a name="id23"></a>

Un derivado del bucle while es el bloque dowhile, tiene una sintaxis y acomodo muy parecido al bloque while, solo que el bloque do while lo que nos va a permitir hacer es primero ejecutar el código, y luego verificar que la sentencia se cumpla. 

![If you see this... something go wrong](./Dowhile%20and%20while.png)
![If you see this... something go wrong](./While%20do%20while%202.png)

Ejemplo de tipado y uso de un dowhile

    let iterador=0;
    let out=0;
    do{
        document.write(iterador + "<br>");
        iterador++;
    }while(numero>6)

¿Por qué este código nos imprime un 0 a pesar de que la sentencia numero>6 no es cierta? por que el do while como dije, primero ejecuta el código y luego pregunta si la condición se cumple.