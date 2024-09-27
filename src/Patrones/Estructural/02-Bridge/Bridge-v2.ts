class Stack<T>{
    valores:T[]=[]
    constructor(private readonly insert:IInsertIntoStack<T>){}
    insertIntoStackFirst(value:T){
        this.insert.unshift(value,this.valores)
    }
    insertIntoStackLast(value:T){
        this.insert.push(value,this.valores)
    }
}

interface IInsertIntoStack <T>{
    unshift(value:T,array:T[]):void
    push(value:T,array:T[]):void
}

class InsertIntoStack<T> implements IInsertIntoStack<T>{
    unshift(value: T, array: T[]) {
        array.unshift(value)
    }
    push(value: T, array: T[]) {
        array.push(value)
    }
}

//Implementacion
