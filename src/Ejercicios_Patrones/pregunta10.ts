import { Optional } from "../helpers/Optional"

// Ejercicio 10
// Elaborar un iterador que permita recorrer un vector tanto en sentido ascendente como en sentido descendente.
// Es importante elaborar un diseño que permita extender la implementación a iteradores del mismo
// tipo útiles para recorrer listas ligadas u otro tipo de estructuras.
// Nota: Ejercicio de examen del curso 2005/06


interface Iterator <T>{
    hasNext():boolean
    hasBefore():boolean
    getNext():Optional<T>
    getBefore():Optional<T>
    getCurrent():T
}
//! Para mi esta mal que un List Iterator tenga dos formas de recorrerse en el mismo iterador
class ArrayListIterator <T> implements Iterator <T>{
    collection:T[]=[]
    index:number=0
    constructor(collection:T[]){
        this.collection=collection
    }
    getCurrent(): T {
        return this.collection[this.index]
    }
    hasNext(): boolean {
        return (this.index+1 <this.collection.length)
    }
    hasBefore(): boolean {
        return (this.index-1 > 0)    }
    getNext(): Optional<T> {
        if (!this.hasNext()) return new Optional()
        this.index++
        return new Optional( this.collection[this.index])
    }
    getBefore(): Optional<T> {
        if (!this.hasBefore()) return new Optional()
        this.index--        
        return new Optional( this.collection[this.index])   
    }
}

function crearArreglo ():string[]{
    let array:string[]=[]
    for (let i=0;i<=5;i++){
        array.push(`${i}`)
    }
    return(array)
}

let arrayIterator= new ArrayListIterator(crearArreglo())

while(arrayIterator.hasNext()){
    let value=arrayIterator.getCurrent()
    console.log(`current value ${value}`);  
    arrayIterator.getNext()
}
console.log(`------------------------`);

while (arrayIterator.hasBefore()){
    let value=arrayIterator.getCurrent()
    console.log(`current value ${value}`);  
    arrayIterator.getBefore()
}