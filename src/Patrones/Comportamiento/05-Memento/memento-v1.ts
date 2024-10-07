//estructura
interface Memento{
    do():void
    getState():string
    getDate():Date
}


class Originator { //Originator
    state: string=''
    setState(state:string){
        this.state=state;
    }
    save():Memento{
        return new ConcreteMemento(this.state)
    }
    restore(m:Memento){
        this.state=m.getState();
        console.log('Se restauro');
    }
    changeCurrentState(state:string){
        this.state=state
    }
    constructor(state:string){
        this.state=state
    }
}

class ConcreteMemento implements Memento{
    private state:string
    private date:Date
    concreteMemento(state:string){
        this.state=state;
    }
    getState():string{
        return this.state
    }
    do(): void {
        console.log("Estoy haciendo algo ahora mismo");
    }
    constructor(state:string){
        this.state=state
        this.date=new Date()
    }
    getDate(): Date {
        return this.date
    }
}

class Caretaker{
    originator:Originator
    history: Memento[]=[]

    undo():void{
        if (this.history.length<0) return
        const memento=this.history.pop();
        if (!memento) return
        console.log('Restoring ',memento.getState());
        this.originator.restore(memento)
    }
    save(originator:Originator):void{
        let memento = new ConcreteMemento(originator.state)
        this.history.push(memento)
    }
    constructor (originator:Originator){
        this.originator=originator;
        this.save(originator)
    }
    showHistory():void{
        console.log("\x1b[33m%s\x1b[0m","Todos los mementos actuales")
        for (const memento of this.history){
            console.log(memento);
        }
    }
}
//Implementacion

let game = new Originator("God of war Ragnarok")
let historyGame= new Caretaker(game)
game.setState(`Partida empezada`);
console.log("Juego iniciado :)");
console.log('current game state:',game.state);

for (let i=0; i<10;i++){
    historyGame.save(game)
    game.changeCurrentState(`guardado checkpoint #${i}`)
    game.save()
}

historyGame.showHistory()

const lastcheckpoint=historyGame.originator
console.log(`last game state saved: ${lastcheckpoint.state}`);
console.log('current game state:',game.state);
console.log("\x1b[33m%s\x1b[0m","Cargando ultimo checkpoint guardado ...")
historyGame.undo()
const loadedcheckpoint=historyGame.originator
console.log('current game state:',loadedcheckpoint.state);

//esperando
// Juego iniciado :)
// current game state: Partida empezada
// last game state saved: guardado checkpoint #9
// current game state: guardado checkpoint #9
// Cargando ultimo checkpoint guardado ...
// Restoring  guardado checkpoint #8
// Se restauro
// current game state: guardado checkpoint #8