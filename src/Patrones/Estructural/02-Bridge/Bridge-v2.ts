class StackHandler<T>{
    valores:T[]=[]
    constructor(private readonly insert:IInsertIntoStack<T>){}
    insertIntoStackFirst(value:T):T[]{
        return this.insert.unshift(value,this.valores)
    }
    insertIntoStackLast(value:T):T[]{
        return this.insert.push(value,this.valores)
    }
}

interface IInsertIntoStack <T>{
    unshift(value:T,array:T[]):T[]
    push(value:T,array:T[]):T[]
}

class InsertIntoStack<T> implements IInsertIntoStack<T>{
    unshift(value: T, array: T[]):T[] {
        array.unshift(value)
        return array
    }
    push(value: T, array: T[]):T[] {
        array.push(value)
        return array
    }
}

//Implementacion
let insertIntoStack=new InsertIntoStack<number>()
let stack= new StackHandler<number>(insertIntoStack)
let numbers:number[]=[1,2,3,4]
numbers=insertIntoStack.push(5,numbers)
//Esperado arreglo de [1,2,3,4,5]
console.log(numbers);

//Esperado arreglo de [0,1,2,3,4,5]
numbers=insertIntoStack.unshift(0,numbers)
console.log(numbers);

