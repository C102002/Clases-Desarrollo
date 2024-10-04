//Estructura
//context
class GameTable{
    private playerState:PlayerState
    constructor(playerState:PlayerState){
        this.playerState=playerState
        this.changePlayerState(playerState)
    }
    changePlayerState(playerState:PlayerState){
        this.playerState=playerState
        this.playerState.setGameTable(this)
    }
    attack(){
        this.playerState.attack()
    }
    heal(){
        this.playerState.heal()
    }
    get PlayerState(){return this.playerState}
}
//State
abstract class PlayerState{
    protected gameTable?:GameTable
    abstract attack():void
    abstract heal():void
    setGameTable(context:GameTable){
        this.gameTable=context
    }
    constructor(game?:GameTable){
        if(game) this.gameTable=game
    }
    get name(){return this.constructor.name}
}
class CriticPlayerState extends PlayerState{
    attack(): void {
        console.log('Attack to enemy +500 dmg');
    }
    heal(): void {
        console.log('Heal user +50 hp');
        if (this.gameTable) 
            this.gameTable.changePlayerState( new NormalPlayerState())
    }
    setGameTable(context: GameTable): void {
        super.setGameTable(context);
    }
    constructor(){
        super()
    }

    get name(){return this.constructor.name}

}

class NormalPlayerState extends PlayerState{
    attack(): void {
        console.log('Attack to enemy +50 dmg');
        console.log('But make damage to itself');
        if(this.gameTable) 
            this.gameTable.changePlayerState(new CriticPlayerState())
    }
    heal(): void {
        console.log('Cannot heal is full hp');
    }
    setGameTable(context: GameTable): void {
        super.setGameTable(context);
    }
    constructor(){
        super()
    }

}

//implementacion

let table= new GameTable(new CriticPlayerState())
console.log(table.PlayerState.name);
table.attack()
table.heal()

//Esperado
// CriticPlayerState
//Attack to enemy +500 dmg
//Heal user +50 hp
console.log('------------------------------------------');
console.log(table.PlayerState.name);
table.heal();
table.attack();

//Esperando
// NormalPlayerState
// Cannot heal is full hp
// Attack to enemy +50 dmg
// But make damage to itself