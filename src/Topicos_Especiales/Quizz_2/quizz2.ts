class Oraculo implements IAction {
    printNumber(){
        console.log(`El numero del oraculo es :${Math.random()*100}`)
    }
}

interface IAction{
    printNumber():void
}

class Decorator implements IAction{
    constructor(private readonly wrapper:IAction){}
    printNumber(): void {
        this.wrapper.printNumber()
    }
}

class WelcomeDecorator extends Decorator{
    constructor(action:IAction,public message:string){
        super(action)
    }
    printNumber(): void {
        console.log(`${this.message}`)
        super.printNumber()
    }
}

class GoodByeDecorator extends Decorator{
    constructor(action:IAction,public message:string){
        super(action)
    }
    printNumber(): void {
        super.printNumber()
        console.log(`${this.message}`)
    }
}

//implementacion 

let valor= new GoodByeDecorator(
    new WelcomeDecorator(
        new Oraculo()
        ,'Hasta luego gracias por consultar el oraculo'
    ),'Bienvenido al oraculo'
)
//Deberia imprimir
// Hasta luego visite de nuevo la busqueda del oraculo
// El numero del oraculo es :${Math.random()*100}
// Bienvenido a la busqueda del oraculo

valor.printNumber()

let othervalor= new GoodByeDecorator(
    new WelcomeDecorator(
        new Oraculo()
        ,'Bienvenido al oraculo'
    ),'Hasta luego gracias por visitar al Oraculo'
)
console.log('-------------------------------------')
//Deberia imprimir
// Bienvenido a la busqueda del oraculo
// El numero del oraculo es :${Math.random()*100}
// Hasta luego visite de nuevo la busqueda del oraculo

othervalor.printNumber()
