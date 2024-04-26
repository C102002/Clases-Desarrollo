import { Optional } from "../../Practica Orientado a aspectos/Optional";

interface Function <T>{
    f(e1:T,e2:T):T
}

// class Celda <T>{
//     valor: T;
//     reducir(f:(e1:T,e2:T)=>T, predicado:(e:T)=>boolean):T{
//         if (predicado(this.valor)){
//             return <T>(this.valor);
//         }
//         return
//     }

//     recorrer():void{
//         console.log('Soy una celda (valor):',this.valor);
//     }

//     constructor(number:T) {
//         this.valor=number;
//     }
// }

// class Caja <T> extends Celda <T>{
//     valor: T;
//     elementos: Celda<T>[]=[];
//     reducir(f:(e1:T,e2:T)=>T, predicado:(e:T)=>boolean):T{

//             let first=this.elementos[0].reducir(f,predicado);
//             let second=this.elementos[1].reducir(f,predicado);
//             let result=f(first,second);
            
//             if (this.elementos.length > 2){
//                 for (let i=2;i<this.elementos.length;i++){
//                     let son=this.elementos[i].reducir(f,predicado)
//                     result=f(son,result)
//                 }
//             }
//             let me=super.reducir(f,predicado)
//             result=f(result,me)
//             return result
//     }

//     //
//     recorrer():void{
//         console.log('Soy una caja (valor):',this.valor);
//         if (this.elementos){
//             this.elementos.forEach((elemento)=>{
//                 elemento.recorrer();
//             })
//         }
//     }

//     add(celda:Celda<T>):void{
//         this.elementos.push(celda);
//     }
//     constructor(number: T) {
//         super(number)
//     }
// }

class Celda <T>{
    valor: T;
    reducir(f:(e1:T,e2:T)=>T, predicado:(e:T)=>boolean):Optional<T>{
        if (predicado(this.valor)){
            return new Optional<T>(this.valor);
        }
        return new Optional<T>(undefined);
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
    reducir(f:(e1:T,e2:T)=>T, predicado:(e:T)=>boolean):Optional<T>{

            let first=this.elementos[0].reducir(f,predicado);
            let second=this.elementos[1].reducir(f,predicado);
            let result : T
            console.log(first.hasValue());
            console.log(second.hasValue());

            
            if (first.hasValue() && second.hasValue() ){
                // console.log('Llego');
                result=f(first.getValue(),second.getValue())
            }else{
                if (first.hasValue()) result=first.getValue()
                else if (second.hasValue()) result=second.getValue()
            }
            
            if (this.elementos.length > 2){
                for (let i=2;i<this.elementos.length;i++){
                    let son=this.elementos[i].reducir(f,predicado)
                    if (son.hasValue())
                    {
                        result=f(son.getValue(),result)
                    }
                }
            }
            let me=super.reducir(f,predicado)
            
            if (me.hasValue()){
                result=f(result,me.getValue())
            }
            return new Optional<T> (result)
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
        return (true)}
    return (false)
    // return true
}
let prueba=caja.reducir(f,predicado)
console.log('tamano:',caja.elementos.length);
caja.recorrer()
console.log('final:'+prueba.getValue());
