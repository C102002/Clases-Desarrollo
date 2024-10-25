// Iteartor

interface IElementToVisit <T>{
    accept(v:IVisitor <T>):void
}

//Estructura composite
interface Component <T> extends IElementToVisit <T>{
    value:T
    recorrer():void
}


class Leaf <T> implements Component<T>{
    constructor(public value: T){}
    accept(v: IVisitor<T>): void {
        v.visitLeaf(this)
    }
    recorrer(): void {
        console.log(`soy una hoja mi valor es: ${JSON.stringify(this.value)}`);
    }
}

class Composite <T> implements Component<T>{
    components:Component<T>[]=[]

    constructor(public value: T){}
    accept(v: IVisitor<T>): void {
        v.visitComponent(this)
        this.components.forEach(vecino=>vecino.accept(v))
    }

    recorrer(): void {
        console.log("\x1b[33m%s\x1b[0m",`soy un componente mi valor es: ${JSON.stringify(this.value)}`);
        this.components.forEach(e=>{
            e.recorrer()    
        })
    }

    addelement(e:Component<T>){this.components.push(e)}
}

//Mapper

class Mapper{
    constructor(){}
    cambiar<T,E>(element:T,f:(e:T)=>E):E{
        return f(element)
    }
}

// Visitor

interface IVisitor <T>{
    visitComponent(c:Composite<T>):void
    visitLeaf(l:Leaf<T>):void
}

abstract class ComponentVisitor <T,E> implements IVisitor <T>{
    visited:Component<T>[]=[]
    transformed:Component<E>[]=[]
    constructor(
        public mapper:Mapper
    ){}
    visitComponent(c: Composite<T>):void {
        this.visited.push(c)
        this.transformed.push(
            this.mapper.cambiar(c,this.transformComponent)
        )
    }
    visitLeaf(l: Leaf<T>): void{
        this.visited.push(l)
        this.transformed.push(
            this.mapper.cambiar(l,this.transformLeaf)
        )
    }

   abstract transformComponent(c:Composite<T>):Composite<E>

   abstract transformLeaf(c:Leaf<T>):Leaf<E>
}

class ComponentVisitorNumberString extends ComponentVisitor <number,string>{
    transformComponent(c: Composite<number>): Composite<string> {
        return new Composite(c.value.toString())
    }
    transformLeaf(c: Leaf<number>): Leaf<string> {
        return new Leaf(c.value.toString())
    }
}


//Implemnetacion

function CreateTree(base:Composite<number>):Composite<number>{
    for (let i=0;i<=4;i++){
        if (i%2==0) {
            let comopnent= new Composite(i)
            for (let j=0;j<=3;j++){
                let auxleaf= new Leaf(j*i)
                comopnent.addelement(auxleaf)
            }
            base.addelement(comopnent)
        }else{
            base.addelement(new Leaf(i))   
        }
    }
    return base
}

let base= new Composite(5)
base=CreateTree(base)
let visitor= new ComponentVisitorNumberString(new Mapper())
base.accept(visitor)

console.log(visitor.transformed);
