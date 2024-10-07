//Estructura
interface Mediator <T>{
    notify(sender:T):void
}

class Button{
    constructor(
        private mediator?:Dialog
    ){}
    execute(){
        console.log(`Soy un boton me dieron click :)`);
    }
    setMediator(mediator:Dialog){this.mediator=mediator}
}

class CheckBox{
    private valor=false
    constructor(
        private mediator?:Dialog
    ){}
    execute(){
        this.valor=!this.valor
        console.log(`Soy un checkbox me dieron click :) ahora soy valor ${this.valor}`);
    }
    setMediator(mediator:Dialog){this.mediator=mediator}
}

class TextField{
    private data='';
    constructor(
        private mediator?:Dialog
    ){}
    execute(data:string){
        this.data=data
        console.log(`Soy un textfield me dieron click mi data es: ${this.data}`);
    }
    setMediator(mediator:Dialog){this.mediator=mediator}
}
//Implementacion

class Dialog implements Mediator<any>{

    notify(sender: any): void {
        if (sender instanceof Button) this.buttonClick()
        if (sender instanceof CheckBox) this.checkBoxClick()
        if (sender instanceof TextField) this.textFieldInsertData("insert data de prueba")
    }
    buttonClick(){this.button.execute()}
    checkBoxClick(){this.checkBox.execute()}
    textFieldInsertData(data:string){this.TextField.execute(data)}
    constructor(
        private button:Button,
        private checkBox:CheckBox,
        private TextField:TextField
    ){}
}
let button= new Button()
let checkBox= new CheckBox()
let textField= new TextField()

let dialog= new Dialog(
    button,
    checkBox,
    textField
)

button.setMediator(dialog)
checkBox.setMediator(dialog)
textField.setMediator(dialog)

dialog.notify(button)
dialog.notify(checkBox)
dialog.notify(textField)
dialog.notify(checkBox)
//Esperando
// Soy un boton me dieron click :)
// Soy un checkbox me dieron click :) ahora soy valor true
// Soy un textfield me dieron click mi data es: insert data de prueba
// Soy un checkbox me dieron click :) ahora soy valor false