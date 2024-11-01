import { Optional } from "../helpers/Optional"

// Ejercicio 10
// Elaborar un iterador que permita recorrer un vector tanto en sentido ascendente como en sentido descendente.
// Es importante elaborar un diseño que permita extender la implementación a iteradores del mismo
// tipo útiles para recorrer listas ligadas u otro tipo de estructuras.
// Nota: Ejercicio de examen del curso 2005/06


interface Iterator <T>{
    hasNext():boolean
    getNext():Optional<T>
    getCurrent():T
}
//! Para mi es mejor asi
class ArrayListAscendedIterator <T> implements Iterator <T>{
    collection:T[]=[]
    index:number=0
    constructor(collection:T[]){
        this.collection=collection
    }
    hasNext(): boolean {
        return (this.index+1<=this.collection.length)
    }
    getNext(): Optional<T> {
        if (!this.hasNext()) return new Optional()
        this.index++
        return new Optional(this.collection[this.index])
    }
    getCurrent(): T {
        return this.collection[this.index]
    }
}

class ArrayListDescendIterator <T> implements Iterator <T>{
    collection:T[]=[]
    index:number=0
    constructor(collection:T[]){
        this.collection=collection
        this.index=collection.length-1
    }
    hasNext(): boolean {             
        return (this.index>=0)    
    }
    getNext(): Optional<T> {
        if (!this.hasNext()) return new Optional()
        this.index--
        return new Optional(this.collection[this.index])
    }
    getCurrent(): T {
        return this.collection[this.index]
    }
}

function crearArreglo ():string[]{
    let array:string[]=[]
    for (let i=0;i<=5;i++){
        array.push(`${i}`)
    }
    return(array)
}

console.log(crearArreglo());

let arrayIterator= new ArrayListAscendedIterator(crearArreglo())

while(arrayIterator.hasNext()){
    let value=arrayIterator.getCurrent()
    console.log(`current value ${value}`);  
    arrayIterator.getNext()
}

let otherarrayIterator= new ArrayListDescendIterator(crearArreglo())

while(otherarrayIterator.hasNext()){
    let value=otherarrayIterator.getCurrent()
    console.log(`current value ${value}`);  
    otherarrayIterator.getNext()
}