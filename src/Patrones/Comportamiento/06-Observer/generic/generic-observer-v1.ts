interface Subscriber <T>{
    update(data:T):void
}

class Publisher <T> {
    subscribers:Subscriber<T>[]=[]

    constructor(
        public mainState:T
    ){}

    find(s:Subscriber<T>){
        this.subscribers.forEach((subs)=>{
            if (subs==s) return true
        })
        return false
    }

    subscribe(s:Subscriber<T>){
        if (this.find(s)) return;
        this.subscribers.push(s);
    }
    unsubscribe(s:Subscriber<T>){
        this.subscribers=this.subscribers.filter((elemento)=>elemento!==s)
    }
    notifySubscribers(){
        this.subscribers.forEach((subscriber)=>{
            subscriber.update(this.mainState)
        })
    }
    mainBuisnessLogic(newState:T):void{
        this.mainState=newState;
        this.notifySubscribers()
    }
}

class StringSubscriber<T> implements Subscriber<T>{
    name:string

    update(data:T):void {
        console.log('Cambio de estado')
        console.log(`new data ${data}`);
    }

    constructor(name:string){
        this.name=name
    }
}

let subject = new StringSubscriber('hola')
let subject1 = new StringSubscriber('pepe')
let subject2 = new StringSubscriber('prueba')


let observer = new Publisher('string publisher');

observer.subscribe(subject);
observer.subscribe(subject1);
observer.subscribe(subject2);

observer.mainBuisnessLogic('cambio')