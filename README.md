# JavaScript enfocado a NodeJS 

Javascript es un lenguaje de programación interpretado que puede correr en web, es dinámico, multiparadigma y tiene un tipado débil, aquí puedes ver una imagen representativa de cómo son los tipos de tipado de los distintos lenguajes de programación... HTML y CSS no son lenguajes, lo siento. 

![If you look this... something go wrong](/tipos%20de%20tipados.png)

## Indice
* [Diferencias entre JS y NodeJS](#id1)
    * [Requisitos para empezar en JS]()
* [Primeros pasos en JS]()
    * [Declaración de variables](#)
    * [Tipos de datos de variables]()


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

### Requisitos para empezar en JS <a name="id2"></a>

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



