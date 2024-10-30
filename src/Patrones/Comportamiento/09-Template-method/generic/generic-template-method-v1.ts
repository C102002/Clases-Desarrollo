abstract class GameAI <T> {
    data:T
    takeTurn():void{
        this.BuildUnits()
        this.buildStructure()
    }
    abstract buildStructure():void
    abstract BuildUnits():void
    abstract sendScouts(position:number):void
    abstract sendWarriors(position:number):void
    constructor(
        data:T
    ){this.data=data}
    abstract actualTropas():void
}

interface OrcsData{
    tropas:number
}

class OrcsAI extends GameAI<OrcsData>{
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
        this.data.tropas=this.data.tropas-10
        this.actualTropas()
    }
    sendWarriors(position: number): void { 
        console.log(`mando mis guerreros a la posicion ${position}`);
        this.data.tropas=this.data.tropas-3
        this.actualTropas()
    }
    constructor(data:OrcsData){
        super(data)
    }
    actualTropas():void{
        console.log(`Orcos actual tropas ${this.data.tropas}`);

    }
}


interface MonsterData{
    tropas:number
}

class MonsterAI extends GameAI<MonsterData>{
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
        this.data.tropas=this.data.tropas-10
        this.actualTropas()
    }
    sendWarriors(position: number): void { 
        console.log(`mando mis guerreros a la posicion ${position} (al instante mueren)`);
        this.data.tropas=this.data.tropas-5
        this.actualTropas()
    }
    constructor(data:MonsterData){
        super(data)
    }

    actualTropas():void{
        console.log(`Monstruos actual tropas ${this.data.tropas}`);
    }
}

let monsterAI= new MonsterAI({tropas:30})
let orcsAI= new OrcsAI({tropas:30})

monsterAI.takeTurn()
monsterAI.sendWarriors(5)
console.log('----------------------------');
orcsAI.takeTurn()
orcsAI.sendScouts(10)