/* Arrays
Lista de datos en donde se generan referencias para acceder a los datos guardados dentro de la cajita
0 Diego
1 Karen 
3 Etc 
Push agregar un método al final del array
pop borra el último elemento
unshift agrega un elemento al inicio del array
shift Borra el primer elemento
splice agrega un elemento en alguna parte del array
Arrays estáticos
arrays que se declaran con tamaño específico
array nums=[2,4,8];
Arrays dinámicos
arrays que se declaran sin tamaño específico
array nums=[2,4,8,,,];
JS siempre asigna el doble del espacio por si el array crece, es decir en un array de 4 slots reserva 8 espacios en memoria
Pueden ser mutables, es decir se puede pasar de un array estático a uno dinámico
*/

const array = ["Diego", "Karen", "Oscar"];
array.push("Ana");
console.log(array);

class MyArray {
    constructor() {
        this.length = 0; //acá se va a guardar el largo del array
        this.data = {} //acá se va a guardar el dato
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    myDelete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    unshift(item) {
        if (!item) {
            return this.length
        }
        if (this.length !== 0) {
            for (let i = this.length - 1; i >= 0; i--) {
                this.data[i + 1] = this.data[i];
            }
        }
        this.data[0] = item;
        this.length++;
        return this.length
    }
    shift() {
        if (this.length === 0)
            return undefined;
        const item = this.data[0];
        for (let i = 0; this.length >= i; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.length--;
        return item;
    }
}
const myArray = new MyArray;
//Queda pendiente -agregar al inicio -eliminar al inicio
myArray.push("Diego");
myArray.push("Karen");
myArray.push("Oscar");
console.log(myArray);
//myArray.pop();
myArray.myDelete(1);
console.log(myArray);

//Hash table
/* */
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    getAllKeys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keys.push(this.data[i][j][0]);
                }
            }
        }
        return keys;
    }

    remove(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    const deletedValue = this.data[address][i];
                    this.data[address].splice(i, 1);
                    return deletedValue;
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(50);
//pendiente -delete -regresar los keys
myHashTable.set("Rodrigo", 1999);
console.log(myHashTable);
console.log(myHashTable.get("Rodrigo"));

//listas simples con apuntadores