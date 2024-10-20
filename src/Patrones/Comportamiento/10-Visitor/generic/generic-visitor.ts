interface IElement <T>{
    value:T
    accept(v:IVisitor<T>):void
    recorrer():void
}

class Leaf <T> implements IElement<T>{
    constructor(
        public value:T
    ){}
    recorrer(): void {
        console.log(`Soy una ${this.constructor.name} mi valor es:${this.value}`);
    }
    accept(v: IVisitor<T>): void {
        v.visitLeaf(this)
    }
    
}

class Composite <T>implements IElement<T>{
    
    constructor(
        public value:T
    ){}

    private vecinos:IElement<T>[]=[]

    addvecino(e:IElement<T>){
        this.vecinos.push(e);
    }

    accept(v: IVisitor<T>): void {
        v.visitComposite(this)
        this.vecinos.forEach(vecino=>vecino.accept(v))
    }

    recorrer():void{
        console.log(`Soy una ${this.constructor.name} mi valor es:${this.value}`);
        this.vecinos.forEach(v=>v.recorrer())
    }
}

interface IVisitor <T>{
    visitLeaf(leaf:Leaf<T>):void
    visitComposite(composite:Composite<T>):void
}

class ComponentVisitor <T> implements IVisitor <T>{
    elementsVicited:IElement<T>[]=[]
    visitLeaf(leaf: Leaf<T>): void {
        this.elementsVicited.push(leaf)
    }
    visitComposite(composite: Composite<T>): void {
        this.elementsVicited.push(composite)
    }
}

//Implementacion 

function CreateNumberGraph(base:Composite<number>):Composite<number>{
    for (let i=0;i<=4;i++){
        if (i%2==0) {
            let comopnent= new Composite(i)
            for (let j=0;j<=3;j++){
                let auxleaf= new Leaf(j*i)
                comopnent.addvecino(auxleaf)
            }
            base.addvecino(comopnent)
        }else{
            base.addvecino(new Leaf(i))   
        }
    }
    return base
}

let base=new Composite(42)
base=CreateNumberGraph(base)

base.recorrer()
let visitor= new ComponentVisitor()
base.accept(visitor)

console.log(visitor.elementsVicited);
