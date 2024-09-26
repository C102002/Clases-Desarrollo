// class Juego {
//     private name: string;
//     private check: number;

//     constructor (name: string, check: number) {
//         this.name = name;
//         this.check = check;
//     }

//     getNombre(): string {
//         return this.name;
//     }

//     getCheck(): number {
//         return this.check;
//     }
// }

// interface IMemento {
//     getEstado(): Juego;
// }

// class Memento implements IMemento {

//     private estado: Juego;

//     constructor(estado: Juego) {
//         this.estado = estado;
//     }

//     getEstado(): Juego {
//         return this.estado;
//     }

// }

// class Originator {

//     private estado!: Juego;

//     setEstado(estado: Juego): void {
//         this.estado = estado;
//     }

//     getEstado(): Juego {
//         return this.estado;
//     }

//     guardar(): Memento {
//         return new Memento(this.estado);
//     }

//     restaurar(m: Memento): void {
//         this.estado = m.getEstado();
//     }
// }

// class Caretaker {

//     private history: Array<IMemento> = new Array();
    
//     addMemento(m: IMemento) {
//         this.history.push(m);
//     }

//     getMemento(num: number): IMemento {
//         return this.history[num];
//     }
// }

// let originator = new Originator();
// let caretaker = new Caretaker();
// let juego = new Juego('juego 1', 1);

// originator.setEstado(juego);
// caretaker.addMemento(originator.guardar());

// juego = new Juego('Juego 2', 2);

// originator.setEstado(juego);
// caretaker.addMemento(originator.guardar());

// let memento = caretaker.getMemento(0);
// let oldJuego = memento.getEstado();

// console.log(oldJuego.getNombre());
