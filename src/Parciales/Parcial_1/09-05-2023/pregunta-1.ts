//estructura
class Celda <T>{
    constructor(
        private valor:T
    ){}
    reducir(f:(e1:T,e2:T)=>T):T{
        return this.valor
    }
    get Valor(){return this.valor}
}

class Caja<T> extends Celda<T>{
    private elementos: Celda<T>[]=[]
    constructor(valor:T,elementos:Celda<T>[]){
        if (elementos.length<=1) throw new Error('No cumple con tener al menos 2 vecinos')
            super(valor)
        this.elementos=elementos
    }
    addVecino(celda:Celda<T>){
        this.elementos.push(celda)
    }
    reducir(f: (e1: T, e2: T) => T): T {
        let valor=super.reducir(f)        
        this.elementos.forEach(elemento=>{
            valor=f(valor,elemento.reducir(f))
        })
        return valor
    }
    recorrer(){
        console.log(`soy una caja mi valor es:${this.Valor}`);
        for(const elemento of this.elementos){
            console.log(`elemento: ${elemento.Valor}`);
        }
    }
}

//implementacion
let caja= new Caja<number>(0,[new Celda<number>(0),new Celda<number>(1)])
for (let i=0;i<=10;i++){
    caja.addVecino(new Celda(i))
}

function suma (e:number,e2:number):number{
    return e+e2
}

caja.recorrer();
let valor=caja.reducir(suma);
//Esperando 56 porque deberia de sumar TODOS los valores entonces:
// valor=0+1+0 de los elementos originales de la caja que es su propio valor
//valor =0+1+2+3+4+5+6+7+8+9+10=55
//valor total=55+1=56