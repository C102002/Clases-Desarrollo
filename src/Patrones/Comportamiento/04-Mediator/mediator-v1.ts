//Estructura
interface Mediator <T>{
    notify(sender:T):void
}

class MediatorButton{
    constructor(
        private mediator?:MediatorDialog
    ){}
    execute(){
        console.log(`Soy un boton me dieron click :)`);
    }
    setMediator(mediator:MediatorDialog){this.mediator=mediator}
}

class CheckBox{
    private valor=false
    constructor(
        private mediator?:MediatorDialog
    ){}
    execute(){
        this.valor=!this.valor
        console.log(`Soy un checkbox me dieron click :) ahora soy valor ${this.valor}`);
    }
    setMediator(mediator:MediatorDialog){this.mediator=mediator}
}

class TextField{
    private data='';
    constructor(
        private mediator?:MediatorDialog
    ){}
    execute(data:string){
        this.data=data
        console.log(`Soy un textfield me dieron click mi data es: ${this.data}`);
    }
    setMediator(mediator:MediatorDialog){this.mediator=mediator}
}
//Implementacion

class MediatorDialog implements Mediator<any>{

    notify(sender: any): void {
        if (sender instanceof MediatorButton) this.MediatorbuttonClick()
        if (sender instanceof CheckBox) this.checkBoxClick()
        if (sender instanceof TextField) this.textFieldInsertData("insert data de prueba")
    }
    MediatorbuttonClick(){this.Mediatorbutton.execute()}
    checkBoxClick(){this.checkBox.execute()}
    textFieldInsertData(data:string){this.TextField.execute(data)}
    constructor(
        private Mediatorbutton:MediatorButton,
        private checkBox:CheckBox,
        private TextField:TextField
    ){}
}
let Mediatorbutton= new MediatorButton()
let checkBox= new CheckBox()
let textField= new TextField()

let Mediatordialog= new MediatorDialog(
    Mediatorbutton,
    checkBox,
    textField
)

Mediatorbutton.setMediator(Mediatordialog)
checkBox.setMediator(Mediatordialog)
textField.setMediator(Mediatordialog)

Mediatordialog.notify(Mediatorbutton)
Mediatordialog.notify(checkBox)
Mediatordialog.notify(textField)
Mediatordialog.notify(checkBox)
//Esperando
// Soy un boton me dieron click :)
// Soy un checkbox me dieron click :) ahora soy valor true
// Soy un textfield me dieron click mi data es: insert data de prueba
// Soy un checkbox me dieron click :) ahora soy valor false