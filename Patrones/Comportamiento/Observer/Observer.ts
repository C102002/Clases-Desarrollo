interface Subscriber{
    update():void
}

class Publisher {
    subscribers:Subscriber[]=[]
    mainState:string

    constructor(){
    }

    find(s:Subscriber){
        this.subscribers.map((subs)=>{
            if (subs==s) return true
        })
        return false
    }

    subscribe(s:Subscriber){
        if (this.find(s)) return;
        this.subscribers.push(s);

    }
    unsubscribe(s:Subscriber){
        this.subscribers=this.subscribers.filter((elemento)=>elemento!==s)
    }
    notifySubscribers(){
        this.subscribers.forEach((subscriber)=>{
            subscriber.update()
        })
    }
    mainBuisnessLogic(newState:string):void{
        this.mainState=newState;
        this.notifySubscribers()
    }
}

class ConcreteSubscribers implements Subscriber{
    name:string

    update():void {
        console.log('Cambio de estado');
    }

    constructor(name:string){
        this.name=name
    }
}

let subject = new ConcreteSubscribers('hola')
let subject1 = new ConcreteSubscribers('pepe')
let subject2 = new ConcreteSubscribers('prueba')


let observer = new Publisher();

observer.subscribe(subject);
observer.subscribe(subject1);

console.log(observer.subscribers.length);

observer.subscribe(subject1);
console.log(observer.subscribers.length);

observer.mainBuisnessLogic('cambio')