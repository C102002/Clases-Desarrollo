export interface Component{
    execute():void
}

class ConcreteComponent implements Component{
    name:string
    execute(): void {
        console.log('Execute de componente concreto');
    }
    constructor(name:string){
        this.name=name
    }
}

class BaseDecorator implements Component{
    wraperr: Component
    BaseDecorator(c:Component){
        this.wraperr=c;
    }
    execute():void{
        console.log('Execute de componente decorador base');
    }

    constructor(component:Component){
        this.wraperr=component
    }
}

class ConcreteDecoratorA extends BaseDecorator {
    execute():void{
        console.log('Execute de componente decorador concreto A');
        super.execute()
        this.extra()
    }
    extra():void{
        console.log('Funcionalidad extra A1');
    }

    constructor(component:Component){
        super(component)
    }
}

class ConcreteDecoratorB extends BaseDecorator {
    execute():void{
        console.log('Execute de componente decorador concreto B');
        super.execute()
        this.extra()

    }
    extra():void{
        console.log('Funcionalidad extra B1');
    }

    constructor(component:Component){
        super(component)
    }
}

let concreteComponent= new ConcreteComponent('componente 1')

concreteComponent.execute()


let decorator= new BaseDecorator(concreteComponent)

decorator.execute()
console.log('---------------');


let concreteComponentA= new ConcreteDecoratorA(concreteComponent)

concreteComponentA.execute()
console.log('---------------');


let concreteComponentB= new ConcreteDecoratorB(concreteComponentA)

console.log('Decorando B sobre A');
concreteComponentB.execute()

