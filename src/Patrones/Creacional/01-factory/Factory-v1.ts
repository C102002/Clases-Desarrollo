
interface  Button {
    doStuff():void
}

class concreteProductA implements Button  {
    doStuff(): void {
        console.log('Se hizo un producto concreto A');
    }
    constructor(){
        this.doStuff();
    }
}

class concreteProductB implements Button  {
    doStuff(): void {
        console.log('Se hizo un producto concreto B');
    }
    constructor(){
        this.doStuff();
    }
}

class Dialog {

    createButton():Button{
        let button = new concreteProductA()
        return button
    }

    constructor(private readonly id:string){}   
}

class WindowsDialog extends Dialog{

    createButton():Button{
        let button = new concreteProductA()
        return button
    }
}

class WebDialog extends Dialog{

    createButton():Button{
        let button = new concreteProductB()
        return button
    }
}
///Boton tipo A
let button:Dialog=new Dialog('1234654')
let a=button.createButton();
console.log(a.doStuff());

let button2:Dialog=new WebDialog('133')
let b=button2.createButton();
console.log(b.doStuff());
