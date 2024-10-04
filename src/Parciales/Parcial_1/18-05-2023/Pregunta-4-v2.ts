
abstract class CasillaV2 <F,V>{
    vecinos:Map<F,CasillaV2<F,V>>=new Map<F,CasillaV2<F,V>>()
    valor:V
    constructor(valor:V){
        this.valor=valor
    }
    merge(valor:V):V{
        let elementToMerge:CasillaV2<F,V>[]=[]
        this.vecinos.forEach(vecino=>{
            if(vecino.compare(valor)) elementToMerge.push(vecino)
        })
        if(this.compare(valor)) elementToMerge.push(this);        
        elementToMerge.forEach(element=>{
            element.restartValue(valor);
        })
        return this.valor
    }
    abstract compare(valor:V):boolean

    abstract restartValue(valor:V):void

    AddVecino(forma:F,casilla: CasillaV2<F,V>){
        this.vecinos.set(forma,casilla);
    }
    recorrerVecinos(){
        console.log('mi valor:',this.valor);
        console.log('vecinos');
        for (let key of this.vecinos.keys()){
            let value=this.vecinos.get(key)
            console.log(`${key},${JSON.stringify(value)}`);
            if(value) value.recorrerVecinos();
        }
    }
}

//Implementacion

enum Cuadrado{
    arriba="arriba",
    abajo="abajo",
    derecha="derecha",
    izquierda="izquierda",
}

class CasillaCuadrada extends CasillaV2<Cuadrado,number>{
    constructor(valor:number){
        super(valor);
    }    
    compare(valor: number): boolean {
        return this.valor==valor
    }
    restartValue(valor: number): void {
        this.valor=0
    }
}

function randomIntFromInterval(min:number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  
let casilla_inicial=new CasillaCuadrada(4);
let casilla1= new CasillaCuadrada(0);    
let casilla2= new CasillaCuadrada(4);    
let casilla3= new CasillaCuadrada(2);    
let casilla4= new CasillaCuadrada(3);    

casilla_inicial.AddVecino(Cuadrado.abajo,casilla1);
casilla_inicial.AddVecino(Cuadrado.arriba,casilla2);
casilla_inicial.AddVecino(Cuadrado.derecha,casilla3);
casilla_inicial.AddVecino(Cuadrado.izquierda,casilla4);

casilla1.AddVecino(Cuadrado.arriba,new CasillaCuadrada(45));

casilla_inicial.recorrerVecinos()

casilla_inicial.merge(4)

console.log('*/////////////////////////////////////////*');
//NT: Elimina las casillas con valor 4
casilla_inicial.recorrerVecinos()
