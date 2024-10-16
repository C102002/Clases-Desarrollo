import { Optional } from '../../../Practica Orientado a aspectos/Optional';
class Box <T>{
    constructor(
        private value:Optional<T>
    ){}
    get Value(){return this.value}
}

interface BoxArranger <T>{
    addLast(boxes:Box<T>[],b:Box<T>):Box<T>[]
    addBegin(boxes:Box<T>[],b:Box<T>):Box<T>[]
}

class BoxContainer <T>{
    private boxes:Box<T>[]=[]
    
    constructor(private boxArragnger:BoxArranger<T>){}

    addBoxToLast(b:Box<T>){
        this.boxes=this.boxArragnger.addLast(this.boxes,b)
    }
    addBoxToBegin(b:Box<T>){
        this.boxes=this.boxArragnger.addBegin(this.boxes,b)
    }
    recorrer():void{
        this.boxes.forEach((b)=>console.log(b))
    }
}

class ConcreteBoxArragner <T> implements BoxArranger<T>{
    addLast(boxes: Box<T>[], b: Box<T>): Box<T>[] {
        boxes.push(b)
        return boxes
    }
    addBegin(boxes: Box<T>[], b: Box<T>): Box<T>[] {
        boxes.unshift(b)
        return boxes
    }
}

//implementacion
let box1= new Box<number>(new Optional(10))
let box2= new Box<number>(new Optional(20))
let boxContainer= new BoxContainer(new ConcreteBoxArragner())

for (let i=0;i<=4;i++){
    boxContainer.addBoxToBegin(new Box<number>(new Optional(i)))
}
boxContainer.addBoxToBegin(box1)
//Add box 10 to begin
boxContainer.addBoxToLast(box2)
//Add box 20 to last
boxContainer.recorrer()
