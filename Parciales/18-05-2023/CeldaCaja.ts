import { Optional } from "../../Practica Orientado a aspectos/Optional";

interface Function <T>{
    f(e1:T,e2:T):T
}

class Celda <T>{
    valor: T;
    reducir(f:(e1:T,e2:T)=>T, predicado:(e:T)=>boolean):T{
        if (predicado(this.valor)){
            return <T>(this.valor);
        }
        // this.reducir(f,predicado)
        return<T>(0);
    }

    recorrer():void{
        console.log('Soy una celda (valor):',this.valor);
    }

    constructor(number:T) {
        this.valor=number;
    }
}

class Caja <T> extends Celda <T>{
    valor: T;
    elementos: Celda<T>[]=[];
    reducir(f:(e1:T,e2:T)=>T, predicado:(e:T)=>boolean):T{
        if (this.elementos.length>=2){
            let first=this.elementos[0].reducir(f,predicado);
            let second=this.elementos[1].reducir(f,predicado);
            let result=f(first,second);
            
            if (this.elementos){
                this.elementos.forEach((elemento)=>
                    {
                        let son=elemento.reducir(f,predicado);
                        result=f(result,son);                        
                    }
                )
            }
            return result
        }
    }

    //
    recorrer():void{
        console.log('Soy una caja (valor):',this.valor);
        if (this.elementos){
            this.elementos.forEach((elemento)=>{
                elemento.recorrer();
            })
        }
    }

    add(celda:Celda<T>):void{
        this.elementos.push(celda);
    }
    constructor(number: T) {
        super(number)
    }
}

let caja = new Caja<number>(12)
for (let i=0; i<11;i++){
    let celda=new Celda<number>(i) 
    caja.add(celda)
}


function f (a:number, b:number){
    console.log('sumo:',a,'+',b);
    return(a+b)
}
function predicado (a:number){    
    if (a%2==0) {
        // console.log('hola');
        return (true)}
    return (false)
}
let prueba=caja.reducir(f,predicado)
console.log('tamano:',caja.elementos.length);
caja.recorrer()
console.log('final:'+prueba);
