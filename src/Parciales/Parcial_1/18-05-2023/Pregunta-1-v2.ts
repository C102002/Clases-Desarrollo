import {Optional} from "../../../helpers/Optional"

interface Function <T>{
    f(e1:T,e2:T):T
}

interface Predicado <T>{
    predicado(e:T):boolean
}

class Celda <T>{
    valor: T;
    reducir(f:(e1:T,e2:T)=>T, predicado:(e:T)=>boolean):Optional<T>{
        if (predicado(this.valor)){
            return new Optional<T>(this.valor);
        }
        return new Optional<T>(null);
    }

    recorrer():void{
        console.log('Soy una celda (valor):',this.valor);
    }

    constructor(valor:T) {
        this.valor=valor;
    }
}

class Caja <T> extends Celda <T>{
    elementos: Celda<T>[]=[];
    reducir(f:(e1:T,e2:T)=>T, predicado:(e:T)=>boolean):Optional<T>{

        let filteredElements=this.elementos.filter((element)=>predicado(element.valor))

        let value:Optional<T>=new Optional<T>(null)
        //Con foreach
        filteredElements.forEach((element,index,array)=>{
            if(index==array.length-1) 
                return
            if(index!==0) 
                value= new Optional(f(value.getValue(),array[index+1].valor))
            else
                value= new Optional(f(array[index].valor,array[index+1].valor))            
        })

        if(predicado(this.valor)){
            if(value.hasValue())
                return new Optional(f(this.valor,value.getValue()))
            else{
                if(predicado(filteredElements[0].valor)) return new Optional(f(this.valor,filteredElements[0].valor))
            }
        } return value
    }

    recorrer():void{
        console.log('Soy una caja (valor):',this.valor);
        if (this.elementos.length!==0){
            this.elementos.forEach((elemento)=>{
                elemento.recorrer();
            })
        }
    }

    add(celda:Celda<T>):void{
        this.elementos.push(celda);
    }
    constructor(valor: T) {
        super(valor)
    }
}

//Implementacion 

class Suma implements Function<number>{
    f(e1: number, e2: number): number {
        return e1+e2
    }
}

class Par implements Predicado<number>{
    predicado(e: number): boolean {
        return (e%2==0)
    }
}

let caja = new Caja<number>(2)
for (let i=0; i<5;i++){
    let celda=new Celda<number>(i) 
    caja.add(celda)
}

let suma= new Suma()
let par= new Par()
caja.recorrer()

let reducir=caja.reducir(suma.f,par.predicado)
if(reducir.hasValue()) console.log(`Valor reducido a: ${reducir.getValue()}`)
else console.log(`Sin valor reducido`)
