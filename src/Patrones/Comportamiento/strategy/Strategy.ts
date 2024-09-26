interface Strategy{
    execute(data:string):void
}

class ContextStrategy{
    private strategy:Strategy

    setStrategy(strategy:Strategy){
        this.strategy=strategy
    }
    do(data:string):void{
        console.log('Context Do something');
        this.strategy.execute(data)
    }
}

class LowercaseStrategy implements Strategy{
    execute(data: string): void {
        data=data.toLowerCase()
        console.log(data);
    }
    constructor(){

    }
}

class UppercaseStrategy implements Strategy{
    execute(data: string): void {
        data=data.toUpperCase()
        console.log(data);
    }
    constructor(){}
}

let lower =new LowercaseStrategy()
let upper = new UppercaseStrategy()

let contextStrategy= new ContextStrategy();
contextStrategy.setStrategy(lower)
contextStrategy.do('HoLa soy Sergio')

contextStrategy.setStrategy(upper)
contextStrategy.do('HoLa soy Sergio')
