//Observador

interface ISubscirber <T>{
    update(context:T):void
}

class Publisher <T>{
    private subscribers:ISubscirber<T>[]=[]
    subscribe(s:ISubscirber<T>){
        this.subscribers.push(s)
    }
    unsubscribe(s:ISubscirber<T>){
        this.subscribers=this.subscribers.filter((subscriber)=>{
                subscriber!==s
            }
        )
    }
    notify(valor:T){
        for (const s of this.subscribers){
            s.update(valor)
        }
    }

}



//Estructura
abstract class Ficha <T> {
    constructor(private value:T) {}
    get Value(){return this.value;}
}

class Casilla <T> extends Publisher <T>{
    private vecinos:Casilla<T>[]=[]
    constructor(
        private ficha:Ficha<T>
    ){
        super()
    }
    addvecino(c:Casilla<T>){
        this.vecinos.push(c)
        this.notify(c.Ficha.Value)
    }
    deleteVecino(c:Casilla<T>){
        this.vecinos=this.vecinos.filter((vecino)=>
        vecino!=c)
    }
    get Ficha(){return this.ficha}
}

abstract class Restriccion <T> implements ISubscirber<T>{
    private casillas:Casilla<T>[]=[]
    constructor(
        private restriccion:string
    ) {}
    addCasilla(c:Casilla<T>){
        this.casillas.push(c)
    }
    abstract update(valor :T): boolean 
    get Restriccion(){return this.restriccion}
}

class Juego <T>{
    constructor(
        private restricciones:Restriccion<T>[],
        private casillas:Casilla<T>[], 
    ){}
    addFichaToGame(ficha:Ficha<T>){
        if (this.casillas.length==0) return
        this.casillas[0].addvecino(new Casilla(ficha))
    }
    addAllRestriccionToCasillas(){
        for (const restriccion of this.restricciones){
            for (const casilla of this.casillas ){
                casilla.subscribe(restriccion);
            }
        }        
    }
    allCasillas(){
        for (const casilla of this.casillas){
            console.log(casilla);
        }
    }
}

//implementacion

class FichaNumerica extends Ficha<number>{}

class CasillaHexagonalNumerica extends Casilla<number>{}

class RestriccionNumericaPar extends Restriccion <number>{
    update(valor: number): boolean {
        if (valor%2==0) {
            console.log(`Se agrego la ficha exitosamente`)
            console.log("\x1b[33m%s\x1b[0m",`El valor fue ${valor}`)
            return true
        }
        console.log("\x1b[31m%s\x1b[0m", `Perdiste agregaste un valor impar al juego...`);
        console.log("\x1b[31m%s\x1b[0m",`El valor fue ${valor}`)
        return false
    }
}

class JuegosNumerosPares extends Juego <number>{}
let restriccion = new RestriccionNumericaPar("Restriccion que sea par")
let casilla= new CasillaHexagonalNumerica(
    new FichaNumerica(0)
)
for (let i=0;i<=6;i++){
    if (i%2==0)
    casilla.addvecino(
        new CasillaHexagonalNumerica(
            new FichaNumerica(i))
        )
}
let casillas:CasillaHexagonalNumerica[]=[]
let restricciones:RestriccionNumericaPar[]=[]
restricciones.push(restriccion)
casillas.push(casilla)
let juego = new JuegosNumerosPares(restricciones,casillas)

juego.addAllRestriccionToCasillas();
for (let i=0;i<=6;i++){
    let value=i    
    if (i%2==0) juego.addFichaToGame(new FichaNumerica(value))
}
// Esperando
// Se agrego la ficha exitosamente
// El valor fue 0
// Se agrego la ficha exitosamente
// El valor fue 2
// Se agrego la ficha exitosamente
// El valor fue 4
// Se agrego la ficha exitosamente
// El valor fue 6
juego.addFichaToGame(new FichaNumerica(7))
