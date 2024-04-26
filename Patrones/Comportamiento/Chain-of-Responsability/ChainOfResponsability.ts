interface Handler{
    setNext(h:Handler):void
    handle(request:string):void
}

class BaseHandler implements Handler{
    private next:Handler
    private name:string

    setNext(h:Handler){
        this.next=h
    }
    handle(request:string){
        if (this.next!=null)
            this.next.handle(request)
        else
        console.log('No se manejo',request);
        
    }
    constructor(name:string){
        this.name=name
    }
    getname(){
        return this.name
    }
}

class ConcreteHandler extends BaseHandler{
    handle(request: string): void {
        if (this.canHandle(request)) console.log('Se manejo aca',this.getname());
        else{
            super.handle(request)
        }
    }

    setNext(h: Handler): void {
        super.setNext(h);
    }

    canHandle(request:string):boolean{
        if (request==super.getname()) return true
        else return false
    }
    constructor(name:string){
        super(name)
    }
}

let h1 = new ConcreteHandler('hola')
let h2 = new ConcreteHandler('prueba')
let h3 = new ConcreteHandler('12346')

h1.setNext(h2);
h2.setNext(h3);

h1.handle('prueba')
h1.handle('hola')
h1.handle('12346')
h1.handle('')


