export abstract class Casilla <F,V>{
    private vecinos=new Map<F,Casilla<F,V>>()
    constructor(
        public valor:V
    ){}
    abstract validar(valor:V):boolean
    agregarvecino(posicion:F,elemento:Casilla<F,V>){
        this.vecinos.set(posicion,elemento)
        this.match()
    }
    abstract merge(e1:V,e2:V):V
    match():void{
        let elements:Casilla<F,V>[]=[]
        this.vecinos.forEach(vecino=>{
            if (vecino.validar(this.valor)) elements.push(vecino)
        })
        if (this.validar(this.valor)) elements.push(this)

        
        if (elements.length<3) return

        let valor=this.valor
        this.resetValor()
        elements.forEach(e=>{            
            valor=e.merge(valor,e.valor)
        })
        this.valor=valor
    }
    get Valor(){return this.valor}
    abstract resetValor():void
    recorrer(){
        console.log(`mi valor:${this.Valor}`);
        this.vecinos.forEach(vecino=>{
            console.log(`vecino:${vecino.Valor}`);
        })
    }
}

//implementacion
enum Triangulo{
    izquierda="izquierda",
    derecha="derecha",
    abajo="abajo"
}

class CassillaNumericaTriangular  extends Casilla <Triangulo,number>{
    resetValor():void {
        this.valor=0
    }
    validar(valor: number): boolean {
        return this.Valor==valor
    }
    merge(e1: number, e2: number): number {  
        this.resetValor()
        return e1+e2
    }
}

let _casilla= new CassillaNumericaTriangular(5)
let _casilla1= new CassillaNumericaTriangular(12)
let _casilla2= new CassillaNumericaTriangular(5)
let _casilla3= new CassillaNumericaTriangular(5)

_casilla.agregarvecino(Triangulo.abajo,_casilla1)
_casilla.agregarvecino(Triangulo.derecha,_casilla2)

// _casilla.recorrer()

_casilla.agregarvecino(Triangulo.izquierda,_casilla3)
// console.log('-------------------------------------');

// _casilla.recorrer()
//esperando que como tiene 3 casillas sume que el valor actual de la casilla sea 5+5+5=15