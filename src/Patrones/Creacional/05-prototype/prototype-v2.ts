import { Optional } from '../../../helpers/Optional';
//NT: Los metodos get X y getY los agregue yo para este ejemplo para hacer la copia,
//pero creo que es mejor con la clase abstracta para que todos sean subtipos del padre y tengas los elementos por herencia :)

abstract class Prototype{
    constructor(
        private color:string,
        private x:number,
        private y:number
    ){}
    getColor():string{return this.color}
    getX():number{return this.x}
    getY():number{return this.y}
    abstract clone():Prototype   
    changecolor(color:string){
        this.color=color
    }
    changeX(x:number){
        this.x=x
    }
    changeY(y:number){
        this.y=y
    }
    changeprevious(p:Prototype){
        this.changeX(p.getX())
        this.changeY(p.getY())
        this.changecolor(p.getColor())
    }
}

class PrototypeRegistry{
    private items=new Map<string,Prototype>()
    constructor(){}
    addItem(id:string,p:Prototype){
        this.items.set(id,p)
    }
    getElementById(id:string):Optional<Prototype>{
        if (this.items.has(id)) return new Optional(this.items.get(id))
            return new Optional<Prototype>(null)
    }
    getByColor(color:string):Optional<Prototype>{
        let value= new Optional<Prototype>(null)
        this.items.forEach(item=>{
            if (item.getColor()==color) value=new Optional(item)
        })
    return value
    }
}

class Button extends Prototype{
    clone(): Prototype {
        return new Button(this.getX(),this.getY(),this.getColor())
    }
    constructor(x:number,y:number,color:string){
        super(color,x,y)
    }
}

//implementacion
let register= new PrototypeRegistry()
let buton= new Button(0,5,'azul')

let proto=buton.clone()
register.addItem('UUID1',proto)

buton.changecolor('rojo')
buton.changeX(300)
buton.changeY(450)

let proto2=buton.clone()
register.addItem('UUID2',proto2)

buton.changecolor('verde')
buton.changeX(45)
buton.changeY(10)

console.log(`Antes:${JSON.stringify(buton)}`);
console.log(register);
//esperando 
// 'UUID1' => Button { color: 'azul', x: 0, y: 5 },
// 'UUID2' => Button { color: 'rojo', x: 300, y: 450 }

let state=register.getByColor("rojo")

if(state.hasValue()) buton.changeprevious(state.getValue())
//recupero el valor del boton
console.log(`Despues:${JSON.stringify(buton)}`);

