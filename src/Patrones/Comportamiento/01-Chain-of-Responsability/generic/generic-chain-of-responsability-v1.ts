import { Optional } from '../../../../helpers/Optional';
//Estructura


interface IGenericHandler <T,V,E>{
    setNext(h:IGenericHandler<T,V,E>):void;
    handle(data:T,validate:V):Optional<E>
    canHandle(validate:V):boolean
}

abstract class GenericBaseHandler <T,V,E> implements IGenericHandler<T,V,E>{
    private next:Optional<IGenericHandler<T,V,E>>= new Optional<IGenericHandler<T,V,E>>(null)

    handle(data: T, validate:V): Optional<E> {
        if(!this.next.hasValue()) 
            return new Optional<E>(null);
        return this.next.getValue().handle(data,validate)
    }
    constructor(h?:IGenericHandler<T,V,E>){
        this.next=new Optional(h)
    }
    setNext(h: IGenericHandler<T,V,E>): void {
        this.next=new Optional(h)
    }
    abstract canHandle(validate: V): boolean 
}

//Implementacion

enum Validation{
    numericValidation="numericValidation",
    objectValidation="objectValidation",
    stringValidation="stringValidation",
    randomValidation="randomValidation"
}

class NumericHandler extends GenericBaseHandler<string,Validation,void>{
    handle(data: string,validate:Validation): Optional<void> {
        if(!this.canHandle(validate)) 
            return super.handle(data,validate);
        else
        console.log('process data of:',this.constructor.name,' with data:',data);
        return new Optional<void>(null)
    }
    canHandle(validate: Validation): boolean {
        return (validate===Validation.numericValidation)
    }
}

class ObjectHandler extends GenericBaseHandler<string,Validation,void>{
    handle(data: string,validate:Validation): Optional<void> {
        if(!this.canHandle(validate)) 
            return super.handle(data,validate);
        else
        console.log('process data of:',this.constructor.name,' with data:',data);
        return new Optional<void>(null)
    }
    canHandle(validate: Validation): boolean {
        return (validate===Validation.objectValidation)
    }
}

class StringHandler extends GenericBaseHandler<string,Validation,void>{
    handle(data: string,validate:Validation): Optional<void> {
        if(!this.canHandle(validate)) 
            return super.handle(data,validate);
        else
        console.log('process data of:',this.constructor.name,' with data:',data);
        return new Optional<void>(null)
    }
    canHandle(validate: Validation): boolean {
        return (validate===Validation.stringValidation)
    }
}

let handler= new NumericHandler(
    new StringHandler(
        new ObjectHandler()
    )
)
handler.handle('4546',Validation.numericValidation);
// Esperando
// process data of: NumericHandler  with data: 4546

handler.handle('object',Validation.objectValidation);
// Esperando
// process data of: ObjectHandler  with data: 4546

handler.handle('string',Validation.stringValidation);
// Esperando
// process data of: StringHandler  with data: string

handler.handle('random',Validation.randomValidation);
// Esperando
// No se procese
