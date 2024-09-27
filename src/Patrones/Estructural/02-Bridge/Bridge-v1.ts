interface Implementation{
    increase():void
    decrease():void
    signal():void
}

class Telefono implements Implementation{
    constructor(){}
    increase(): void {
        this.signal()
        console.log('Increase telefono');
        
    }
    decrease(): void {
        this.signal()
        console.log('Decreace telefono');
    }
    signal(): void {
        console.log('Signal telefono');
    }
}

class Controller implements Implementation{
    constructor(){}
    increase(): void {
        this.signal()
        console.log('Increase controller');
        
    }
    decrease(): void {
        this.signal()
        console.log('Decreace controller');
    }
    signal(): void {
        console.log('Signal controller');
    }
}

class Abstraction {
    i:Implementation
    increseFeature():void{
        this.i.increase()
    }
    decreaseFeature():void{
        this.i.decrease()
    }
    signalFeature():void{
        this.i.signal()
    }
    constructor(){}
    setImplentation(i:Implementation){
        this.i=i
    }
}

let abstratiction= new Abstraction();
let controll =new Controller()
let telefono =new Telefono()

abstratiction.setImplentation(controll)
abstratiction.increseFeature()

abstratiction.setImplentation(telefono)
abstratiction.increseFeature()
