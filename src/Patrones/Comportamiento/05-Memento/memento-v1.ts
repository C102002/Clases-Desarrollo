// interface Memento{
//     do():void
//     getState():string
// }


// class Originator { //Originator
//     state: string =null
//     setState(state:string){
//         this.state=state;
//     }
//     save():Memento{
//         return new ConcreteMemento(this.state)
//     }
//     restore(m:Memento){
//         this.state=m.getState();
//         console.log('Se restauro');
        
//     }
// }

// class ConcreteMemento implements Memento{
//     state:string
//     concreteMemento(state:string){
//         this.state=state;
//     }
//     getState():string{
//         return this.state
//     }
//     do(): void {
        
//     }
//     constructor(state:string){
//         this.state=state
//     }
// }

// class Caretaker{
//     originator:Originator
//     history: Memento[]=[]

//     undo():void{
//         if (this.history.length<0) return

//         const memento=this.history.pop();

//         console.log('Restoring ',memento.getState());
//         this.originator.restore(memento)
//     }
//     save(originator:Originator):void{
//         let memento = new ConcreteMemento(originator.state)
//         this.history.push(memento)
//     }
//     constructor (originator:Originator){
//         this.originator=originator;
//         this.save(originator)
//     }
// }

// let game = new Originator();
// let historyGame= new Caretaker(game)
// game.setState('guardado 1');

// historyGame.save(game);

// for (let i=0; i<100;i++){
//     let game_i= new Originator();
//     game.setState(i.toString());
//     historyGame.save(game)
// }

// historyGame.undo()

// console.log(historyGame.originator);



