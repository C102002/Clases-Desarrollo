import { Optional } from '../../../helpers/Optional';
//NT: Los metodos get X y getY los agregue yo para este ejemplo para hacer la copia,
//pero creo que es mejor con la clase abstracta para que todos sean subtipos del padre y tengas los elementos por herencia :)

interface Prototype{
    getColor():string
    getX():number
    getY():number
    clone():Prototype
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
        this.items.forEach(item=>{
            if (item.getColor()==color) return new Optional(item)
        })
    return new Optional<Prototype>(null)
    }
}

class Button implements Prototype{
    constructor(
    private x:number,
    private y:number,
    private color:string,
    ){}
    getX(): number {
        return this.x
    }
    getY(): number {
        return this.y
    }
    getColor(): string {
        return this.color
    }
    clone(): Prototype {
        return new Button(this.x,this.y,this.color)
    }
    button(p:Prototype){
        this.color=p.getColor()
        this.x=p.getX()
        this.y=p.getY()
    }
    changecolor(color:string){
        this.color=color
    }
}

//implementacion
let register= new PrototypeRegistry()
let buton= new Button(0,5,'azul')

let proto=buton.clone()
register.addItem('UUID1',proto)

console.log(proto);
buton.changecolor('rojo')
let proto2=buton.clone()
register.addItem('UUID2',proto2)
buton.changecolor('verde')

console.log(register);

let state=register.getByColor("rojo")
if(state.hasValue())
    buton.button(state.getValue())