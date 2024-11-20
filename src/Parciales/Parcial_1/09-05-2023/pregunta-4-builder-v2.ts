import { Casilla } from "./pregunta-4"

//implementacion

enum Cuadrado{
    izquierda="izquierda",
    derecha="derecha",
    abajo="abajo",
    arriba='arriba'
}

class CasillaCuadradoNumerico extends Casilla<Cuadrado,number>{
    validar(valor: number): boolean {
        return this.Valor==valor
    }
    merge(e1: number, e2: number): number {
        this.resetValor()
        return e1+e2
    }
    resetValor(): void {
        this.valor=0;
    }
}

//Builder

interface IBuilder <T>{
    board:T
    build():T
    clear():void
}

//! Board usandolo como una clase concreta y no abstracta para favorecer el codigo bien
class Board <F,V>{
    elements:Map<string,Casilla<F,V>>=new Map<string,Casilla<F,V>>()
    addCasilla(id:string,valor:Casilla<F,V>):void{
        this.elements.set(id,valor)
    }
    addCasillaToCasilla(id1:string,id2:string,position:F):void{
        let element1=this.elements.get(id1)
        let element2=this.elements.get(id2)
        if (!element1 || !element2)
            return
        element1.agregarvecino(position,element2)
    }
    recorrer():void{
        this.elements.forEach(e=>{
            console.log(e)
        })
    }
}

interface BoardBuilder <F,V> extends IBuilder<Board<F,V>>{
    board: Board<F,V>
    createCasilla(id:string,valor:V):BoardBuilder<F,V>
    addCasilla(id1:string,id2:string,position:F):BoardBuilder<F,V>
    build(): Board<F, V> 
    clear():void
}

class BoardCuadradoNumericoBuilder implements BoardBuilder <Cuadrado,number>{
    board: Board<Cuadrado, number>

    constructor(){
        this.board=new Board<Cuadrado,number>()
    }

    clear(): void {
        this.board=new Board<Cuadrado,number>()
    }

    createCasilla(id: string, valor: number): BoardBuilder <Cuadrado, number> {
        this.board.addCasilla(id,new CasillaCuadradoNumerico(valor))
        return this
    }
    addCasilla(id1: string, id2: string, position: Cuadrado): BoardBuilder<Cuadrado, number> {
        this.board.addCasillaToCasilla(id1,id2,position)
        return this
    }
    build(): Board<Cuadrado, number> {
        let board=this.board
        this.clear()
        return board
    }
}


//implementacion

function createelements(board:BoardCuadradoNumericoBuilder):BoardCuadradoNumericoBuilder{
    for (let i=0; i<=4;i++){
        board.createCasilla(`${i}`,i)
    }
    for (let i=0; i<=4;i++){
        if(i % 2==0)
            board.addCasilla(`${i}`,`${i+1}`,Cuadrado.abajo)
        else 
            board.addCasilla(`${i}`,`${i+1}`,Cuadrado.arriba)
    }
    return board
}
let boardBuilder= new BoardCuadradoNumericoBuilder()

createelements(boardBuilder)

let board=boardBuilder.build()

board.recorrer()