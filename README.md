# JavaScript enfocado a NodeJS 

Javascript es un lenguaje de programación interpretado que puede correr en web, es dinámico, multiparadigma y tiene un tipado débil, aquí puedes ver una imagen representativa de cómo son los tipos de tipado de los distintos lenguajes de programación... HTML y CSS no son lenguajes, lo siento. 

![If you look this... something go wrong](/tipos%20de%20tipados.png)

## Indice Capitulo 1
* [Diferencias entre JS y NodeJS](#id1)
    * [Requisitos para empezar en JS](#id2)
* [Primeros pasos en JS](#id3)
    * [Declaración de variables](#id4)
    * [Tipos de datos en las variables](#id5)
* [Operadores de asignación](#id6)
* [Operadores Aritméticos](#id7)
* [Entrada y salida de datos](#id8)
    * [Input de datos](#id9)
    * [Out de datos](#id10)

## Indice Capitulo 2


## Diferencias entre JavaScript y NodeJS <a name="id1"></a>

| JavaScript        | NodeJS      |
|-------------------|-------------|
| Scripts en web | Entorno de ejecución |
| Solo se ejecuta en navegadores | MultiparadigmaSe ejecuta fuera de los navegadores |
| Utiliza recursos del cliente | Utiliza recursos del servidor |
| Puede agregar HTML | No agrega HTML |
| Puede ejecutarse en el navegador | Necesita un motor para ejecutarse (V8) |
| Es Front End | Es Back End |
| Los marcos o módulos son TypeScript Ramda o React | Los marcos o módulos son Express y se instalan desde npm |
| Es la versión mejorada del script ECMA que usa V8 de Chrome escrito en C++  | NodeJS está escrito en C, C++ y JavaScript |
| Los errores se muestran en la ejecución | Los errores se muestran en la compilación |

### Requisitos para empez<ar en JS <a name="id2"></a>

#### Software

* Git shell https://git-scm.com/
* NodeJS instalado https://nodejs.org/en/
* Visual Studio Code https://code.visualstudio.com/
    * Obligatorias
        * Extensión code runner
        * Extensión ESLint 
        * Extensión JavaScript (ES6) code snippets
    * Opcionales
        * Extensión Prettier o Beautify
        * Extensión Relative Path
        * Extensión Bracket Pair Colorizer
        * Extensión Ident-Rainbow

#### Hardware
* Computadora con un navegador instalado independientemente del sistema operativo

#### Conocimientos 
* En este curso pueden entrar desde básicos hasta avanzados en JS

#### Ayuda
* configuración de GIT y primeros pasos: https://github.com/RodrigoFA216/Git-commands-basic 


## Primeros pasos en JS (JavaScript) <a name="id3"></a>

Todo dentro de este apartado estará dentro del archivo "primero.js"

### Declaración de variables <a name="id4"></a>

Las variables en Javascript se pueden: declarar, inicializar y modificar.
Para declarar las variables podemos usar "var" "let" y "const" a partir de EcmaScript 6 (un estándar)

#### let

Let deja la variable disponible solo para el scope en el que estemos trabajando (dentro del scope para ser más tecnicos). Por ejemplo

    for{
        let azul
        while{
            let rojo
        }
    }

la variable "azul va a estar disponible para operarse dentro del for y dentro del while pero no para lo que siga después del for. A su vez la variable "rojo" va a estar disponible para el while pero no para las operaciones dentro del for que estén fuera del while.

#### const

const como su nombre deja entrever son variables que al ser declaradas van a contener siempre durante todo el probrama el dato con el que se le inicialice, se tiene que inicializar forzosamente en el momento en el que se declara. Esta propiedad se le llama inmutabilidad. Se usa const para las variables que son constantes y no propias del lenguaje como por ejemplo el valor de pi

    const pi=3.14159265359

#### Undefined

Como había dicho las variables se pueden declarar e inicializar, si la variable se declara pero no se inicializa su contenido (es decir no se le da nada a guardar) el tipo de dato de esta variable va a ser undefined. Para ejemplificarlo mejor prueba este código:

    let numero;
    alert(numero);

#### Null

Existe otro tipo de tener una variable vacía a propósito sin hacer uso de no declarar la variable como lo es el asignarle el tipo de dato null. Esto la dejará vacía pero a diferencia del anterior ejemplo lo haremos con intención. Para ejemplificarlo mejor prueba el sieguiente código:

    let numero2= null;
    alert(numero);

#### NaN

Un ultimo tipo de dato nativo es el NaN, no es que ses especificamente un tipo de dato pero si se genera como error o mensaje en el prompt cuando queremos operar de manera normal un string con un numero por ejemplo. Para ejemplificar mejor prueba el siguiente código:

    let numeor3=2;
    let string2="Doge";
    alert(numero3*string2);

### Tipos de datos en las variables <a name="id5"></a>

| Tipo de dato      | Ejemplo     |
|-------------------|-------------|
| int (entero) | var entero=2 |
| float (decimal)| var decimal=2.0|
|string (texto) | var texto="Alfred" |
| booleano (true or false) | var bool=false |
| undefined | var numero |
| null | var numero2=null |

## Entrada y salida de datos <a name="id6"></a>

La inserción de los datos en JS se puede hacer de varias formas, desde el HTML y desde el JS.

### Input de datos <a name="id7"></a>

Desde JS se puede hacer con una BuiltIn Function como lo es prompt(), ahora, prompt regresa al scope un valor dependiendo de lo que se ingrese. Es decir, se tiene que declarar una variable con =prompt().

Prompt puede tener un argumento de texto que sea de la siguiente forma

    prompt("< texto >")

Lo que se verá en tu sitio o docuemto será una ventana emergente que tendrá el texto ingresado, en este caso sería <hr><h3>La página X dice</h3><code><span>< texto > <br><input type="Text"></input></span></code><br><br><button>Aceptar</button> <button>Cancelar</button><hr>

Por ejemplo, para obtener de forma exitosa la inserción del usuario cuando le estamos podiendo su nombre tedríamos que hacer el siguiente código:

    let variable=prompt("Ingresa tu nombre");

dentro de la etiqueta form en una etiqueta input del tipo especificado, por ejemplo desde el elemento:

<code>
    <form>
        <input type="number">
        <button type="submit">Submit</button>
    </form>
</code>
<br>
Código:

    <form>
        <input type="number">
        <button type="submit">Submit</button>
    </form>

### Out de datos <a name="id8"></a>

Para mostrar la salida de los datos introducidos en el paso anterior con JS en el apartado de la función prompt() ya guadados en una variable lo que podríamos hacer es ocupar builtIn Functions, como lo son: document.whrite() y alert().

Alert va a desplegar una ventana flotante al igual que la ventana de prompt() para mostrar los datos que sean necesarios. la función document.write va a generar html específico par apoder escribir el texto que se encuentre en la variable que le demos como argumento, podemos concatenar variables con texto de la siguiente forma:

    let variable=prompt("Introduce un texto");
    alert("El texto introducido es: " + variable);

La BuiltIn Function document.write() funciona similarmente al alert, sin embargo document.write() lo imprimer dentro del documento en el fondo de todo de no especificarse dónde va a ser introducido. Podemos jugar con esto si visualizamos el [Documento](/index.html) que está dentro de este repositorio

    let variable=prompt("Introduce un texto");
    document.write("el texto introducido es: " + variable);



## Operadores de asignación <a name="id9"></a>

Un operador asignación asigna un valor al operando de la izquierda basado en el valor del operando de la derecha... osea se pasa lo de la derecha a la izquierda dependiendo del operador

| Operador | Abreviaciones | Significado |
|---|---|---|
| Asignación | x = y | x = y |
| Asignación de Adición | x += y | x = x + y |
| Asignación de Sustracción| x -= y | x = x - y |
| Asignación de Multiplicación | x *= y | x = x * y |
| Asignación de División| x /= y | x = x / y |
| Asignación de Resto/Módulo | x %= y | x = x % y |
| Asignación de Exponenciación| x **= y | x = x ** y |
| Asignación de Desplazamiento a la izquierda| x <<= y | x = x << y |
| Asignación de Desplazamiento a la derecha| x >>= y | x = x >> y |
| Asignación AND | x &= y | x = x & y |
| Asignación XOR | x ^= y | x = x ^ y |
| Asignación OR | x |= y | x = x | y |


## Operadores aritméticos <a name="id10"></a>

Los operadores aritméticos toman valores numéricos como sus operandos y retornan un valor numérico único.

Tomando en cuenta que:

    let x=10;
    let y=5;
    let r=null;

| Operador | Ejemplo | Ejemplo variable |
|----------|---------|------------------|
| Adición       | x + y | r=x+y; |
| Substracción  | x-y | r=x-y |
| División      | x/y | r=x/y |
| Multiplicación| x*y | r=x*y |
| Incremento    | x++ | r=x++ |
| Decremento    | x-- | r=x-- |
| Exponenciación| x**y | r=x**y |
| Resto         | x%y | r=x%y |
| Negación unaria| -x | r=-x |
| Adición unaria | +x | r=+x |

## Concatencaión <a name="id11"></a>

Como tal la concatenación es unir dos strings. No hay más y no hay menos. Por ejemplo:

    let saludo="Hola Juanjo";
    let pregunta="¿cómo estás?";
    let frase=saludo+pregunta;
    docuemnt.write(frase);

Ahora, pongamos el ejemplo de que quiero concatenar numeros, no sumarlos. 

    let numero1=5;
    let numero2=6;
    let frase=""+numero1+numero2;

Sin embargo JS también teien un BuiltIn Method que es concat() sin embargo necesitamos un string con un numero, con lo que haríamos

    let numero1="58";
    let numero2=6;
    let frase=numero1.concat(numero2);

Existen otras formas de concatenar como lo son las backticks:

    let nombre="Rodrigo Flores";
    let frase=`soy ${nombre} y estoy caminando`

(los backticks se ponen con la tecla de AltGr y la tecla de cierre de } en la distribución de teclado latinoamericano, osea con el @ en la Q muchasveces al ser un acento como ^ necesita de la tecla espaciadora)

con el uso de backticks también podemos incluir comillas simples y comillas dobles en nuestros strings sin hacer cosas raras como usar ascii con C/C++ por ejemplo:

    let nombre="Rodrigo Flores";
    let frase=`soy ' "${nombre}" ' y estoy caminando`

Por lo que los BackTicks nos dan una mayor soltura en el tipado e inserción de HTML y CSS con la utilización de métodos instancias y funciones de JS

## Operadores de comparación <a name="id12"></a>

Los operadores de comparación son operadores específicos que devuelven un valor booleano según los parametros de inserción, es decir que va a comparar dos datos y va a devolver un valor true o valor false en función de los parametros que le ingresamos. 

Tomando en cuenta que:

    let x=10;
    let y=5;

| Operador | Ejemplo | Valor |
|----------|---------|-------|
| Igualdad      | x == y | false |
| Desigualdad   | x != y | true |
| Identidad     | x === y | false |
| DesIdentidad  | x !== y | true |
| Mayor que     | x > y | true |
| Mayor o igual que| x >= y | true |
| Menor que     | x < y | false |
| Menor o igual que| x <= y | false |

La diferencia de identidad e Igualdad en JS es la siguiente:

El operador de Igualdad verifica que los datos ingresados sean iguales independientemente de sus tipos de datos:

    let numero=23;
    let texto="23";
    document.write(texto==numero);
>Resultado: true

El operador Identidad compara los datos no solo por su contenido si no por su tipo de dato también:

    let numero=23;
    let texto="23";
    document.write(texto===numero);
>Resultado: false

Sucede lo mismo con !== y !=

El operador Desigualdad compara dos valores sin importar el tipo de dato:

    let numero=23;
    let texto="23";
    document.write(texto!=numero);
>Resultado: false
El tipo de dato es distinto pero le estoy preguntando si la variable texto es diferente a la variable numero. Como no le importa el tipo de dato me dice que es false por que si contienen  lo mismo

El operador DesIdentidad compara dos valores priorizando el tipo de dato:

    let numero=23;
    let texto="23";
    document.write(texto!==numero);
>Resultado: true
