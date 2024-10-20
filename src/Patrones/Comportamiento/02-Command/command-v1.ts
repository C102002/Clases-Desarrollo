interface ICommand{
    execute():void
}

class Invoker{
    constructor(
        private command:ICommand
    ){}
    setCommand(c:ICommand){
        this.command=c
    }
    execute(){
        this.command.execute()
    }
}

class ConectionToReciver{
    constructor(){}
    execute(){
        console.log(`Me conecte con el receptor`);
    }
}

class Reciver{
    value:boolean=false
    constructor() {}
    changeTrue(){this.value=true}
    changeFalse(){this.value=false}
}

class TurnOnCommand implements ICommand{
    execute(): void {
        this.logicBusiness.execute()
        this.reciver.changeTrue()
    }
    constructor(
        private logicBusiness:ConectionToReciver,
        private reciver:Reciver
    ){}
}

class TurnOffCommand implements ICommand{
    execute(): void {
        this.logicBusiness.execute()
        this.reciver.changeFalse()
    }
    constructor(
        private logicBusiness:ConectionToReciver,
        private reciver:Reciver
    ){}
}

//Implementacion
let reciver= new Reciver()
let turnOnCommand= new TurnOnCommand(new ConectionToReciver(),reciver)
let turnOffCommand= new TurnOffCommand(new ConectionToReciver(),reciver)

console.log(reciver);
// Esperando 
// Reciver { value: false }
let invoker=new Invoker(turnOnCommand)
invoker.execute()
// Esperando 
// Me conecte con el receptor
// Reciver { value: true }
console.log(reciver);
invoker.setCommand(turnOffCommand)
invoker.execute()

//esperando 
// Reciver { value: false }
console.log(reciver);
