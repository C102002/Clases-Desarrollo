import { Optional } from '../../../Parciales/Parcial_3/helpers/Optional';
//Estructura

enum Validation{
    numericValidation="numericValidation",
    objectValidation="objectValidation",
    stringValidation="stringValidation"

}

interface Data{
    data:any
}

interface IHandler{
    setNext(h:IHandler):void;
    handle(data:Data,validate:Validation):void
    canHandle(validate:Validation):boolean
}

class BaseHandler implements IHandler{
    private next?:IHandler
    setNext(h: IHandler): void {
        this.next=h
    }
    handle(data: Data, validate:Validation): void {
        if(this.next) this.next.handle(data,validate)
    }
    constructor(h?: IHandler){
        this.next=h
    }
    canHandle(validate: Validation): boolean {
        if (validate.valueOf()===Validation.toString()) return true
        return false
    }
}

//Implementacion

class NumericHandler extends BaseHandler{
    handle(data: Data,validate:Validation): void {
        if(!this.canHandle(validate)) 
            super.handle(data,validate);
        else
        console.log('process data of:',this.constructor.name,' with data:',data);
    }
    canHandle(validate: Validation): boolean {
        return (validate===Validation.numericValidation)
    }
}

class ObjectHandler extends BaseHandler{
    handle(data: Data, validate:Validation): void {
        if(!this.canHandle(validate)) 
            super.handle(data,validate);
        else
        console.log('process data of:',this.constructor.name,' with data:',data);
    }
    canHandle(validate: Validation): boolean {
        return (validate===Validation.objectValidation)
    }
}

class StringHandler extends BaseHandler{
    handle(data: Data,validate:Validation): void {
        if(!this.canHandle(validate)) 
            super.handle(data,validate); 
        else
        console.log('process data of:',this.constructor.name,' with data:',data);
    }
    canHandle(validate: Validation): boolean {
        return (validate===Validation.stringValidation)
    }
}

let numericHandler= new NumericHandler(
    new StringHandler(
        new ObjectHandler()
    )
);

numericHandler.handle({data:'564'},Validation.numericValidation);
// Esperando
// process data of: NumericHandler  with data: { data: '564' }
console.log('------------------------------------------------------------------------');
numericHandler.handle({data:'prueba'},Validation.objectValidation);
//Esperando
// process data of: ObjectHandler  with data: { data: 'prueba' }
console.log('------------------------------------------------------------------------');
numericHandler.handle({data:'name'},Validation.stringValidation);
//Esperando
// process data of: StringHandler  with data: { data: 'name' }