import { Optional } from "../../helpers/Optional";
//estructura
interface IIterator <T>{
    next():Optional<T>
    hasnext():boolean
}

class ListNode <T>{
    constructor(
        public next:Optional<ListNode<T>>,
        public value:T
    ){}
    setnext(n:Optional<ListNode<T>>){
        this.next=n
    }
}

//template method
abstract class BaseListIterator <T> implements IIterator<T>{
    constructor(
        public root:Optional<ListNode<T>>
    ){}
    hasnext(): boolean {
        return this.root.hasValue()
    }
    next():Optional<T>{
        if (!this.hasnext()) return new Optional()
        const data=this.root.getValue().value
        this.root=this.root.getValue().next
        return new Optional(data)
    }
} 

class BeginToEndListIterator <T> extends BaseListIterator<T>{}


//TODO No estoy del todo seguro que este bien que lo invierta aca, pero al ser un metodo privado y comportarse igual que el padre no lo veo mal
class EndToBeginListIterator <T> extends BaseListIterator<T>{
    private initial:Optional<ListNode<T>>= new Optional()
    private reverse(){
        let reversed:T[]=[]

        while(super.hasnext()){
            let value=super.next()
            reversed.unshift(value.getValue())
        }

        for(let i=0; i<reversed.length;i++){            
            let newList=new Optional<ListNode<T>>( new ListNode(new Optional(),reversed[i]))
            let first=this.initial
            if (first.hasValue())
            while(first.getValue().next.hasValue()){
                first=first.getValue().next                
            }
            if (i==0) this.initial=newList
            else first.getValue().next=newList
        }
        this.root=this.initial
    }
    constructor(root:Optional<ListNode<T>>){
        super(root)
        this.reverse()
    }
    next():Optional<T>{
        return super.next()
    }
}

class BeginToBeginListIterator <T> extends BaseListIterator<T>{
    private initial:Optional<ListNode<T>>= new Optional()
    constructor(root:Optional<ListNode<T>>){
        super(root)
        this.initial=root
    }
    next():Optional<T>{
        let next=super.next()
        if (next.hasValue()) return next
        if (!this.initial.hasValue()) throw new Error('Debe de tener un inicial')
        return new Optional(this.initial.getValue().value)
    }
}

class ListAgregate <T>{
    constructor(
        private rootList:ListNode<T>
    ){}
    getListIterator():IIterator<T>{
        return new EndToBeginListIterator(new Optional(this.rootList))
    }
    getBeginToEndIterator():IIterator<T>{
        return new BeginToEndListIterator(new Optional(this.rootList))
    }
    getEndToBeginIterator():IIterator<T>{
        return new EndToBeginListIterator(new Optional(this.rootList))
    }
}

//implementacion

let _list=new ListNode<number>(
    new Optional(
        new ListNode(  
            new Optional(
                new ListNode(new Optional(
                    new ListNode(
                        new Optional(),7)
                ),6)
            ),5)
    ),4)

let _listaggregate= new ListAgregate(_list)
let _begintoend=_listaggregate.getBeginToEndIterator()
let _endtobegin=_listaggregate.getEndToBeginIterator()


console.log(`Inicio del iterador de inicio a fin`);

while(_begintoend.hasnext()){
    console.log(_begintoend.next().getValue());
}
//Esperando
// 4
// 5
// 6
// 7

console.log('--------------------------------------------------');

console.log(`Inicio del iterador desde el final al inicio`);
while(_endtobegin.hasnext()){
    console.log(_endtobegin.next().getValue());
}
//Esperando
// 7
// 6
// 5
// 4

