import { Optional } from "../helpers/Optional";

interface Iterator <T>{
    next():Optional<T>
    hasnext():boolean
}

class ListNode<T>{
    constructor(
        public next: Optional<ListNode<T>>,
        public data:T
    ){}
}

class ListIterator <T> implements Iterator<T>{
    constructor(
        private root:Optional<ListNode<T>>
    ){}
    next(): Optional<T> {
        if (!this.hasnext()) return new Optional<T>(null)
        const next_value=this.root.getValue()
        this.root=this.root.getValue().next
        return new Optional(next_value.data)
    }
    hasnext(): boolean {
        return this.root.hasValue()
    }
}

class ListAgregate<T>{
    constructor(private rootList:ListNode<T>){}
    getListIterator(){
        return new ListIterator(new Optional(this.rootList))
    }
}
//Implementacion
let list=new ListNode<number>(
    new Optional(
        new ListNode(  
            new Optional(
                new ListNode(new Optional(),6)
            ),5)
    ),4)
export const listagregate=new ListAgregate(list)
//implementacion en ejecucion en ejemplo-ejecucion-cliente.ts :)