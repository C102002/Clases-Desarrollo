abstract class GameAI {
    takeTurn():void{
        this.BuildUnits()
        this.buildStructure()
    }
    abstract buildStructure():void
    abstract BuildUnits():void
    abstract sendScouts(position:number):void
    abstract sendWarriors(position:number):void
    constructor(){}
}

class OrcsAI extends GameAI{
    takeTurn(): void {
        console.log(`Soy un orco es mi turno de atacar`);
        super.takeTurn()
    }
    buildStructure(): void { 
        console.log(`Soy bueno construyendo estructuras`);
    }
    BuildUnits(): void {
        console.log(`Soy malo reuniendo  unidades`); 
    }
    sendScouts(position: number): void {
        console.log(`mando unidades a vigilar la posicion ${position}`);
    }
    sendWarriors(position: number): void { 
        console.log(`mando mis guerreros a la posicion ${position}`);
    }
}

class MonsterAI extends GameAI{
    takeTurn(): void {
        console.log(`Soy un monstruo es mi turno de atacar`);
        super.takeTurn();
    }
    buildStructure(): void { 
        console.log(`Soy malor construyendo estructuras`);
    }
    BuildUnits(): void {
        console.log(`Soy bueno reuniendo  unidades`); 
    }
    sendScouts(position: number): void {
        console.log(`mando unidades a vigilar la posicion ${position}
            nadie sabe que ahi estoy`);
    }
    sendWarriors(position: number): void { 
        console.log(`mando mis guerreros a la posicion ${position} (al instante mueren)`);
    }
}

let monsterAI= new MonsterAI()
let orcsAI= new OrcsAI()

monsterAI.takeTurn()
console.log('----------------------------');
orcsAI.takeTurn()