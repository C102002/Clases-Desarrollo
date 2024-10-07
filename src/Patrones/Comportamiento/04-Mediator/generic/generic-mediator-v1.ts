//Estructura
interface IMediator <T>{
    notify(sender:T):void
}

interface GenericComponent <T,E>{
    execute(data:T):E
}

class GenericButton <T,E> implements GenericComponent<void,void>{
    constructor(
        private mediator?:GenericDialog<T,E>
    ){}
    execute(){
        console.log(`Soy un boton me dieron click :)`);
    }
    setMediator(mediator:GenericDialog<T,E>){this.mediator=mediator}
}

class GenericCheckBox <T,E> implements GenericComponent<void,void>{
    private valor=false
    constructor(
        private mediator?:GenericDialog<T,E>
    ){}
    execute(){
        this.valor=!this.valor
        console.log(`Soy un Genericcheckbox me dieron click :) ahora soy valor ${this.valor}`);
    }
    setMediator(mediator:GenericDialog<T,E>){this.mediator=mediator}
}

class GenericTextField <T,E> implements GenericComponent<string,void>{
    private data='';
    constructor(
        private mediator?:GenericDialog<T,E>
    ){}
    execute(data:string){
        this.data=data
        console.log(`Soy un Generictextfield me dieron click mi data es: ${this.data}`);
    }
    setMediator(mediator:GenericDialog<T,E>){this.mediator=mediator}
}
//Implementacion

class GenericDialog <T,E> implements IMediator<GenericComponent<T,E>>{

    notify(sender: GenericComponent<T,E>): void {
        if (sender instanceof GenericButton) this.GenericbuttonClick()
        if (sender instanceof GenericCheckBox) this.GenericcheckBoxClick()
        if (sender instanceof GenericTextField) this.GenerictextFieldInsertData("insert data de prueba")
    }
    GenericbuttonClick(){this.Genericbutton.execute()}
    GenericcheckBoxClick(){this.GenericcheckBox.execute()}
    GenerictextFieldInsertData(data:string){this.GenericTextField.execute(data)}
    constructor(
        private Genericbutton:GenericButton<T,E>,
        private GenericcheckBox:GenericCheckBox<T,E>,
        private GenericTextField:GenericTextField<T,E>
    ){}
}
let Genericbutton= new GenericButton()
let GenericcheckBox= new GenericCheckBox()
let GenerictextField= new GenericTextField()

let Genericdialog= new GenericDialog(
    Genericbutton,
    GenericcheckBox,
    GenerictextField
)

Genericbutton.setMediator(Genericdialog)
GenericcheckBox.setMediator(Genericdialog)
GenerictextField.setMediator(Genericdialog)

Genericdialog.notify(Genericbutton)
Genericdialog.notify(GenericcheckBox)
Genericdialog.notify(GenerictextField)
Genericdialog.notify(GenericcheckBox)
//Esperando
// Soy un boton me dieron click :)
// Soy un Genericcheckbox me dieron click :) ahora soy valor true
// Soy un Generictextfield me dieron click mi data es: insert data de prueba
// Soy un Genericcheckbox me dieron click :) ahora soy valor false