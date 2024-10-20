interface IElement{
    value:number
    accept(v:IVisitor):void
    recorrer():void
}

class Leaf implements IElement{
    constructor(
        public value:number
    ){}
    recorrer(): void {
        console.log(`Soy una ${this.constructor.name} mi valor es:${this.value}`);
    }
    accept(v: IVisitor): void {
        v.visitLeaf(this)
    }
    
}

class Composite implements IElement{
    
    constructor(
        public value:number
    ){}

    private vecinos:IElement[]=[]

    addvecino(e:IElement){
        this.vecinos.push(e);
    }

    accept(v: IVisitor): void {
        v.visitComposite(this)
        this.vecinos.forEach(vecino=>vecino.accept(v))
    }

    recorrer():void{
        console.log(`Soy una ${this.constructor.name} mi valor es:${this.value}`);
        this.vecinos.forEach(v=>v.recorrer())
    }
}

interface IVisitor{
    visitLeaf(leaf:Leaf):void
    visitComposite(composite:Composite):void
}

class ComponentVisitor implements IVisitor{
    elementsVicited:IElement[]=[]
    visitLeaf(leaf: Leaf): void {
        this.elementsVicited.push(leaf)
    }
    visitComposite(composite: Composite): void {
        this.elementsVicited.push(composite)
    }
}

//Implementacion 

function CreateTree(base:Composite):Composite{
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
base=CreateTree(base)

base.recorrer()
let visitor= new ComponentVisitor()
base.accept(visitor)

console.log(visitor.elementsVicited);
